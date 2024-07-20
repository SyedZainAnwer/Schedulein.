from flask import jsonify, request
from models.user import User

def register_user():
    email = request.json["email"]
    password = request.json["password"]
    
    user_exist = User.query.filter_by(email=email).first()
    
    # user = User.
    
    if user_exist:
        return jsonify({"error":"User already exist"}),400