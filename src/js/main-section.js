// import { template } from 'handlebars';
import productCardTpl from '../templates/product-cards.hbs';
import productCardSaleTpl from '../templates/product-cart-sale.hbs';
import oneSliderTpl from '../templates/one-slider.hbs';
// import { requestAdsPagination  } from './fetchAPI';

// requestAdsPagination(1);
// console.log(requestAdsPagination(1));

// import CategoriesAPI from './categories-api';
// const catApi = new CategoriesApi();

function allCategory() {
    const BASE_URL = 'https://callboard-backend.herokuapp.com';

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
        
        // async fetchOneCategory() {
        //     const url = `${BASE_URL}/call/specific/${this.category}`;
        //     const fetches = await fetch(url)
        //     const json = await fetches.json()
        //     return json;
        // }


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

    category.fetchAllCategory().then(result => {
        const resultKey = (Object.keys(result));
        const resultKeyTransletion = translationWordsCategories(resultKey);
        markupSlider(resultKeyTransletion);
        return result;
    })
    .then(response => {
        const valuesEntries = (Object.entries(response));
        for (const values of valuesEntries) {
            document.querySelector(`[data-category=${values[0]}]`).insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
        }
    })
    .then(() => {

        const paginationRef = document.querySelector('.pagination-div');
            
        paginationRef.addEventListener('click', markOnePage);
        paginationRef.addEventListener('click', markTwoPage);
        paginationRef.addEventListener('click', markThreePage);

        const oneCategoriesRef = document.querySelector('.categories-title');
        oneCategoriesRef.addEventListener('click', markAllCardWorkCategory);
        // document.querySelector(`[data-atribute="work"]`).addEventListener('click', markAllCardWorkCategory);
    });

    function markAllCardWorkCategory(event) {
        console.log(`start`);
        console.log(event.target);
    }

    function markOnePage() {
        console.log(`reset page`);
    }

    function markTwoPage(e) {
        e.preventDefault();

        category.page = 2;

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

    function renderSlaider(result) {
        const resultKey = (Object.keys(result));
            const resultKeyTransletion = translationWordsCategories(resultKey);
            markupSliderinerHtml(resultKeyTransletion);
    }

    function renderCard(response) {
        const valuesEntries = (Object.entries(response));
            for (const values of valuesEntries) {
                document.querySelector(`[data-category=${values[0]}]`).insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
            }
    }

    function markThreePage(e) {
        e.preventDefault();

        category.page = 3;

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

    function markupSlider(title) {
        mainСontainerRef.insertAdjacentHTML('beforeend', oneSliderTpl(title));
    }

    function markupSliderinerHtml(title) {
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
} 
    
allCategory();



const mainСontainerRef = document.querySelector('.main-container');


/* API test  */
// const BASE_URL = 'https://callboard-backend.herokuapp.com/';
// const currentPage = 1;

// const requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//     };

// fetch(`${BASE_URL}call?page=${currentPage}`, requestOptions)
//     .then(response => response.json())
    // .then(result => {
    //     const resultKey = (Object.keys(result));
    //     const resultKeyTransletion = translationWordsCategories(resultKey);
    //     markupSlider(resultKeyTransletion);
    //     return result;
    // })
    // .then(response => {
    //     const valuesEntries = (Object.entries(response));

    //     for (const values of valuesEntries) {
    //             document.querySelector(`[data-category=${values[0]}]`).insertAdjacentHTML('afterbegin', productCardTpl(values[1]));
    //         }  

    //     return response;
    // })
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
    // .catch(error => console.log(`error!!!`, error));
       

// fetch(`${BASE_URL}call/specific/transport`)
//     .then(response => response.json())
//     .then(response => {
//         console.log(`response`, response);

//         const valuesEntries = (Object.values(response));
//         console.log(`valuesEntries[0].category 218`, valuesEntries[0].category);

//         document.querySelector('[data-atribute="transport"]').addEventListener('click', markAllCardOneCategory);

        
//         function markAllCardOneCategory(e) {
//             e.preventDefault();
//             console.log(e);
//             console.log(`valuesEntries[0].category`, valuesEntries[0].category);
//             console.log(`e.target.attributes[0].value`, e.target.attributes[0].value);
//         }
        
//     })
//     .catch(error => {
//         console.log(error)
//     });


// cat.addEventListener('click', clickFilter);


// function clickFilter(e) {
//     e.preventDefault();
//     if (e.target.tagName !== "A")
//         return;
    
//     if(e.target.getAttribute('href') === '/property'){
//      catApi.onProperty().then(result =>render(result))};

//     if(e.target.getAttribute('href') === '/electronics'){
//     catApi.onElectronics().then(result =>render(result))};

//     if(e.target.getAttribute('href') === '/free'){
//     catApi.onFree().then(result =>render(result))};

//     if(e.target.getAttribute('href') === '/recreationAndSport'){
//     catApi.onRecreationAndSport().then(result =>render(result))};

//     if(e.target.getAttribute('href') === '/sales'){
//     catApi.onSales().then(result =>render(result))};

//     if(e.target.getAttribute('href') === '/trade'){
//     catApi.onTrade().then(result =>render(result))};

//     if(e.target.getAttribute('href') === '/transport'){
//     catApi.onTransport().then(result =>render(result))};
                            
//     if(e.target.getAttribute('href') === '/work'){
//     catApi.onWork().then(result =>render(result))};

//     if(e.target.getAttribute('href') === '/businessAndServices'){
//     catApi.onbusinessAndServices().then(result =>render(result))};
                                    
// }

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
