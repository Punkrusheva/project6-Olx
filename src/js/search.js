import productCardTpl from '../templates/product-cards.hbs'
const { error, alert } = require('@pnotify/core')
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css';
import 'basiclightbox/dist/basicLightbox.min.css'

export default SearchProducts()

function SearchProducts() {
const BASE_URL = 'https://callboard-backend.herokuapp.com'

 class FindProduct {
    constructor() {
        this.searchQuery = '';
    }

   async fetchProducts() {
        const url = `${BASE_URL}/call/find?&search=${this.searchQuery}`

       const fetches = await fetch(url)
       const json = await fetches.json()  
   
       return json;
    
    }


    get query() {
        return this.searchQuery;
    }
    set query(newSearchQuery) {
        this.searchQuery = newSearchQuery
    }
}

const searchForm = document.querySelector('[data-search-form]')
const searchContainer = document.querySelector('.main-container')
const modalSearch = document.querySelector('[data-search-modal]')
const products = new FindProduct()

searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();
    products.query = e.currentTarget.elements.query.value.trim()

    if (products.query === '') {
        return alert({
              text: "Введите что-нибуть!",
              type: 'info'
        })
       
    }

    fetchProductCard()
    
    
    }
    
    function appendCardMarkup(card) {
        searchContainer.innerHTML = `${productCardTpl(card)}`
}

    async function fetchProductCard() {
        try {
            const product = await products.fetchProducts()
            console.log(product)
            appendCardMarkup(product)
            modalSearch.classList.add("is-hidden")
        } catch {
         errors(error)
        }
   
    }
    
    function errors(error) {


    return error({
             text: "К сожалению по этому запросу ничего не найдено",
             type: 'info' 
          })
}

}