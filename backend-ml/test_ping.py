import requests; print(requests.post('http://127.0.0.1:8000/auth/register', json={'username': 'test99', 'password': '123'}).json())  
