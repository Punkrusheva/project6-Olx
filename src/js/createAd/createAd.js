import axios from 'axios';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';

const createAdRef = document.querySelector('.create-ad-form');
const submit = document.querySelector('.create-ad-submit');

const cteateAdSubmit = event => {
  event.preventDefault();

 
  const data = new FormData(createAdRef);

  // const photoElem = document.querySelector('#photoElem');
    
  // photoElem.addEventListener('input', function () {
  //   formData.append('file', photoElem.files[0]);
  // });
  const token = localStorage.getItem('key');

 
  let config = {
        method: 'post',
        url: 'https://callboard-backend.herokuapp.com/call',
        headers: { 
          'accept': 'application/json', 
          'Content-Type': 'multipart/form-data', 
          'Authorization': `Bearer ${token}`,
        },
        data: data
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}

submit.addEventListener('submit', cteateAdSubmit);
 
 

//   const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         },
//       authorization: `${key}`,
//       body: JSON.stringify(formData),
// }

//     fetch(`${BASE_URL}call`, options).then(response => response.text())
//         .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// cteateAd({
//     'title': 'baby doll',
//     'description': 'very cute',
//     'category': 'rest and sport',
//     'price': 5,
//     'phone': 380970001122,
//     'file': []
// }).then(ad => console.log(ad))

// let raw = "{'title': ${title}, 'description': ${description}, 'category': ${category}, 'price': ${price}, 'phone': ${phone},'file':[]";