// import { template } from 'handlebars';
import oneCard from '../templates/product-cards.hbs';
import allCategory from '../templates/all-category.hbs';
import oneCategory from '../templates/section-one-category.hbs';
import test from '../test.json';


const mainContainerRef = document.querySelector('.main-container');

// productCardGroupRef.insertAdjacentHTML('beforebegin', allCategory(fetchAllCards));
// console.log(fetchAllCards.forEach(item => {console.log(item);}));
/* 4 катергории, по 4 (2) объявления  */ 
// mainContainerRef.innerHTML = oneCard(fetchAllCards);
// mainContainerRef.innerHTML = fetchAllCards;
/* все объявления одной категории  */ 
mainContainerRef.innerHTML = oneCategory(fetchAllCards);


/* API test  */
const BASE_URL = 'https://callboard-backend.herokuapp.com/';
const currentPage = 1;

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

const fetchAllCards = fetch(`${BASE_URL}call?page=${currentPage}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        // console.dir(result.free);
        console.log(result);
        // const names = result.map(response => console.log(response.free));
        // console.log(names);
        const markup = allCategory(result);
        // console.log(markup);
        // mainContainerRef.insertAdjacentHTML('afterbegin', markup);
        mainContainerRef.innerHTML = markup;

    })
    .catch(error => console.log('error', error));
                
console.log(fetchAllCards);

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map(user => user.name);
// const names = fetchAllCards.map(user => { console.log(user);});
// console.log(names);
