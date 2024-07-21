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
        return jsonify({"error":"User already exist"}), 400
    
    hash_password = bcrypt.generate_password_hash(password)
    
    user = User(username=username, email=email, password=hash_password)
    
    # add the user to the db
    db.session.add(user)
    db.session.commit()
    
    return jsonify({"success": "User registered successfully!"}), 201