const BASE_URL = 'https://callboard-backend.herokuapp.com/';

const user = {
    email: 'kate1@gmail.com',
    password: '12345'
}

const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user),

};


// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzZGNlOTZkYTZhYjAwMTdkYmZiNDEiLCJzaWQiOiI1ZmQzZGU3MjZkYTZhYjAwMTdkYmZiN2EiLCJpYXQiOjE2MDc3MjA1NjIsImV4cCI6MTYwNzcyNDE2Mn0.NiprA86iVOEVn2gDdHiHYFxFOlZYFThSZRE8bLGV99Y';

// const options2 = {
//     method: 'GET',
//     authorization: {
//         "token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzZGNlOTZkYTZhYjAwMTdkYmZiNDEiLCJzaWQiOiI1ZmQzZGU3MjZkYTZhYjAwMTdkYmZiN2EiLCJpYXQiOjE2MDc3MjA1NjIsImV4cCI6MTYwNzcyNDE2Mn0.NiprA86iVOEVn2gDdHiHYFxFOlZYFThSZRE8bLGV99Y',
//     }

// }



//    const token = fetch(`${BASE_URL}auth/login`, options).then(response => response.json()).then(data => (data.accessToken))
// console.log(token)
    


fetch(`${BASE_URL}user`, options2).then(response => response.json).then(console.log())

// function userIdCheck() {
    

// }
