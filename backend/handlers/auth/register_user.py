from flask import jsonify, request, session
from models.user import User
from extensions import bcrypt, db

def register_user():
    # Retrieve form data
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    
    # Check for an existing user with the same email
    user_exist = User.query.filter_by(email=email).first()
    
    if user_exist:
        return jsonify({"message": "User already exists"}), 400

    if not username or not email or not password:
        return jsonify({"message": "Missing required fields"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    
    # Create a new user
    new_user = User(username=username, email=email, password=hashed_password)
    db.session.add(new_user)
    session['user_id'] = new_user.id
    
    try:
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": "An error occurred while creating the user."}), 500

    # Optionally, you can log the user in or return a success response
    return jsonify({"message": "User registered successfully!"}), 201



def register_social_user(user_info, provider):
    email = user_info['email']
    user_exist = User.query.filter_by(email=email).first
    
    if user_exist:
        return jsonify({"message": "User already exist"}), 400
    
    user = User(
        username=user_info['name'] or user_info.get('login'),
        email=email,
        social_id=user_info['sub'],
        social_provider=provider,
        profile_picture=user_info.get('picture') or None
    )
    
    db.session.add(user)
    db.session.commit()
    
    return jsonify({"success": "User registered successfully!"}), 201