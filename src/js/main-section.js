// import { template } from 'handlebars';
import productCardTpl from '../templates/product-cards.hbs';
import oneSliderTpl from '../templates/one-slider.hbs';
import allCardsOneCategory from '../templates/all-cards-one-category.hbs';


// import CategoriesApi from './categories-api';
// const catApi = new CategoriesApi();

const mainСontainerRef = document.querySelector('.main-container');
const BASE_URL = 'https://callboard-backend.herokuapp.com';
const paginationGroup = document.querySelector('.pagination-div');

class AllCategory {
    constructor() {
        this.page = 1;
        this.category = '';
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

        // var el = document.querySelector('.mark-card');
        // const matches = document.querySelectorAll('button[data-atribute-btn]');
        // console.log(matches);

        renderCard(response);

    });

} 

markOnePage();
document.querySelector(`[data-atribute="one-page"]`).addEventListener('click', markOnePage);
document.querySelector(`[data-atribute="two-page"]`).addEventListener('click', markTwoPage);
document.querySelector(`[data-atribute="three-page"]`).addEventListener('click', markThreePage);


function markTwoPage(event) {
    event.preventDefault();

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
// const sectionTextRef = document.querySelector('.section-text');
matches.addEventListener('click', markOnlyOneCategory);
console.log(matches);
// mainСontainerRef.addEventListener('click', markOnlyOneCategory);


function markOnlyOneCategory(e) {
    console.log(`run!`);
    const curentBtn = e.path[2].ownerDocument.activeElement.attributes[0].value;
    const curentBtnClick = e.srcElement.dataset.atributeBtn;
    console.log(e);


    if (curentBtnClick === curentBtn) {
        category.category = `${e.srcElement.dataset.atributeBtn}`;
        category.onWork().then(res => {
            mainСontainerRef.innerHTML = allCardsOneCategory(res);
        })
        return;
    }
    return;
}


       