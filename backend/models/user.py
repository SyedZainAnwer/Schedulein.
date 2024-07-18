from extensions import db
from sqlalchemy.orm import relationship

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(128), nullable=True)
    email = db.Column(db.String(128), unique=True, nullable=True)
    password_hash = db.Column(db.String(128), nullable=True)
    social_id = db.Column(db.String(128), nullable=True)
    social_provider = db.Column(db.String(50), nullable=True)
    tasks = relationship('Task', backref='owner', lazy=True)
    invitations = relationship('Invitation', backref='inviter', lazy=True)