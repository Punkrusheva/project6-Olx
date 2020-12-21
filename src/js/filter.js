import  AllCategory from './main-section';
let category = new AllCategory;
console.log(category.onWork());
const BASE_URL = 'https://callboard-backend.herokuapp.com';
mainСontainerRef.addEventListener('click', modalOperations);
const main = document.querySelector('.main-container');

console.log(category.onWork());
export default
    function markOneCategory(e) {

    const url = new URL(location.href).search;
    main.innerHTML = `${url.substring(3)}`;
    const data = url.substring(3);
    console.log('категория!', data);
    onWork()
        .then(res => {
            main.innerHTML = allCardsOneCategory(res)
            
            /*if (res.length > 16) {
                document.querySelector('.pagination-div-one-category').classList.remove('display-none');
            } else { document.querySelector('.pagination-div-one-category').classList.add('display-none'); };*/
        }
    
//console.log(markOneCategory());