const removePagin = document.querySelector('.pagination-div')

removePagin.addEventListener('click', clickCategory) 

function clickCategory(e) {
    e.preventDefault();
    let url = `https://callboard-backend.herokuapp.com/call?page=1`

     if (btn[0].children[0].classList.contains('active')) {
        url = `https://callboard-backend.herokuapp.com/call?page=1`
    }
    if (btn[1].children[0].classList.contains('active')) {
        url = `https://callboard-backend.herokuapp.com/call?page=2`
    }
    if (btn[2].children[0].classList.contains('active')) {
        url = `https://callboard-backend.herokuapp.com/call?page=3`
    }