import openCard from '../templates/modal-one-card.hbs';
// import { Find  } from './main-section';
import { AllCategory, mainСontainerRef, BASE_URL } from './main-section';


let category = new AllCategory;

// console.log(category.onWork());

// console.log(AllCategory);

mainСontainerRef.addEventListener('click', modalOperations);
// console.log(openCard);



async function modalOperations(evt) {

  // console.log(evt.target.classList.contains('fullscreen'));
  evt.preventDefault();

  // const cardData = Object.values(evt.target.dataset);


  if (evt.target.classList.contains('fullscreen')) {


    console.log(evt.target.dataset);

    const {
      category,
      description,
      id,
      imgUrls,
      phone,
      price,
      title,
    } = (evt.target.dataset);

    console.log(title,
      id,
      category,
      description,
      phone,
      imgUrls,
      price);

    appendCardMarkup();



    //   async function fetchOneCard(id, title) {
    //     let title = Object.values(evt.target.dataset)[0];
    //     console.log(title);

    //     const url = `${BASE_URL}/call/find?&search=${title}`
    //     const fetches = await fetch(url)
    //     const response = await fetches.json()
    //     console.log(response);

    //     if (response.length === 0) {
    //       throw 'Ничего не найдено'
    //     }
    //     return response.find(el => {
    //       if (el._id === id) {
    //         console.log(response);
    //         return true;
    //       }
    //     });
    //   }

    //   async function fetchProductCard() {
    //     try {
    //         const product = await fetchOneCard(id, title)
    //         console.log(product)
    //         appendCardMarkup(product)
    //         backdrop.classList.remove("is-hidden")
    //     } catch (error) {
    //         errors(error)
    //     }
    //   }

    function appendCardMarkup() {
      mainСontainerRef.insertAdjacentHTML('afterbegin', `${openCard(data)}`);
    }

  }

    const aboutSellerContOpened = document.querySelector(
        '.modal-button-box-info');

    const aboutSellerContClosed = document.querySelector('.modal-button-box');

    const mainModalPhoto = document.querySelector('.main-modal-product-photo');


    if (evt.target.classList.contains('product-photo-list-item-img'))
    return changePhoto(evt);

    if (evt.target.classList.contains('modal-button-box')) {
        {
            aboutSellerContClosed.style.opacity = '0';
            aboutSellerContOpened.style.opacity = '1';

            setTimeout(() => {
                console.log(aboutSellerContClosed);
                aboutSellerContClosed.style.opacity = '1';
                aboutSellerContOpened.style.opacity = '0';
            }, 2500);
          }
    };



    if (evt.target.classList.contains("icon-cross")) {
        console.log(evt.target);
        refs.backdrop.classList.add("is-hidden");
        }
}




function changePhoto(evt) {
    mainModalPhoto.src = evt.target.src;
}

    // if (evt.target.nodeName === 'SPAN') return;
    // if (evt.target.nodeName === 'BUTTON') return;

const refs = {
    openModalBtn: document.querySelectorAll('.product-card-icon-fullscreen'),
    сloseModalBtn: document.querySelector('[data-close]'),
    modal: document.querySelector('[data-modal-one]'),
  backdrop: document.querySelector('.backdrop-modal-product'),
  title: document.querySelector('.modal-content-box_title'),

  };

const data =
  [
    {"imageUrls": [
        "https://storage.googleapis.com/kidslikev2_bucket/61a7760a-8bdf-40c4-bff3-2e433c37d961.jpg"
    ],
    "_id": "5fd27c020031930017e917a0",
    "title": "HTML developer",
    "description": "html developer work for eat",
    "category": "work",
    "price": 0,
    "phone": "+380930000000",
    "isOnSale": false,
    "userId": "5fd27aeb0031930017e91795",
    "__v": 0
}

  ]


// async function startListening() {
//   refs.openModalBtn.forEach( icon =>
//     icon.addEventListener("click", onClickOpenModal)
//   );
// }

// function onClickOpenModal(ev) {

//   ev.preventDefault();

//     try {
//         refs.cont.insertAdjacentHTML("afterbegin", openCard());
//     window.addEventListener("keydown", onKeyDown);
//     refs.modal.addEventListener("click", onOverlayClick);
//       refs.modal.classList.remove("is-hidden");

//     }

//     catch (error) {
//         console.log(error);
//     }

// }

// refs.cont.addEventListener('click', onClickCloseModal);

// function onClickCloseModal(e) {
//   e.preventDefault();

  // if (e.target.classList.contains("close-form")) {
  //   console.log('what');
  //   }
    // refs.openModalBtn.forEach(icon =>
    //     icon.removeEventListener("click", onClickOpenModal)
    // );
    // console.log('todo1');
    // window.removeEventListener("keydown", onKeyDown);
    //   refs.modal.removeEventListener("click", onOverlayClick);
    //   modal.remove();

    // refs.modal.classList.add("is-hidden");
  // }

  // function onOverlayClick(event) {
  //   if (event.currentTarget === event.target) {
  //     onClickCloseModal()
  //   }
  // }

  // function onKeyDown(event) {
  //   if (event.code === "Escape") {
  //     onClickCloseModal()
  //   }
  // }

   // if (evt.srcElement.attributes[1].nodeValue === '12') {

  //   fetch(markOnePage(response)).then(response => {
  //     console.log('response=', response);
  //     document.body.insertAdjacentHTML("afterbegin", openCard(evt.target.dataset))
  //   }).then(refs.backdrop.classList.remove('is-hidden')).catch(console.log(error));


  //   }


//    function renderCard(response) {
//     const valuesEntries = (Object.entries(response));
//         for (const values of valuesEntries) {
//             document.querySelector(`[data-categories=${values[0]}]`).insertAdjacentHTML('afterbegin', openCard(evt.target.dataset));
//         }
// }



  // if (evt.srcElement.attributes[1].nodeValue !== '12') {
  //   return;
  // }



  // console.log(category, description, title, price, phone, id, images);

  // try {
  //   refs.title.textContent = title;
  //   refs.phone.textContent = phone;
  //   refs.infoButton.textContent = `- на OLX з 12 груд. 2020р.`; //${порахована дата від реєстрації}
  //   refs.description.textContent = description;
  //   refs.price.textContent = `${price} грн`;
  // } catch (error) {
  //   // console.log("Проблема з вставкою",error)
  // }


