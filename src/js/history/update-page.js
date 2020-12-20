//import { getDataSearch, getDataCategory } from '../servis/call';
import { renderHomePage } from '../../js/main-section'
import { renderBadUrl } from './bad-url';

let main = document.querySelector('.section');

export function homePage() {
    renderHomePage();
    //consol.log(renderHomePage());
    //main.innerHTML = 'renderHomePage';
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
    console.log("Update-page", renderBadUrl());
}

export async function  fun6 () {
    let url = new URL(location.href).search;
    let data = await getDataSearch(url.split('=')[1]);
    main.innerHTML = JSON.stringify(data);
}

export async function  fun7 () {
    const url = new URL(location.href).search;
    const data = await getDataCategory(url.split('=')[1]);
    main.innerHTML = JSON.stringify(data);
}

export async function  fun8 () {
    const search = new URL(location.href).search;
    main.innerHTML = `Продукт № ${search.split('=')[1]}`;
}