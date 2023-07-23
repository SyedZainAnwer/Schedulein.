from flask import jsonify, request
from models.user import User
from extensions import bcrypt, db

def register_user():
    username = request.form.get("username")
    email = request.form.get("email")
    password = request.form.get("password")
    
    # check for an existing user through email
    user_exist = User.query.filter_by(email=email).first()
    
    if user_exist:
        return jsonify({"message":"User already exist"}), 400
    
    hash_password = bcrypt.generate_password_hash(password)
    
    user = User(
        username=username, 
        email=email, 
        password=hash_password,
        profile_picture=None
    )
    
    # add the user to the db
    db.session.add(user)
    db.session.commit()
    
    return jsonify({"success": "User registered successfully!"}), 201


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