from flask import Flask
from flask import request, make_response, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    return "hello"

if __name__ == "__main__":
    app.debug = True
#    app.run(host='flask', port=5000)
    app.run(host='0.0.0.0', port=5000)