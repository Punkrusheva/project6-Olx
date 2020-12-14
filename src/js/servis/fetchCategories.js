const BASE_URL = 'https://callboard-backend.herokuapp.com/';
export async function fetchCategory() {
    const response = await fetch(`${BASE_URL}call/categories`);
    const responseJson = await response.json();
    return responseJson
};