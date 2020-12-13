// import 
const BASE_URL = 'https://callboard-backend.herokuapp.com/';



function createAd() {

const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
}

fetch(`${BASE_URL}user`, options).then(response => response.json()).then()
    
}

        
        
    



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