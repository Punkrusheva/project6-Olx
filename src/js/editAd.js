import axios from 'axios';
import editAdModal from '../templates/modalEditAd.hbs';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';

const editAdRef = document.querySelector('[data-edit-ad-modal-open]');
const editAdSaveBtn = document.querySelector('.edit-ad-save');
const editAdCancelBtn = document.querySelector('.edit-ad-cancel');
const body = document.querySelector('.main-container');

editAdRef.addEventListener('click', editAdModalOpen);
editAdSaveBtn.addEventListener('submit', editAdSubmit);
editAdCancelBtn.addEventListener('reset', editAdCancel);

function editAdModalOpen(event) {
  event.preventDefault();

  // функция извлечения ID
  body.insertAdjacentHTML("afterbegin", editAdModal());
}
function editAdCancel() {
  
}

const editAdSubmit = event => {
  event.preventDefault();

  const { currentTarget: form } = event;
  const formData = new FormData(form);
    
    
  const body = {};

  formData.forEach((value, key) => {
    body[key] = value;
  });
   
  editAd(body)
    // .then(({ data }) => console.log(data))
        // .catch(error => {
        // alert({
        //     text: error.response.data.message,
        
        // });
}

// const editAd = ({ ad, callId }) => {
//     const token = localStorage.getItem('key');
    
//     const { title, description, category, price, phone, file } = ad;
//     const body = { title, description, category, price, phone, file };
//     const headers = {
//         authorization: `Bearer ${token}`
//     };
//     return axios.patch(`${BASE_URL}call/${callId}`, body, { headers });

// }

export async function fetchEditAd(BASE_URL, data, id) {
    const token = localStorage.getItem('key');
    const options = {
  method: 'Patch',
  body: JSON.stringify(data),
  headers: {
      'Content-Type': 'multipart/form-data; charset=UTF-8',
      'accept': 'application/json',
      'Authorization': `${token}`,
  },
    }
    const response = await fetch(`${BASE_URL}call/${id}`,options);
    const responseJson = await response.json();
    return responseJson
};


 

