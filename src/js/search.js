import productCardTpl from '../templates/product-cards.hbs'

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
       if (json.length === 0) {
         throw 'Ничего не найдено'
       }
       return json;
       
        // return fetch(url)
        // .then(response => response.json())
        //     .then(data => {
        //         this.page += 1;
        //         return data.hits;
        // })
    }


    // resetPage() {
    //     this.page = 1;
    // }

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
products.query = "Red Shirt"

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
    modalSearch.classList.add("is-hidden")
    
    }
    
     function appendCardMarkup(card) {
    searchContainer.insertAdjacentHTML('beforeend', productCardTpl(card))
}

    async function fetchProductCard() {
        try {
            const product = await products.fetchProducts()
            appendCardMarkup(product)
            console.log(product)
        } catch {
         errors(error)
        }
   
    }
    
    function errors(er) {
    if (er === 'Ничего не найдено') {
      return  alert({
            text: 'К сожалению по этому запросу ничего не найдено',
            type: 'info'
        })
    }

    return error({
             text: "Ошибка! Не удалось загрузить изображения.",
             type: 'info' 
          })
}

}

