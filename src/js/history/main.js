import { badURL } from './update-page' 
import { routers } from './router';
//console.log('Main', badURL);

let auth = true;
let startState = true;

let filter = document.querySelector('.filter__inner');


function updatePage(e) {
    console.log('клик!',e.target.tagName);
    if (e.target.tagName !== "BUTTON") return
    e.preventDefault();
    refreshHistoryOnClick(e);
    updatedContent();
}

function refreshHistoryOnClick(e) {
    const query = e.target.getAttribute('href');
    console.log(query);
    updateHistory(query) 
}

const updateHistory = (query) => {
    let router = routers.find( item => item.path === query);
    if (!router) return
    if (!router.meta.auth || !auth) updateState(query)
}

window.onpopstate = function(event) {
    updatedContent();
};
let state = null;
export const updatedContent = () => {
    let router = routers.find( item => item.path === history.state || item.path === location.pathname)
    if (!router) {
        badURL();
        return
    }
    if (!router.meta.auth || !auth) {
        router.component(); 
    }
    else if (router.meta.auth && auth && startState) {
        routers[0].component();
        updateState(routers[0].path)
    } 
    startState = false;
}

export const updateState = (payload) => {
    history.pushState(payload, null, payload);
} 

filter.addEventListener('click', updatePage);
window.addEventListener('load', updatedContent());