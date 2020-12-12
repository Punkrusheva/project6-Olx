const BASE_URL = 'https://callboard-backend.herokuapp.com/';

const user = {
  email: 'mango@gmail.com',
  password: '12345', 
};

//регистрация

function addregisterUser() {

const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
}

fetch(`${BASE_URL}auth/register`, options).then(response => response.json()).then()
    
}

  
//   авторизация
function fetchAuthorisLogin() {
     
  const options = {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json',
    
  },
    }
    fetch(`${BASE_URL}auth/login`, options), function(response){localStorage.setItem(response.json().accessToken)}
        
        
    
}; 
console.log(fetchAuthorisLogin());

// .then(localStorage.setItem('token', response.json().accessToken))

// pm.sendRequest({
//     url: `${BASE_URL}auth/login`,
//     method: "POST",
//     header: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(user),
    
// }, function (err, res) {
//     pm.environment.set("authorization", "Bearer " + res.json().token);
// });

// // "Authorization": "Bearer {{token}}",