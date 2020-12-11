/* карусель!! */
/* этот код помечает картинки, для удобства разработки */
const carouselRefLi = document.querySelectorAll('.product-card');

// let i = 1;
// for(let li of carouselRefLi) {
//     li.style.position = 'relative';
//     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//     i++;
// }

/* конфигурация */
let width = 50; // ширина картинки
let count = 2; // видимое количество изображений

// let list = carousel.querySelector('ul');

const list = document.querySelector('.product-card');
// let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки
// const prevRef = document.querySelector('.prev');
const prevRef = document.querySelector('[data-action="prev-card"]');


console.log(prevRef);
prevRef.onclick = function () {
    // console.log(`кнопка влево`);
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};
// const nextRef = document.querySelector('.next');
const nextRef = document.querySelector('[data-action="next-card"]');
nextRef.onclick = function () {
    // console.log(`кнопка вправо`);

    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (carouselRefLi.length - count));
    list.style.marginLeft = position + 'px';
};