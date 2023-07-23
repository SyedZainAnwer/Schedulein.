from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from authlib.integrations.flask_client import OAuth

db = SQLAlchemy()
migrate = Migrate()
bcrypt = Bcrypt()
oauth = OAuth()