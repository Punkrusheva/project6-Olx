import productCardTpl from '../templates/product-cards.hbs';
import oneSliderTpl from '../templates/one-slider.hbs';
import allCardsOneCategory from '../templates/all-cards-one-category.hbs';
import Swiper from 'swiper/bundle';

const BASE_URL = 'https://callboard-backend.herokuapp.com';
const mainСontainerRef = document.querySelector('.main-container');
const paginationGroup = document.querySelector('.pagination-div');

export const renderHomePage = function () {
    markOnePage();
};
/*export const markOneCategory = function () {
    markOnlyOneCategory();
};*/

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
   document.querySelector(`[data-atribute="two-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="three-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="one-page"]`).classList.add('is-active');

    category.onePage();

    category.fetchAllCategory().then(result => {
        window.scrollTo({
            top: document.body.clientHeight - 2500,
            behavior: 'smooth',
        });
        renderSlaider(result);
        renderCard(result);
        onSwiper();
    });

   document.querySelector(`[data-atribute="two-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="three-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="one-page"]`).classList.add('is-active');

}

markOnePage();
document.querySelector(`[data-atribute="one-page"]`).addEventListener('click', markOnePage);
document.querySelector(`[data-atribute="two-page"]`).addEventListener('click', markTwoPage);
document.querySelector(`[data-atribute="three-page"]`).addEventListener('click', markThreePage);



function markTwoPage(event) {
    //event.preventDefault();
    document.querySelector(`[data-atribute="one-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="three-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="two-page"]`).classList.add('is-active');
    category.twoPage();

    category.fetchAllCategory().then(result => {
        window.scrollTo({
            top: document.body.clientHeight - 2500,
            behavior: 'smooth',
        });
        renderSlaider(result);
        renderCard(result);
        onSwiper();
    });

    document.querySelector(`[data-atribute="one-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="three-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="two-page"]`).classList.add('is-active');

}

function markThreePage(event) {
    //event.preventDefault();
    document.querySelector(`[data-atribute="one-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="two-page"]`).classList.remove('is-active');
    document.querySelector(`[data-atribute="three-page"]`).classList.add('is-active');
    category.threePage();

    category.fetchAllCategory().then(result => {
        window.scrollTo({
            top: document.body.clientHeight - 2500,
            behavior: 'smooth',
        });
        renderSlaider(result);
        renderCard(result);
        onSwiper();
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

    const curentBtn = e.target.attributes[0].nodeValue;
    
    if (curentBtn === 'watch-all') {

        paginationGroup.classList.add('display-none');

        category.category = `${e.target.dataset.atributeBtn}`;
        
        category.onWork().then(res => {
            mainСontainerRef.innerHTML = allCardsOneCategory(res);
console.log(res);
            

            if (res.length > 16) {
                document.querySelector('.pagination-div-one-category').classList.remove('display-none');
            }
            // for (const key in res) {
            //     const arrPageOne = [];
            //     if (key) {
            //         const element = object[key];
            //     }
            //     if (key < 16) {
            //         arrPageOne.push(res[key])
            //     } else {
            //        return
            //     }
            // }
            // }



        })
    } else {
        return;
    }
}


function onSwiper() {
    document.querySelectorAll('.swiper-container').forEach(function (elem) {
    // console.dir(elem);
    new Swiper(elem, {
    navigation: {
        nextEl: elem.previousElementSibling.lastElementChild,
        prevEl: elem.previousElementSibling.firstElementChild,
    },
    // slidesPerView: 1,
    watchSlidesVisibility: true,
    direction: 'horizontal',
    spaceBetween: 20,
    // simulateTouch: true,
        touchRatio: 1,
        loadOnTransitionStart: true,


    breakpoints: {
        // when window width is >= 740px
        768: {
        slidesPerView: 2.2,
        // spaceBetween: 20,
        // direction: 'horizontal',
        addSlidesBefore: 2,

        },
        1280: {
        slidesPerView: 4.3,
        // spaceBetween: 20,
        // direction: 'horizontal',
        },
    },
    });
});
}
