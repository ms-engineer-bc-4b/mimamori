from datetime import datetime
from database import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class SeniorUser(db.Model):
    __tablename__ = 'SeniorUser'

    senior_user_id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    senior_last_name = db.Column(db.String(255), nullable=False)
    senior_first_name = db.Column(db.String(255), nullable=False)
    gender = db.Column(db.String(255), nullable=False)
    birth_date = db.Column(db.DateTime, nullable=False)
    senior_email = db.Column(db.String(255), nullable=False)
    senior_tel = db.Column(db.String(255), nullable=False)
    health_status = db.Column(db.String(255), nullable=False)
    medication = db.Column(db.String(255), nullable=False)
    medication_frequency = db.Column(db.String(255), nullable=False)
    senior_user_uid = db.Column(db.String(191), nullable=True, unique=True)
    family_id = db.Column(db.Integer, ForeignKey('FamilyUser.family_id'), unique=True)
    senior_password = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"), onupdate=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    
    #FamilyUserのfamily_idへの外部キー(1対1)
    family = relationship('FamilyUser', back_populates='senior',uselist=False)

    #HealthInformationのidからの外部キー(1対多)
    health_information = relationship('HealthInformation', back_populates='senior')

    

class FamilyUser(db.Model):
    __tablename__ = 'FamilyUser'
    family_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    family_last_name = db.Column(db.String(255), nullable=False)
    family_first_name = db.Column(db.String(255), nullable=False)
    relationship_with_senior = db.Column(db.String(255), nullable=False)
    family_email = db.Column(db.String(255), nullable=False)
    family_tel = db.Column(db.String(255), nullable=False)
    family_password = db.Column(db.String(255), nullable=True)
    family_uid = db.Column(db.String(191), nullable=True, unique=True)#255=>191
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"), onupdate=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))    

    #SeniorUserのsenior_user_id からの外部キー(1対1)
    senior = relationship('SeniorUser', back_populates='family', uselist=False)
  

class HealthInformation(db.Model):
    __tablename__ = 'HealthInformation'

    id = db.Column(db.Integer, primary_key=True)
    senior_user_id = db.Column(db.Integer, ForeignKey('SeniorUser.senior_user_id'), nullable=False)
    condition = db.Column(db.Enum('good', 'normal', 'bad'), nullable=False)#conditionから変更（予約語の為）
    symptom = db.Column(db.Enum('head', 'face', 'neck', 'shoulder', 'chest', 'rightArm', 'leftArm', 'leftHand', 'rightHand', 'abdomen', 'rightLeg', 'leftLeg', 'leftAnkle', 'rightAnkle', 'back', 'buttocks'), nullable=False)
    medicine = db.Column(db.Enum('yes','no'), nullable=False)
    dinner_photo = db.Column(db.String(255), nullable=True)
    degree = db.Column(db.Enum('full', 'half', 'less'), nullable=True)
    voice_text = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"), onupdate=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

    #SeniorUserのsenior_user_id への外部キー(1対1)
    senior = relationship('SeniorUser', back_populates='health_information', uselist=False)
    
    #Messageのmessage_id から外部キー(1対1)
    messages = relationship('Message', back_populates='health_information', uselist=False)

class Message(db.Model):
    __tablename__ = 'messages'
    message_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id = db.Column(db.Integer,ForeignKey('HealthInformation.id'))
    message = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"), onupdate=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    
    #HealthInformationのidへの外部キー(1対1))
    health_information = relationship('HealthInformation', back_populates='messages',uselist=False) 

