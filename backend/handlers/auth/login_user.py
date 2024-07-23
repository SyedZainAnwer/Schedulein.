from flask import request, jsonify, url_for, session
from utils.oauth import google, facebook, github
from .register_user import register_social_user
from models.user import User
from flask_bcrypt import check_password_hash

def login_user_through_email_password():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    
    print(f"User: {email}, Password: {password}")
    
    user = User.query.filter_by(email=email).first()
    
    if not user:
        return jsonify({"error": "User does not exist!"}), 404
    
    if user and check_password_hash(user.password, password):
        session['user_id'] = user.id
        return jsonify({"success": "Login successful!"}), 200
    else:
        return jsonify({"error": "Please enter correct credentials!"}), 401
    


def social_login(provider):
    if provider == "google":
        return google.authorize(callback=url_for(
            'auth.social_callback', 
            provider = 'google', 
            _external = True
        ))
    elif provider == "facebook":
        return facebook.authorize(callback=url_for(
            'auth.social_callback',
            provider = 'facebook',
            _external = True
        ))
    elif provider == "github":
        return github.authorize(callback=url_for(
            'auth.social_callback',
            provider = 'github',
            _external = True
        ))
    else:
        return jsonify({"error": "Provider not supported"}), 400
    
def social_callback(provider):
    if provider == "google":
        response = google.authorized_response()
        oauth_provider = google
    elif provider == "facebook":
        response = facebook.authorized_response()
        oauth_provider = facebook
    elif provider == "github":
        response = github.authorized_response()
        oauth_provider = github
    else:
        return jsonify({"error": "Provider not supported"}), 400
    
    if response is None or response.get('access_token') is None:
        return jsonify({"error": "Access denied!"}), 401
    
    user_info = oauth_provider.get('userinfo')
    user_data = user_info.data
    return register_social_user(user_data, provider)