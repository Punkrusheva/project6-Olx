import axios from 'axios';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';

const createAdRef = document.querySelector('.create-ad-form');

const cteateAdSubmit = event => {
  event.preventDefault();

  const { currentTarget: form } = event;
  const formData = new FormData(form);
    
    
  const body = {};

  formData.forEach((value, key) => {
    body[key] = value;
  });
   
  cteateAd(body)
    .then(({ data }) => console.log(data))
        // .catch(error => {
        // alert({
        //     text: error.response.data.message,
        
        // });
}

const cteateAd = (newAd) => {
    const token = localStorage.getItem('key');

    const { title, description, category, price, phone, file } = newAd;
    
    return axios.post(`${BASE_URL}/call`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: { title, description, category, price, phone, file },
    });

  
}

createAdRef.addEventListener('submit', cteateAdSubmit);
 




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