import { renderHomePage } from '../main-section'
import { renderBadUrl } from './bad-url';
//import {searchProducts} from '../search'
//import {markOneCategory} from '../main-section'
import allCardsOneCategory from '../../templates/all-cards-one-category.hbs';

const main = document.querySelector('.main-container');
const BASE_URL = 'https://callboard-backend.herokuapp.com';

export function homePage() {
    renderHomePage();
}

export function fun2 () {
    main.innerHTML = 'Page 1';
}

export function fun3 () {
    main.innerHTML = 'Page 2';
}

export function fun4 () {
    main.innerHTML = 'Page 3';
}

export function badURL () {
    renderBadUrl();
}

/*export async function  searchResults () {
    searchProducts;
console.log(searchProducts);
}*/

export async function oneCategory() {
    
    const url = new URL(location.href).search;
    main.innerHTML = `${url.substring(3)}`;
    const data = url.substring(3);
    console.log('категория!', url.substring(3));

    async function onWork() {
        const url = `${BASE_URL}/call/specific/${data}`
        const fetches = await fetch(url)
        const json = await fetches.json()
        return json
    }
    console.log(onWork())
    main.innerHTML = allCardsOneCategory(res);
    onWork(data).then( response => response.json())
            .then( response => {
        main.innerHTML = allCardsOneCategory(res);
    })
}
    /*onWork().then(res => {
        main.innerHTML = allCardsOneCategory(res);
    console.log(res);}
        
    main.innerHTML = onWork().stringify(data);
    //console.log(JSON.stringify(data));
    //console.log(renderOneCategory(location.href));
    //main.innerHTML = renderOneCategory(data);
    };
    //appendCardMarkup(product);*/

export async function  fun8 () {
    const search = new URL(location.href).search;
    main.innerHTML = `Продукт № ${search.split('=')[1]}`;
}