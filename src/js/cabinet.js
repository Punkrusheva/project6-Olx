
import openCabinet from '../templates/cabinet.hbs';
import axios from 'axios';

// фэч
const URL = 'https://callboard-backend.herokuapp.com';
async function fetchmyOffice(){
  const key = localStorage.getItem('key');
  const options = {
      method: 'GET',
    headers: {
        
      Authorization: `Bearer ${key}`,
    }, 
  };
  const response = await fetch(`${URL}/user`,options);
      const responseJson = await response.json();
console.log(responseJson);
      return responseJson;
  }
  fetchmyOffice()
  const cabinetRef = document.querySelector('.advert');
  cabinetRef.addEventListener('click', openCabinetRef);

  function openCabinetRef(){
    fetchmyOffice(URL).then(render => document.querySelector('.main-container').innerHTML = openCabinet(render.favourites))
   
  }
  
  





