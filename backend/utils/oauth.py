from flask import url_for, redirect, session
from flask_oauthlib.client import OAuth
from config import Config

oauth = OAuth()

google = oauth.remote_app(
    'google',
    consumer_key=Config.GOOGLE_CLIENT_ID,
    consumer_secret=Config.GOOGLE_CLIENT_SECRET,
    request_token_params={'scope':'email'},
    base_url='https://www.googleapis.com/oauth2/v1/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://accounts.google.com/o/oauth2/token',
    authorize_url='https://accounts.google.com/o/oauth2/auth'
)

facebook = oauth.remote_app(
    'facebook',
    consumer_key=Config.FACEBOOK_CLIENT_ID,
    consumer_secret=Config.FACEBOOK_CLIENT_SECRET,
    request_token_params={'scope':'email'},
    base_url='https://graph.facebook.com/v2.8/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='/oauth/access_token',
    authorize_url='https://www.facebook.com/dialog/oauth'
)

github = oauth.remote_app(
    'github',
    consumer_key=Config.GITHUB_CLIENT_ID,
    consumer_secret=Config.GITHUB_CLIENT_SECRET,
    request_token_params={'scope':'email'},
    base_url='https://api.github.com/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://github.com/login/oauth/access_token',
    authorize_url='https://github.com/login/oauth/authorize'
)