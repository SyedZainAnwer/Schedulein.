from flask import request, jsonify
from models.user import User

def login_user_through_email_password():
    creds = request.data