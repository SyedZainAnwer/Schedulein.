from flask import request, jsonify
from models.user import User
from extensions import db

def delete_user():
    email = request.get_json().get('email')
    
    # Check if the email is provided
    if not email:
        return jsonify({"message": "Email is required to delete a user"}), 400
    
    # Find the user by email
    user = User.query.filter_by(email=email).first()
    
    # If the user does not exist, return an error
    if not user:
        return jsonify({"message": "User not found"}), 404
    
    # Delete the user
    db.session.delete(user)
    db.session.commit()
    
    return jsonify({"message": "User deleted successfully"}), 200
