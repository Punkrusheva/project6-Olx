// import { template } from 'handlebars';
import productCardTpl from '../templates/product-cards.hbs';
import oneSliderTpl from '../templates/one-slider.hbs';
import allCardsOneCategory from '../templates/all-cards-one-category.hbs';
import Swiper from 'swiper/bundle';
import onSlider from './swiper';
// // import { onSlider } from '../js/swiper.js';
// import slider from '../js/swiper';

const mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
});

// console.dir(mySwiper);

// mySwiper.slideNext();



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
        renderCard(response);
        // console.log(new Swiper);
        
        function onSwiper() { 
    const swiperContainerRef = document.querySelectorAll('.swiper-container');

    swiperContainerRef.forEach((elem) => {
        // console.dir(elem);
        new Swiper(elem, {
            navigation: {
                nextEl: elem.previousSibling.nextElementSibling.lastElementChild,
                prevEl: elem.previousSibling.nextElementSibling.firstElementChild,
            },
            slidesPerView: 2,
            direction: 'vertical',
            spaceBetween: 20,
            simulateTouch: false,
            touchRatio: 0,

            breakpoints: {
                // when window width is >= 740px
                768: {
                slidesPerView: 2,
                spaceBetween: 20,
                direction: 'horizontal',
                },
                1280: {
                slidesPerView: 4,
                spaceBetween: 20,
                direction: 'horizontal',
                },
            },
        });
    })
        }
         onSwiper()
        
    });
    // onSwiper();
   document.querySelector(`[data-atribute="two-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="three-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="one-page"]`).classList.add('is-active');
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
    document.querySelector(`[data-atribute="one-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="three-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="two-page"]`).classList.add('is-active');
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
    document.querySelector(`[data-atribute="one-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="two-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="three-page"]`).classList.add('is-active'); 
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

    const curentBtn = e.srcElement.attributes[0].nodeValue;        
    if (curentBtn === 'watch-all') {

        category.category = `${e.srcElement.dataset.atributeBtn}`;
        category.onWork().then(res => {
            mainСontainerRef.innerHTML = allCardsOneCategory(res);
        })
    } else {
        return;
    }
}

// mainСontainerRef.addEventListener('click', nextSwiperPage);

// function nextSwiperPage(e) {

//     const curentBtn = e.srcElement.attributes[0].nodeValue;        

//     if (curentBtn === './images/sprite.svg#icon-elem-right') {
//         console.log(`curentBtn run!`);
//         // slider.onSlider();
//         onSwiper();
//     } else {
//         return;
//     }
// }

// const mySwiper = new Swiper('.swiper-container', {
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
// });

// const mySwiper = document.querySelector('.swiper-container').swiper;

// // Now you can use all slider methods like
// mySwiper.slideNext();