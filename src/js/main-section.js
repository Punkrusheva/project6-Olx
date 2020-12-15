// import { template } from 'handlebars';
import productCardTpl from '../templates/product-cards.hbs'
import allCategory from '../templates/all-category.hbs';
import oneCategory from '../templates/section-one-category.hbs';
import oneSliderTpl from '../templates/one-slider.hbs';


const mainСontainerRef = document.querySelector('.main-container');
const categoriesRef = document.querySelector('.categories');
const galleryRef = document.querySelector('.gallery');
// const markOneCard = document.querySelector('.product-card-group');

const translationOfWords = {
    property:'Нерухомість',
    transport:'Транспорт',
    work:'Работа',
    electronics:'Електроніка',
    businessAndServices:'Бізнес та послуги',
    recreationAndSport:'Відпочинок і спорт',
    free:'Віддам безкоштовно',
    trade: 'торговля',
    sales: 'Розпродаж   різне'
};




/* API test  */
const BASE_URL = 'https://callboard-backend.herokuapp.com/';
const currentPage = 1;

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

fetch(`${BASE_URL}call?page=${currentPage}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        // console.log(`result 45`, result);
        // console.log(`Object.keys(result)`, Object.keys(result));
        const resultKey = (Object.keys(result));
        const resultKeyTransletion = translationWordsCategories(resultKey);
        // console.log(`resultKeyTransletion`, resultKeyTransletion);
        markupSlider(resultKeyTransletion);
        // console.log(resultKey[]); 

        // const free = [];
        // for (const values of resultValue) {
        //     console.log(values[1]);
        //     if (values[0].category === 'free') {
        //         free.push(values[0]);
        //         markupCard(values);
        //     }
        // }
        return result;
    })
    .then(response => {
        // console.log(`response 78:`, response);
        // console.log(`Object.entries(result) 60`, Object.entries(response));

        const valuesEntries = (Object.entries(response));
        // console.log(`valuesEntries !!!63`, valuesEntries);
        for (const values of valuesEntries) {
            // console.log(`values[key]`, valuesEntries[values]);
            // console.log(`values[0] !!!72`, values[0]);
            // console.log(`valuesEntries`, valuesEntries[key]);
            // console.log(`values[1] 74:`, values[1]);

            if (values[0] === 'property') {
                document.querySelector('[data-category="property"]').insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
            }
            if (values[0] === 'transport') {
                document.querySelector('[data-category="transport"]').insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
            }
            if (values[0] === 'work') {
                document.querySelector('[data-category="work"]').insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
            }
            if (values[0] === 'electronics') {
                document.querySelector('[data-category="electronics"]').insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
            }
            if (values[0] === 'businessAndServices') {
                document.querySelector('[data-category="businessAndServices"]').insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
            }
            if (values[0] === 'recreationAndSport') {
                document.querySelector('[data-category="recreationAndSport"]').insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
            }
            if (values[0] === 'free') {
                document.querySelector('[data-category="free"]').insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
            }
            if (values[0] === 'trade') {
                document.querySelector('[data-category="trade"]').insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
            }
            if (values[0] === 'sales') {
                document.querySelector('[data-category="sales"]').insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
            }
        }
        return response;
    }).then(response => {
        console.log(`response 100:`, response);
        const valuesEntries = (Object.entries(response));
        console.log(`valuesEntries !!!101`, valuesEntries);
        const sectionTextRef = document.querySelector('.section-text');
    })
    .catch(error => console.log('error!!!', error));
                
    function markupSlider(title) {
        mainСontainerRef.insertAdjacentHTML('beforeend', oneSliderTpl(title));
    }

    function markupCard(card) {
            galleryRef.insertAdjacentHTML('afterend', productCardTpl(card));
    }

    function translationWordsCategories (arr) {
    let newArr = arr.map( category => {
        return {
        category: category,
        tran: translationOfWords[category], 
        }
    })
        return newArr;
    }



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
    
    
//     console.log(names); // ["Mango", "Poly", "Ajax"]
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
