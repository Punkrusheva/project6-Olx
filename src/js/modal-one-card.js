import openCard from '../templates/modal-one-card.hbs';
// import { Find  } from './main-section';
import  { AllCategory, mainСontainerRef, BASE_URL, category } from './main-section';

console.log(AllCategory);

mainСontainerRef.addEventListener('click', modalOperations);
// console.log(openCard);

// try {
//   window.addEventListener('load', () => {
//     const lists = document.querySelectorAll('.fullscreen');
//     lists.forEach(list => {
//       list.addEventListener('click', modalOperations);
//     });
//   });
// } catch (error) {
//   // console.log("Проблема з додаванням слухача на <body>: ", error);
// }

// document.body.addEventListener('click', modalOperations, )


async function modalOperations(evt) {
  // console.log(evt.target.getAttribute('data-hbs') == '12');
  // console.log(evt);
  // console.log(evt.target.classList.contains('fullscreen'));
  evt.preventDefault();

  const cardData = Object.values(evt.target.dataset);
  console.log(cardData);


  if (!evt.target.classList.contains('fullscreen')) {
    return;
  }
  const title = cardData[0];
  const id = cardData[1];
  const category = cardData[2];
  const description = cardData[3];
  const phone = cardData[4];
  const imgUrls = cardData[5];
  const price = cardData[6];

  async function fetchOneCard() {
    const title = Object.values(evt.target.dataset)[0];

    const url = `${BASE_URL}/call/find?&search=${title}`
    const fetches = await fetch(url)
    const json = await fetches.json()
    console.log(json);

    if (json.length === 0) {
      throw 'Ничего не найдено'
    }
    return response.find(el => {
      if (el._id === id) {
        return true;
      }
    });
  }

  async function fetchProductCard() {
    try {
        const product = await fetchOneCard()
        console.log(product)
        appendCardMarkup(product)
        backdrop.classList.remove("is-hidden")
    } catch (error) {
        errors(error)
    }
  }

  function appendCardMarkup(card) {
    mainСontainerRef.insertAdjacentHTML('afterbegin', `${openCard(card)}`);
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



    if (evt.target.classList.contains("button-close")) {
        console.log('what');
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
    // parentCloseModalBtn: document.querySelector('.open-card'),
    сloseModalBtn: document.querySelector('[data-close]'),
    modal: document.querySelector('[data-modal-one]'),
    // cont: document.getElementsByTagName('.open-card'),
  backdrop: document.querySelector('.backdrop-modal-product'),
    // container: document.querySelector('.main-container'),

  };

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



