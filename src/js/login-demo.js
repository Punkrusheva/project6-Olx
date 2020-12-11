const BASE_URL = 'https://callboard-backend.herokuapp.com/';

const user = {
    email: 'kate@gmail.com',
    password: '12345'
}

const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user),

};

fetch(`${BASE_URL}auth/login`, options).then(response => response.json()).then(data => console.log(data.accessToken))