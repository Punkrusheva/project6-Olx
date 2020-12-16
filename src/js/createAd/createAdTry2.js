import axios from 'axios';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';

function onOpenAddCardModal() {
  const photoElem = document.querySelector('#imageUrls');
  const createAdRef = document.querySelector('.create-ad-form');
  const formData = new FormData();
  const myHeaders = new Headers();
  
  createAdRef.addEventListener('submit', cteateAdSubmit);
  photoElem.addEventListener('input', function () {
    formData.append('file', photoElem.files[0]);
  });


  async function cteateAdSubmit(event) {
    event.preventDefault();
  
    const formEl = event.currentTarget.elements;
    console.log(formEl);
  
    const title = formEl.title.value;
    const description = formEl.description.value;
    const category = formEl.category.value;
    const price = formEl.price.value;
    const phone = formEl.phone.value;

    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', Number(price));
    formData.append('phone', phone);

    const token = localStorage.getItem('key');
      
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
  
    const options = {
      method: 'POST',
      redirect: 'follow',
      body: formData,
      headers: myHeaders,
    }
  
  
    const answer = await fetch(`${BASE_URL}/call`, options);
    console.log(answer);

  }
}


onOpenAddCardModal();