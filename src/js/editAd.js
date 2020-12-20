import axios from 'axios';
import editAdModal from '../templates/modalEditAd.hbs';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';

const editAdRef = document.querySelector('[data-edit-ad-modal-open]');
const editAdSaveBtn = document.querySelector('[data-edit-ad-modal-save]');
const editAdCancelBtn = document.querySelector('[data-edit-ad-modal-close]');
const bodyRef = document.querySelector('.main-container');

// const testBtn = document.querySelector('.cabinet-exit')
// testBtn.addEventListener('click', editAdModalOpen)

editAdRef.addEventListener('click', editAdModalOpen);
editAdSaveBtn.addEventListener('submit', editAdSubmit);
editAdCancelBtn.addEventListener('reset', editAdModalClose);

function editAdModalOpen(event) {
  event.preventDefault();

  const id = "5fda618af548230017d87c35";

  bodyRef.insertAdjacentHTML("afterbegin", editAdModal(id));
}

function editAdModalClose() {
  bodyRef.innerHTML = "";
  //или рендер страницы мой кабинет, нужно импортировать из файла Иры
  
}
const editAdSubmit = event => {
   event.preventDefault();
  const data = new FormData(editAdRef);
  const token = localStorage.getItem('key');

  const id = "5fda618af548230017d87c35";
 
  let config = {
        method: 'patch',
        url: `${BASE_URL}call${id}`,
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


// export async function fetchEditAd(BASE_URL, data, id) {
//     const token = localStorage.getItem('key');
//     const options = {
//   method: 'Patch',
//   body: JSON.stringify(data),
//   headers: {
//       'Content-Type': 'multipart/form-data; charset=UTF-8',
//       'accept': 'application/json',
//       'Authorization': `Bearer ${token}`,
//   },
//     }
//     const response = await fetch(`${BASE_URL}call/${id}`,options);
//     const responseJson = await response.json();
//     return responseJson
// };

// const editAd = ({ ad, callId }) => {
//     const token = localStorage.getItem('key');
    
//     const { title, description, category, price, phone, file } = ad;
//     const body = { title, description, category, price, phone, file };
//     const headers = {
//         authorization: `Bearer ${token}`
//     };
//     return axios.patch(`${BASE_URL}call/${callId}`, body, { headers });

// }




 

