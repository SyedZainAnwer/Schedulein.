import jwt
import datetime
from config import Config


def create_token(user_id):
    '''
        TODO: Add remember me functionality later
    '''
    
    # if remember_me:
    #     token = jwt.encode(
    #         {
    #             'user_id': user_id
    #         },
    #         Config.SECRET_KEY,
    #         algorithm='HS256'
    #     )
    # else:
    token = jwt.encode(
        {
            "user_id": user_id,
            # "exp": datetime.datetime.now() + datetime.timedelta(hours=1), TODO: set the expiration time
        },
        Config.SECRET_KEY,
        algorithm="HS256",
    )

    return token
