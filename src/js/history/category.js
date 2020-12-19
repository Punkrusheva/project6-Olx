import { updateState, updatedContent } from './main'

const listCategories = document.querySelector('.filter__inner');

const searchCategories = (e) => {
    const elem = e.target;
    if (!elem.classList.contains("filter__button")) return
    e.preventDefault();
    let value = elem.getAttribute('data-category');
    updateState(`/category?value=${value}`);
    updatedContent()
}

listCategories.addEventListener('click', searchCategories)