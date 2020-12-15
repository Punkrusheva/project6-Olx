import axios from 'axios';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';

const deleteAdRef = document.querySelector('[data-modal-delete]');

const deleteAd = (callId) => {
    const token = localStorage.getItem('key');
    
    const headers = {
        authorization: `Bearer ${token}`
    };
    return axios.delete(`${BASE_URL}call/${callId}`, { headers });

}

deleteAdRef.addEventListener('submit', deleteAd);
 

