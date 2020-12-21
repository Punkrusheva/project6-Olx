const BASE_URL = 'https://callboard-backend.herokuapp.com';
const main = document.querySelector('.main-container');

async function onWork () {
    const url = `${BASE_URL}/call/specific/${category}`;
        const fetches = await fetch(url)
        const json = await fetches.json()
        return json
}
console.log(onWork());
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