import os
from PIL import Image, ImageDraw, ImageFont

def generate_default_profile_picture(username):
    initials = username[:2].upper()
    image = Image.new('RGB', (100, 100), color=(73, 109, 137))
    draw = ImageDraw.Draw(image)
    
    font_path = os.path.join(os.path.dirname(__file__), "arial.ttf")
    font = ImageFont.truetype(font_path, 50)
    
    draw.text((10,25), initials, fill=(255, 255, 255), font=font)
    
    image_path = f"{username}_profile.svg"
    image.save(image_path)
    
    return image_path