import { renderHomePage } from '../main-section'
import { renderBadUrl } from './bad-url';
//import {searchProducts} from '../search'

let main = document.querySelector('.main-container');

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

export async function  oneCategory () {
    const url = new URL(location.href).search;
    console.log(location.href);
    const data = await getDataCategory(url.split('=')[1]);
    //const searchContainer = document.querySelector('.main-container')
    main.innerHTML = JSON.stringify(data);
    //console.log(JSON.stringify(data));
    /*function appendCardMarkup(card) {
        searchContainer.innerHTML = `${productCardTpl(card)}`
        pagination.innerHTML =''
    };
    appendCardMarkup(product);*/
}

export async function  fun8 () {
    const search = new URL(location.href).search;
    main.innerHTML = `Продукт № ${search.split('=')[1]}`;
}