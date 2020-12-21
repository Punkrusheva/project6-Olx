import productCardTpl from '../templates/search-result.hbs'


//export default function searchProducts() {
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
    const input = document.querySelector('.search__input')
    const error1 = document.querySelector('.error-text')
    const pagination = document.querySelector('.pagination-div');

    const products = new FindProduct()

    searchForm.addEventListener('submit', onSearch);
    input.addEventListener('focus', onFocusInput);
    
    function onFocusInput() {
        error1.textContent = '';
        error1.classList.add('is-hidden')
    }
    

    function onSearch(e) {
        e.preventDefault();
        products.query = e.currentTarget.elements.query.value.trim()

        if (products.query === '') {
            error1.textContent = 'Введите что-нибуть!'
            error1.classList.remove('is-hidden')
            return
        }
        fetchProductCard()
    }

    function appendCardMarkup(card) {
        searchContainer.innerHTML = `${productCardTpl(card)}`
        pagination.innerHTML =''
    }

    async function fetchProductCard() {
        try {
            const product = await products.fetchProducts()
            console.log(product)
            appendCardMarkup(product)
            modalSearch.classList.add("is-hidden")
        } catch (error) {
            errors(error)
        }
    }
    
    function errors(error) {
        if (error === 'Ничего не найдено') {
            error1.textContent = 'По этому запросу ничего не найдено.'
            error1.classList.remove('is-hidden')
        } else {
            error1.textContent = 'Не удалось загрузить товар'
            error1.classList.remove('is-hidden')
        }
    }
//}