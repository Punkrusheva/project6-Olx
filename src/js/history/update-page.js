import { getDataSearch, getDataCategory } from '../history/call'

let title = document.querySelector('.section');

export function fun1 () {
    title.innerHTML = 'Home';
}

export function fun2 () {
    title.innerHTML = 'Page 1';
}

export function fun3 () {
    title.innerHTML = 'Page 2';
}

export function fun4 () {
    title.innerHTML = 'Page 3';
}

export function fun5 () {
    title.innerHTML = 'Not found';
}

export async function  fun6 () {
    let url = new URL(location.href).search;
    let data = await getDataSearch(url.split('=')[1]);
    title.innerHTML = JSON.stringify(data);
}

export async function  fun7 () {
    const url = new URL(location.href).search;
    const data = await getDataCategory(url.split('=')[1]);
    title.innerHTML = JSON.stringify(data);
}

export async function  fun8 () {
    const search = new URL(location.href).search;
    title.innerHTML = `Продукт № ${search.split('=')[1]}`;
}