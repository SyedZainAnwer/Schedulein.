from flask import Blueprint
from .auth.register_user import register_user, register_social_user
from .auth.login_user import login_user_through_email_password, social_login, social_callback
from .auth.delete_user import delete_user

auth_blueprint = Blueprint('auth', __name__)

# Route for user registration
auth_blueprint.route('/register', methods=['POST'])(register_user)

# Route for login with email and password
auth_blueprint.route('/login', methods=['POST'])(login_user_through_email_password)

# Route for deleting a user
auth_blueprint.route('/delete_user', methods=['DELETE'])(delete_user)

# Route for social login initiation
auth_blueprint.route('/login/<provider>', methods=['GET'])(social_login)

# Route for social login callback
auth_blueprint.route('/login/<provider>/callback', methods=['GET'])(social_callback)
