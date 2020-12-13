import axios from 'axios';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';

// const key = localStorage.getItem('key');

const createAdBtn = document.querySelector('.create-ad-submit');
createAdBtn.addEventListener('submit', cteateAdSubmit)

const cteateAdSubmit = event => {
  event.preventDefault();
   const { currentTarget: form } = event;
    const formData = new FormData(form);
    const body = {};

    console.log(formData)
    
    // formData.forEach((key, value) => {
    //     body[key] = value;
        
    // })
 
  
};

const cteateAd = (newAd, key) => {

    const { title, description, category, price, phone, file } = newAd;
    
    return axios.post(`${BASE_URL}/call`, {
        headers: {
            Authorization: `Bearer ${key}`,
        },
        body: { title, description, category, price, phone, file }
    });

  
}



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