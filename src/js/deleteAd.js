import axios from 'axios';
import { editAdModalClose } from './editAd.js';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';

const deleteAdBtn = document.querySelector('[data-modal-delete]');

const fetchDeleteAd = (callId) => {
    const token = localStorage.getItem('key');
    
    const headers = {
        authorization: `Bearer ${token}`
    };
    return axios.delete(`${BASE_URL}call/${callId}`, { headers });

}

function deleteAd() {
    fetchDeleteAd().then(editAdModalClose())
}

deleteAdBtn.addEventListener('submit', deleteAd);
 

