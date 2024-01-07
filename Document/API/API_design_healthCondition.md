# API設計書

## 健康情報登録

- **概要**: 高齢者が健康情報を登録する
- **パスとメソッド**:  
  | パス                         | メソッド               | 説明               |
  |--------------------------|---------------------|-------------------|
  | `/api/{senior_user_id}/health`      | POST                | 新規登録           |
  | `/api/{senior_user_id}/health/{id}` | PUT                 | 既存情報の更新     |
  | `/api/{senior_user_id}/health/{id}` | GET                 | 登録情報の取得     |

- **パラメータ**:  

  | パラメータ名     | 必須 | 説明                 |
  |------------------|------|----------------------|
  | id               | Yes  | 健康情報ID           |
  | senior_user_id   | Yes  | 高齢者（ユーザー）情報 |
  | condition        | Yes  | 健康情報             |
  | symptom          | No   | 体の異変             |
  | medicine         | No   | 薬服用の有無         |
  | voice_text       | No   | 音声メッセージ        |
  | registered_at      | Yes  | 登録日               |

- **リクエストサンプル**:  
```json
{
    "id": 123,
    "senior_user_id": "98765",
    "condition": "Good",
    "symptom": "Headache",
    "medicine": true,
    "voice_text": "I am feeling a bit dizzy today.",
    "registered_at": "2024-01-08T12:00:00Z"
}
```
 
- **成功時**:
    - **ステータスコード**: 201 Created
    - **レスポンスサンプル**:
```json
{
    "message": "Health information registered successfully"
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
