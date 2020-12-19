import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
    
console.log(swiper);