import axios from 'axios';
import productCategoryForModal from '../../templates/productCategoryForModal.hbs';

const BASE_URL = 'https://callboard-backend.herokuapp.com/';

const categoryListBtn = document.querySelector('[data-modal-category-list]');
const categoryListRef = document.querySelector('.category-list');

categoryListBtn.addEventListener('click', renderCategoryList);

const renderCategoryList = () => {

    fetchCategory()
        .then(categories => {
             for (const key in categories) {
             
            categoryListBtn.insertAdjacentHTML('beforeend', productCategoryForModal(categories[key]))
        }     
        })
    
}

async function fetchCategory() {
    const response = await fetch(`${BASE_URL}call/categories`);
    const responseJson = await response.json();
    return responseJson
};

// console.log(fetchCategory().then(response => {
//             console.log(productCategoryForModal(response))
//         }))


// const getCategories = () => {
//     return axios.get(`${BASE_URL}call/categories`);
// }


