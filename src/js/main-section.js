// import { template } from 'handlebars';
import productCardTpl from '../templates/product-cards.hbs';
import productCardSaleTpl from '../templates/product-cart-sale.hbs';
import oneSliderTpl from '../templates/one-slider.hbs';


// import CategoriesApi from './categories-api';
// const catApi = new CategoriesApi();

const mainСontainerRef = document.querySelector('.main-container');
const BASE_URL = 'https://callboard-backend.herokuapp.com';
// const paginationGroup = document.querySelector('.pagination-div');

class AllCategory {
    constructor() {
        this.page = 1;
        this.category = 'work';
    }

    async fetchAllCategory() {
        const url = `${BASE_URL}/call?page=${this.page}`
        const fetches = await fetch(url)
        const json = await fetches.json()
        return json
    }

    async onWork() {
        const url = `${BASE_URL}/call/specific/${this.category}`
        const fetches = await fetch(url)
        const json = await fetches.json()
        return json
    }
    
    onePage() {
        this.page = 1;
    }
    twoPage() {
        this.page = 2;
    }
    threePage() {
        this.page = 3;
    }
}

const category = new AllCategory();

function markOnePage() {
    // console.log(document.querySelector('.button-next-pages').textContent === event.path[0].innerText);
    // event.preventDefault();
    category.onePage();

    category.fetchAllCategory().then(result => {
        window.scrollTo({
            top: document.body.clientHeight - 2500,
            behavior: 'smooth',
        });
        renderSlaider(result);
        
        return result;
    })
    .then(response => {
        renderCard(response);
    });

    document.querySelector(`[data-atribute="one-page"]`).removeEventListener('click', markThreePage);
} 

markOnePage();
document.querySelector(`[data-atribute="one-page"]`).addEventListener('click', markOnePage);
document.querySelector(`[data-atribute="two-page"]`).addEventListener('click', markTwoPage);
document.querySelector(`[data-atribute="three-page"]`).addEventListener('click', markThreePage);


function markTwoPage(event) {
    event.preventDefault();

    // console.log(event.target);
    // console.log(event.currentTarget);
    // var a = document.querySelector('ul > li:nth-child(3)'); // берем 3 элемент li в списке ul. 
    // a.classList.add('active');

    category.twoPage();

    category.fetchAllCategory().then(result => {
        window.scrollTo({
            top: document.body.clientHeight - 2500,
            behavior: 'smooth',
        });
        renderSlaider(result);
        
        return result;
    })
    .then(response => {
        renderCard(response);
    });

    document.querySelector(`[data-atribute="two-page"]`).removeEventListener('click', markTwoPage);
}

function markThreePage(event) {
    event.preventDefault();
    
    category.threePage();

    category.fetchAllCategory().then(result => {
        window.scrollTo({
            top: document.body.clientHeight - 2500,
            behavior: 'smooth',
        });
        renderSlaider(result);

        return result;
    })
    .then(response => {
        renderCard(response);
    });

    document.querySelector(`[data-atribute="three-page"]`).removeEventListener('click', markThreePage);
}

function renderSlaider(result) {
    const resultKey = (Object.keys(result));
        const resultKeyTransletion = translationWordsCategories(resultKey);
        markupSliderinerHTML(resultKeyTransletion);
}

function renderCard(response) {
    const valuesEntries = (Object.entries(response));
        for (const values of valuesEntries) {
            document.querySelector(`[data-category=${values[0]}]`).insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
        }
}

function markupSliderinerHTML(title) {
    mainСontainerRef.innerHTML = oneSliderTpl(title);
}

const translationOfWords = {
    property: 'Нерухомість',
    transport: 'Транспорт',
    work: 'Работа',
    electronics: 'Електроніка',
    businessAndServices: 'Бізнес та послуги',
    recreationAndSport: 'Відпочинок і спорт',
    free: 'Віддам безкоштовно',
    trade: 'торговля',
    sales: 'Розпродаж   різне'
}

function translationWordsCategories(arr) {
    let newArr = arr.map(category => {
        return {
            category: category,
            tran: translationOfWords[category],
        }
    })
    return newArr;
}

mainСontainerRef.addEventListener('click', markOnlyOneCategory);

function markOnlyOneCategory(e) {
    console.log(`run markOnlyOneCategory `, e.srcElement.dataset.atributeBtn);

    if (e.srcElement.dataset.atributeBtn === 'sales') {
        category.onWork().then(res => {
            mainСontainerRef.innerHTML = productCardTpl(res);
            console.log(res);
        })
        return;
    }
    if (e.srcElement.dataset.atributeBtn === 'recreationAndSport') {
        category.onWork().then(res => {
            mainСontainerRef.innerHTML = productCardTpl(res);
            console.log(res);
        })
        return;
    }
    if (e.srcElement.dataset.atributeBtn === 'free') {
        category.onWork().then(res => {
            mainСontainerRef.innerHTML = productCardTpl(res);
            console.log(res);
        })
        return;
    }

}

// function !! (title) {
//     mainСontainerRef.insertAdjacentHTML('beforeend', oneSliderTpl(title));
// }
    

/* API test  */
// const BASE_URL = 'https://callboard-backend.herokuapp.com/';
// const currentPage = 1;

// const requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//     };

// fetch()
// .then()
// .then(response => {
//     const valuesEntries = (Object.entries(response));
//     // console.log(`valuesEntries !!!101`, valuesEntries);

//     let newArrTrade = [];
//     let newArrSales = [];

//     for (const values of valuesEntries) {
//         // console.log(`values[0] !!!105`, values[0]);
//         // console.log(`values[1] 106:`, values[1]);
//         // console.log(`valuesArray 107:`, valuesEntries);
                    
//         if (values[0] === 'property') {
//             // console.log(`values[1] 120`, values[1]);
//             newArrProperty.push(values[1]);
//         }
//         if (values[0] === 'transport') {
//             newArrTransport.push(values[1]);
//         }
//     }

//     document.querySelector('[data-atribute="property"]').addEventListener('click', markAllCardOneCategory);
//     document.querySelector('[data-atribute="transport"]').addEventListener('click', markAllCardOneCategory);

    //     function markAllCardOneCategory(e) {
    //         e.preventDefault();
    //         // console.log(`e `, e);
    //         // console.log(`e.target.attributes[0].value `, e.target.attributes[0].value);
    //         // console.log(`recreationAndSport !!!!!!!!!`, newArrFree[0]);
            
    //         if (e.target.attributes[0].value === 'property') {
    //             document.querySelector('.main-container').innerHTML = productCardTpl(newArrProperty[0]);
    //         }
    //         if (e.target.attributes[0].value === 'transport') {
    //             document.querySelector('.main-container').innerHTML = productCardTpl(newArrTransport[0]);
    //         }
    //     }
    // })
    // .catch(error => console.log(`error!!!`, error));
       