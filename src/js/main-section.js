// import { template } from 'handlebars';
import productCardTpl from '../templates/product-cards.hbs'
import allCategory from '../templates/all-category.hbs';
import oneCategory from '../templates/section-one-category.hbs';
import oneSliderTpl from '../templates/one-slider.hbs';


const categoriesRef = document.querySelector('.categories');

const markOneCard = document.querySelector('.product-card-group');
// const markOneCard2 = document.querySelector('.categories-title');

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
        console.log(result);
        console.log(`Object.keys(result)`, Object.keys(result));
        console.log(`Object.values(result)`, Object.values(result)); 

        const resultKey = (Object.keys(result));
        markupSlider(resultKey);
        // console.log(resultKey[]); 
        const resultValue = (Object.values(result));
        const free = [];
        for (const values of resultValue) {
            console.log(values[1]);
            if (values[0].category === 'free') {
                free.push(values[0]);
            }
            
            
            // return values;
                // names.push(friend.name);
        }
        console.log(`free`, free);
        const valuesKey = (Object.values(values));
        console.log(`valuesKey`, valuesKey);
        // const copy = [];
        for (const key in result) {
            console.log(`result[key]`, result[key]);
            const mark = result[key];
            markupCard(mark);
        }

        // markupCard(resultValue);
    
    })
    .catch(error => console.log('error!!!', error));
                
    function markupSlider(title) {
        categoriesRef.insertAdjacentHTML('afterbegin', oneSliderTpl(title));
        // mainContainerRef.innerHTML = oneSliderTpl(title);
    }

    function markupCard(card) {
            markOneCard.insertAdjacentHTML('afterbegin', productCardTpl(card));
    }

fetchAllCards;

// function renderAllCardAndAllCategory() {
//     fetchAllCards.then(result => {
//         console.log(result); 
//         // console.dir(result.free);
    
//     });

// }

// renderAllCardAndAllCategory();


// export default SearchProducts()

// function SearchProducts() {
//     const BASE_URL = 'https://callboard-backend.herokuapp.com';

//     class FindProduct {
//      constructor() {
//         // this.currentPage = 1;
//         // this.searchQuery = '';
//     }

//    async fetchProducts() {
//        const url = `${BASE_URL}/call?page=1`;

//        const fetches = await fetch(url);
//        const json = await fetches.json();
//        зен  fetches.json();
//        через обжект кейс 
//        второй чистые данные(разметка слайдера)
//        в третем (по ключу )

//        дата атрибут и дата категории

//         //    if (json.length === 0) {
//         //      throw 'Ничего не найдено'
//         //    }
//         return json;
//     }
//     }

//     const products = new FindProduct()

//     // function onSearch(e) {
//     //     e.preventDefault();
//     //     products.query = e.currentTarget.elements.query.value.trim()

//     //     if (products.query === '') {
//     //         return alert({
//     //             text: "Введите что-нибуть!",
//     //             type: 'info'
//     //         })
        
//     //     }

//     //     fetchProductCard()
//     //     modalSearch.classList.add("is-hidden")
//     // }
    
//     function appendCardMarkup(card) {
//         mainContainerRef.innerHTML = allCategory(card);
//         // mainContainerRef.insertAdjacentHTML('beforeend', productCardTpl(card))
//     }

//     async function fetchProductCard() {
//         try {
//             const product = await products.fetchProducts();
//             console.dir(product);
//             appendCardMarkup(product.recreationAndSport);
//         } catch {
//             errors(er)
//         }
//     }
    
    
// // Для каждого элемента коллекции (user) вернем значение поля name
//     // const names = users.map(user => user.name);

//     // console.log(names); // ["Mango", "Poly", "Ajax"]
//     fetchProductCard();
//     // function errors(er) {
//     //     if (er === 'Ничего не найдено') {
//     //         return  alert({
//     //             text: 'К сожалению по этому запросу ничего не найдено',
//     //             type: 'info'
//     //         })
//     //     }

//     //     return error({
//     //             text: "Ошибка! Не удалось загрузить изображения.",
//     //             type: 'info' 
//     //         })
//     //     }
// }
