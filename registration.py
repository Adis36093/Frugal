from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from configparser import ConfigParser
import os
import psycopg2

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres+psycopg2://postgres:aditi@localhost:5432/Frugal'
db=SQLAlchemy(app)
CORS(app)

class Register(db.Model):
    __tablename__  = "UserId"
    id = db.Column(db.Integer, primary_key = True)
    Username = db.Column(db.String)

    def __init__(self, Username):
        self.Username = Username

@app.route('/Username', methods = ['POST'])
def signup():
    data = request.get_json()
    Username = data['Username']  
    cs = Register(Username)
    db.session.add(cs)
    db.session.commit()
    return jsonify(message="Registration Successful!"), 201

@app.route('/Username')
def login():
    UsernameList = Register.query.all()
    User_list = []
    for us in UsernameList:
        u = {}
        u["Username"] = us.Username
        User_list.append(u)
    return jsonify(UsernameList = User_list)


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
