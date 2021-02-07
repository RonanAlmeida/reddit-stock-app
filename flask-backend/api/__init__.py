from flask import Flask
from flask.helpers import flash
from flask_sqlalchemy import SQLAlchemy

def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///database.db'

    from .views import main

    app.register_blueprint(main)
    
    return app

