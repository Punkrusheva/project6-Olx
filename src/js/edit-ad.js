import axios from 'axios';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';

const editAdRef = document.querySelector('[data-edit-ad-modal-open]');

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

const editAd = ({ ad, callId }) => {
    const token = localStorage.getItem('key');
    
    const { title, description, category, price, phone, file } = ad;
    const body = { title, description, category, price, phone, file };
    const headers = {
        authorization: `Bearer ${token}`
    };
    return axios.put(`${BASE_URL}call/${callId}`, body, { headers });

}

editAdRef.addEventListener('submit', editAdSubmit);
 

