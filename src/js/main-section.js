// import { template } from 'handlebars';
import productCardTpl from '../templates/product-cards.hbs';
import productCardSaleTpl from '../templates/product-cart-sale.hbs';
import oneSliderTpl from '../templates/one-slider.hbs';

import CategoriesAPI from './categories-api';

const catApi = new CategoriesApi();


const mainСontainerRef = document.querySelector('.main-container');

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
const currentPage = 2;

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
            // console.log(`values[0] !!!72`, values[0]);
            // console.log(`valuesEntries`, valuesEntries[key]);
            // console.log(`values[1] 68:`, values[1]);

            if (values[0] === 'property`') {
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
                document.querySelector('[data-category="sales"]').insertAdjacentHTML('afterbegin', productCardSaleTpl(values[1]));
            }
        }
        return response;
    })
    // .then(response => {
    //     const valuesEntries = (Object.entries(response));
    //     // console.log(`valuesEntries !!!101`, valuesEntries);

    //     let newArrProperty = [];
    //     let newArrTransport = [];
    //     let newArrWork = [];
    //     let newArrElectronics = [];
    //     let newArrBusinessAndServices = [];
    //     let newArrRecreationAndSport = [];
    //     let newArrFree = [];
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
    //         if (values[0] === 'work') {
    //             newArrWork.push(values[1]);
    //         }
    //         if (values[0] === 'electronics') {
    //             newArrElectronics.push(values[1]);
    //         }
    //         if (values[0] === 'businessAndServices') {
    //             newArrBusinessAndServices.push(values[1]);
    //         }
    //         if (values[0] === 'recreationAndSport') {
    //             newArrRecreationAndSport.push(values[1]);
    //         }
    //         if (values[0] === 'free') {
    //             newArrFree.push(values[1]);
    //         }
    //         if (values[0] === 'trade') {
    //             newArrTrade.push(values[1]);
    //         }
    //         if (values[0] === 'sales') {
    //             newArrSales.push(values[1]);
    //         }
            
    //     }

    //     document.querySelector('[data-atribute="property"]').addEventListener('click', markAllCardOneCategory);
    //     document.querySelector('[data-atribute="transport"]').addEventListener('click', markAllCardOneCategory);
    //     document.querySelector('[data-atribute="work"]').addEventListener('click', markAllCardOneCategory);
    //     document.querySelector('[data-atribute="electronics"]').addEventListener('click', markAllCardOneCategory);
    //     document.querySelector('[data-atribute="businessAndServices"]').addEventListener('click', markAllCardOneCategory);
    //     document.querySelector('[data-atribute="recreationAndSport"]').addEventListener('click', markAllCardOneCategory);
    //     document.querySelector('[data-atribute="free"]').addEventListener('click', markAllCardOneCategory);
    //     document.querySelector('[data-atribute="trade"]').addEventListener('click', markAllCardOneCategory);
    //     document.querySelector('[data-atribute="sales"]').addEventListener('click', markAllCardOneCategory);

        

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
    //         if (e.target.attributes[0].value === 'work') {
    //             document.querySelector('.main-container').innerHTML = productCardTpl(newArrWork[0]);
    //         }
    //         if (e.target.attributes[0].value === 'electronics') {
    //             document.querySelector('.main-container').innerHTML = productCardTpl(newArrElectronics[0]);
    //         }
    //         if (e.target.attributes[0].value === 'businessAndServices') {
    //             document.querySelector('.main-container').innerHTML = productCardTpl(newArrBusinessAndServices[0]);
    //         }
    //         if (e.target.attributes[0].value === 'recreationAndSport') {
    //             document.querySelector('.main-container').innerHTML = productCardTpl(newArrRecreationAndSport[0]);
    //         }
    //         if (e.target.attributes[0].value === 'free') {
    //             document.querySelector('.main-container').innerHTML = productCardTpl(newArrFree[0]);
    //         }
    //         if (e.target.attributes[0].value === 'trade') {
    //             document.querySelector('.main-container').innerHTML = productCardTpl(newArrTrade[0]);
    //         }
    //         if (e.target.attributes[0].value === 'sales') {
    //             document.querySelector('.main-container').innerHTML = productCardTpl(newArrSales[0]);
    //         }
    //     }
    // })
    .catch(error => console.log(`error!!!`, error));
       
    // console.log(`newArrsales`, newArrSales);
      
    function markupSlider(title) {
        mainСontainerRef.insertAdjacentHTML('beforeend', oneSliderTpl(title));
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




fetch(`${BASE_URL}call/specific/transport`)
    .then(response => response.json())
    .then(response => {
        console.log(`response`, response);

        const valuesEntries = (Object.values(response));
        console.log(`valuesEntries[0].category 218`, valuesEntries[0].category);

        document.querySelector('[data-atribute="transport"]').addEventListener('click', markAllCardOneCategory);

        
        function markAllCardOneCategory(e) {
            e.preventDefault();
            console.log(e);
            console.log(`valuesEntries[0].category`, valuesEntries[0].category);
            console.log(`e.target.attributes[0].value`, e.target.attributes[0].value);
        }
        
    })
    .catch(error => {
        console.log(error)
    });



// .then(response => {
//         const valuesEntries = (Object.entries(response));

//         const newArrRecreationAndSport = [];
//         const newArrFree = [];
//         const newArrSales = [];

//         for (const values of valuesEntries) {
//             if (values[0] === 'recreationAndSport') {
//                 newArrRecreationAndSport.push(values[1]);
//             }
//             if (values[0] === 'free') {
//                 newArrFree.push(values[1]);
//             }
//             if (values[0] === 'sales') {
//                 newArrSales.push(values[1]);
//             }
//         }

//         document.querySelector('[data-atribute="recreationAndSport"]').addEventListener('click', markAllCardOneCategory);
//         document.querySelector('[data-atribute="free"]').addEventListener('click', markAllCardOneCategory);
//         document.querySelector('[data-atribute="sales"]').addEventListener('click', markAllCardOneCategory);

//         function markAllCardOneCategory(e) {
//             e.preventDefault();
            
//             if (e.target.attributes[0].value === 'recreationAndSport') {
//                 document.querySelector('.main-container').innerHTML = productCardTpl(newArrRecreationAndSport[0]);
//             }
//             if (e.target.attributes[0].value === 'free') {
//                 document.querySelector('.main-container').innerHTML = productCardTpl(newArrFree[0]);
//             }
//             if (e.target.attributes[0].value === 'sales') {
//                 document.querySelector('.main-container').innerHTML = productCardTpl(newArrsales[0]);
//             }
//         }
//     })


cat.addEventListener('click', clickFilter)
function clickFilter(e) {
    e.preventDefault();
    if (e.target.tagName !== "A")
        return;
    
    if(e.target.getAttribute('href') === '/property'){
     catApi.onProperty().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/electronics'){
    catApi.onElectronics().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/free'){
    catApi.onFree().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/recreationAndSport'){
    catApi.onRecreationAndSport().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/sales'){
    catApi.onSales().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/trade'){
    catApi.onTrade().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/transport'){
    catApi.onTransport().then(result =>render(result))};
                            
    if(e.target.getAttribute('href') === '/work'){
    catApi.onWork().then(result =>render(result))};

    if(e.target.getAttribute('href') === '/businessAndServices'){
    catApi.onbusinessAndServices().then(result =>render(result))};
                                    
}