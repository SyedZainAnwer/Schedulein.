from flask import Flask
from flask_cors import CORS
from config import Config
from extensions import db, migrate, bcrypt
from handlers import auth_blueprint
from utils.oauth import oauth
from dotenv import load_dotenv

def create_app():
    load_dotenv()
    
    app = Flask(__name__)
    
    # Load configurations from Config class
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    oauth.init_app(app)
    
    # Register blueprints
    app.register_blueprint(auth_blueprint, url_prefix='/auth')
    
    # Enable CORS
    CORS(app)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=8000, debug=True)
