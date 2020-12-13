const BASE_URL = 'https://callboard-backend.herokuapp.com/';

const key = localStorage.getItem('key');
console.log(key)


const createAdBtn = document.querySelector('.create-ad-submit');

createAdBtn.addEventListener('submit', cteateAdSubmit)

const formData = new FormData(form);

for (let value of formData.values()) {
   console.log(value); 
}

function cteateAdSubmit(event) {
  event.preventDefault();
  const { currentTarget: form } = event;
    const formData = new FormData(form);
    
    for( name in data ) {
    formData.append( name, data[ name ] );
  }
 
  cteateAd(body).then(({ data }) => console.log(data))
    .catch(error => {
      alert({
        text: error.response.data.message,
      });
    });
};
function cteateAd(formData) {
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
      authorization: `${key}`,
      body: JSON.stringify(formData),
}

fetch(`${BASE_URL}call`, options).then(response => response.json())
}

// cteateAd({
//     'title': 'baby doll',
//     'description': 'very cute',
//     'category': 'rest and sport',
//     'price': 5,
//     'phone': 380970001122,
//     'file': []
// }).then(ad => console.log(ad))

