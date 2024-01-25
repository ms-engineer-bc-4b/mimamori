# API設計書

## ユーザー登録

- **概要**: ユーザーの登録情報を操作する
- **パスとメソッド**:  
  | パス                   | メソッド               | 説明               |
  |----------------------|---------------------|-------------------|
  | `/api/register`      | POST                | 新規登録           |
  | `/api/register/{family_id}` | PUT                 | 既存情報の更新     |
  | `/api/register/{family_id}` | GET                 | 登録情報確認       |
- **パラメータ**:  

  | パラメータ名                     | 必須 | 説明                               |
  |----------------------------------|------|------------------------------------|
  | senior_user_id                   | Yes  | 高齢者ID                           |
  | senior_last_name                 | Yes  | 高齢者の姓                         |
  | senior_first_name                | Yes  | 高齢者の名                         |
  | gender                           | Yes  | 高齢者の性別                       |
  | birth_date                       | Yes  | 高齢者の生年月日                   |
  | senior_email                     | Yes  | 高齢者のメールアドレス             |
  | senior_tel                       | Yes  | 高齢者の電話番号                   |
  | health_status                    | Yes  | 高齢者の健康状態                   |
  | medication                       | Yes  | 高齢者処方薬の有無                 |
<<<<<<< HEAD
  | medication_frequency               | No   | 高齢者処方薬の頻度（有の場合のみ） |
=======
  | medication_frequency                | No   | 高齢者処方薬の頻度（有の場合のみ） |
>>>>>>> dev
  | family_id                          | Yes  | 申込者（家族）ID                   |
  | family_last_name                   | Yes  | 申込者（家族）の姓                 |
  | family_first_name                  | Yes  | 申込者（家族）の名                 |
  | relationship with_senior         | Yes  | 申込者と高齢者との関係性           |
  | family_email                       | Yes  | 申込者（家族）のメールアドレス     |
  | family_tel                         | Yes  | 申込者（家族）の電話番号           |
  | family_password                    | Yes  | 申込者（家族）のパスワード         |
  | family_password_confirmation       | Yes  | 申込者（家族）のパスワード（確認） |


- **リクエストサンプル**:  
  下記で"seniorUser""family"オブジェクトに分けることで、それぞれデータベースのテーブル”SeniorUser””familyUser”に入れやすくする
 ```json
 {
    "senior": {
        "senior_user_id": "987654",
        "senior_last_name": "山本",
        "senior_first_name": "太郎",
        "gender": "male",
        "birth_date": "1955-03-15",
        "senior_email": "senior@example.com",
        "senior_tel": "999-888-7777",
        "health_status": "fair",
        "medication": true,
        "medication_frequency": "twice_daily"
    },
    "family": {
        "family_id": "123456",
        "family_last_name": "田中",
        "family_first_name": "花子",
        "relationship_with_senior": "息子/娘",
        "family_email": "family@example.com",
        "family_tel": "111-222-3333",
        "family_password": "family123",
        "family_password_confirmation": "family123"
    }
}
 ```
 
- **成功時**:
    - **ステータスコード**: 201 Created
    - **レスポンスサンプル**:
        ```json
        {
            "message": "User registered successfully"
        }
        ```

- **失敗時**:
    - **ステータスコード**: 400 Bad Request
    - **レスポンスサンプル**:
        ```json
        {
            "error": "Registration failed",
            "reason": "Invalid email format"
        }
        ```

