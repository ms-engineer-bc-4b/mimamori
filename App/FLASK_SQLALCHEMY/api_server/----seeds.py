from datetime import datetime
from faker import Faker
from models import db, SeniorUser  

fake = Faker()

def seed_data():
    for _ in range(10):  # 10件のシードデータを生成
        senior_user = SeniorUser(
            senior_last_name=fake.last_name(),
            senior_first_name=fake.first_name(),
            gender=fake.random_element(elements=('Male', 'Female')),
            birth_date=fake.date_of_birth(),
            senior_email=fake.email(),
            senior_tel=fake.phone_number(),
            health_status=fake.random_element(elements=('Good', 'Fair', 'Poor')),
            medication=fake.boolean(),
            medication_frequency=fake.random_element(elements=('Once a day', 'Twice a day', 'As needed')),
            senior_user_uid=fake.uuid4(),
            senior_password=fake.password(),
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        db.session.add(senior_user)

    db.session.commit()

if __name__ == '__main__':
    seed_data()
