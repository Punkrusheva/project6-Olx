import axios from 'axios';
// import { closeModalCreateAd } from './createAdOpenClose';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';

const createAdRef = document.querySelector('.create-ad-form');
const submit = document.querySelector('.create-ad-submit');

const cteateAdSubmit = event => {
  event.preventDefault();
 
  const data = new FormData(createAdRef);
  const token = sessionStorage.getItem('token');
 
  let config = {
        method: 'post',
        url: `${BASE_URL}call`,
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

submit.addEventListener('click', cteateAdSubmit);

// function createAdStatusCheck() {
 
//   if (cteateAdSubmit()) {
//     closeModalCreateAd()
//   } 
  // else
  // { заполните все поля
  // }
// }


// {title: "шарики", description: "красивые", category: "recreation and sport", price: 100,…}
// category: "recreation and sport"
// description: "красивые"
// id: "5fda618af548230017d87c35"
// imageUrls: ["https://storage.googleapis.com/kidslikev2_bucket/db144b07-70cc-492a-923c-9fb278ec6e85.png"]
// isOnSale: false
// phone: "+380971112233"
// price: 100
// title: "шарики"
// userId: "5fd5e175917c6700178f72f5"


// category: "electronics"
// description: "ноут"
// id: "5fdb5a255e775d0017fcf79c"
// imageUrls: ["https://storage.googleapis.com/kidslikev2_bucket/f656c67b-7284-4717-8e9a-30d15f09da2d.jpg"]
// isOnSale: false
// phone: "+380971112233"
// price: 1000
// title: "laptop"
// userId: "5fd5e175917c6700178f72f5"

// {title: "наушники", description: "на уши", category: "electronics", price: 5, phone: "+380971112233",…}
// category: "electronics"
// description: "на уши"
// id: "5fdb6a835e775d0017fcf7e5"
// imageUrls: ["https://storage.googleapis.com/kidslikev2_bucket/fa63b20e-21ee-41c4-85af-24c296cfa28c.jpg"]
// isOnSale: false
// phone: "+380971112233"
// price: 5
// title: "наушники"
// userId: "5fd5e175917c6700178f72f5"

 
 

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