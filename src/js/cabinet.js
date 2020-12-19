
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
      return responseJson;
  }
  const cabinetRef = document.querySelector('.favor');
  cabinetRef.addEventListener('click', openCabinetRef);

  fetchmyOffice()
  function openCabinetRef(){
    fetchmyOffice(URL).then(render => document.querySelector('.main-container').innerHTML = openCabinet(render))
  }
  
  


// export const fetchmyOffice = () => {
//   return axios(`${BASE_URL}user`);
// }
// рендер
// const renderCabinetList = async () => {
//   try {
//     const response = await fetchmyOffice();
//     const { data } = response;

//     cabinetRef.innerHTML = openCabinet(data);
//   } catch (error) {
//     pushError(
//       'Помилка!',
//     );
//   }
// };



// if(token) {
//   renderCabinetList()
// } else {
//   console.log('Шалишь!')
// }