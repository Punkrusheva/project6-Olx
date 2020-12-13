// import { template } from 'handlebars';
import productCardTpl from '../templates/product-cards.hbs'
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
// mainContainerRef.innerHTML = oneCategory(fetchAllCards);


/* API test  */
// const BASE_URL = 'https://callboard-backend.herokuapp.com/';
// const currentPage = 1;

// const requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//     };

// const fetchAllCards = fetch(`${BASE_URL}call?page=${currentPage}`, requestOptions)
//     .then(response => response.json())
//     // .then(result => {
//     //     // console.dir(result.free);
//     //     console.log(result);
//     //     // const names = result.map(response => console.log(response.free));
//     //     // console.log(names);
//     //     const markup = allCategory(result);
//     //     // console.log(markup);
//     //     // mainContainerRef.insertAdjacentHTML('afterbegin', markup);
//     //     mainContainerRef.innerHTML = markup;

//     // })
//     .catch(error => console.log('error', error));
                
// console.log(fetchAllCards);


// function renderAllCardAndAllCategory() {
//     fetchAllCards.then(result => {
//         console.log(result); 
//         // console.dir(result.free);
    
//     });

// }

// renderAllCardAndAllCategory();


export default SearchProducts()

function SearchProducts() {
const BASE_URL = 'https://callboard-backend.herokuapp.com'

 class FindProduct {
    constructor() {
        this.searchQuery = '';
    }

   async fetchProducts() {
        const url = `${BASE_URL}/call/find?&search=${this.searchQuery}`

       const fetches = await fetch(url)
       const json = await fetches.json()  
       if (json.length === 0) {
         throw 'Ничего не найдено'
       }
       return json;
       
    }


 
}

const products = new FindProduct()


    function onSearch(e) {
        e.preventDefault();
        products.query = e.currentTarget.elements.query.value.trim()

        if (products.query === '') {
            return alert({
                text: "Введите что-нибуть!",
                type: 'info'
            })
        
        }

        fetchProductCard()
        modalSearch.classList.add("is-hidden")
    }
    
    function appendCardMarkup(card) {
    mainContainerRef.insertAdjacentHTML('beforeend', productCardTpl(card))
    }

    async function fetchProductCard() {
        try {
        const product = await products.fetchProducts()
        appendCardMarkup(product)
        } catch {
            errors(er)
        }
    
    }
    
    function errors(er) {
    if (er === 'Ничего не найдено') {
        return  alert({
            text: 'К сожалению по этому запросу ничего не найдено',
            type: 'info'
        })
    }

    return error({
            text: "Ошибка! Не удалось загрузить изображения.",
            type: 'info' 
        })
    }

}
