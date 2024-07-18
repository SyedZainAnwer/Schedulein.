from flask import Flask
from flask_cors import CORS
from config import Config
from extensions import db, migrate
from models import User, UserTeam, Task, Team, Project, ProjectFolder, Collaborator, Invitation

app = Flask(__name__)

app.config.from_object(Config)

db.init_app(app) # intialize db with the app
migrate.init_app(app, db)

CORS(app)

@app.route('/')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=False)
