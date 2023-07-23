from config import Config
from extensions import oauth


google = oauth.register(
    name='google',
    client_id=Config.GOOGLE_CLIENT_ID,
    client_secret=Config.GOOGLE_CLIENT_SECRET,
    authorize_url='https://accounts.google.com/o/oauth2/auth',
    authorize_params=None,
    access_token_url='https://accounts.google.com/o/oauth2/token',
    access_token_params=None,
    redirect_uri=Config.GOOGLE_REDIRECT_URI,
    client_kwargs={'scope': 'openid profile email'},
)


facebook = oauth.register(
    name='facebook',
    client_id=Config.FACEBOOK_CLIENT_ID,
    client_secret=Config.FACEBOOK_CLIENT_SECRET,
    authorize_url='https://www.facebook.com/dialog/oauth',
    authorize_params=None,
    access_token_url='https://graph.facebook.com/oauth/access_token',
    access_token_params=None,
    redirect_uri=Config.FACEBOOK_REDIRECT_URI,
    client_kwargs={'scope': 'email'},
)


github = oauth.register(
    name='github',
    client_id=Config.GITHUB_CLIENT_ID,
    client_secret=Config.GITHUB_CLIENT_SECRET,
    authorize_url='https://github.com/login/oauth/authorize',
    authorize_params=None,
    access_token_url='https://github.com/login/oauth/access_token',
    access_token_params=None,
    redirect_uri=Config.GITHUB_REDIRECT_URI,
    client_kwargs={'scope': 'user:email'},
)
