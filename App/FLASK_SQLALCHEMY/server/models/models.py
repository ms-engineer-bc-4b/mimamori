from datetime import datetime
from database import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class SeniorUser(db.Model):
    __tablename__ = 'SeniorUser'

    senior_user_id = db.Column(db.Integer, primary_key=True)
    senior_last_name = db.Column(db.String(255), nullable=False)
    senior_first_name = db.Column(db.String(255), nullable=False)
    gender = db.Column(db.String(255), nullable=False)
    birth_date = db.Column(db.DateTime, nullable=False)
    senior_email = db.Column(db.String(255), nullable=False)
    senior_tel = db.Column(db.String(255), nullable=False)
    health_status = db.Column(db.String(255), nullable=False)
    medication = db.Column(db.Boolean, nullable=False)
    medication_frequency = db.Column(db.String(255), nullable=False)
    senior_user_uid = db.Column(db.String(255), nullable=True)
    family_id = db.Column(db.Integer, ForeignKey('FamilyUser.family_id'), unique=True)
    senior_password = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

    # FamilyUserとの関連付け
    family = relationship('FamilyUser', back_populates='senior')

class FamilyUser(db.Model):
    __tablename__ = 'FamilyUser'

    family_id = db.Column(db.Integer, primary_key=True)
    family_last_name = db.Column(db.String(255), nullable=False)
    family_first_name = db.Column(db.String(255), nullable=False)
    relationship_with_senior = db.Column(db.String(255), nullable=False)
    family_email = db.Column(db.String(255), nullable=False)
    family_tel = db.Column(db.String(255), nullable=False)
    family_password = db.Column(db.String(255), nullable=True)
    family_uid = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

    # SeniorUserとの関連付け
    senior = relationship('SeniorUser', uselist=False, back_populates='family')