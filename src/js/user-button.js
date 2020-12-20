export default openUserButton()

  function openUserButton()  {
    const userBtnRef = document.querySelector('[open-modal-cabinet]');
    const dropdoxRef = document.querySelector('[data-dropdox-open]');
    const userMobileBtnRef = document.querySelector('[open-mobile-cabinet]');
    const dropdoxMobileRef = document.querySelector('[data-dropdox-mobile]');
   

  userBtnRef.addEventListener('click', () => {
    const expanded = userBtnRef.getAttribute('aria-expanded') === 'true' || false;  
    userBtnRef.classList.toggle('is-active');
    userBtnRef.setAttribute('aria-expanded', !expanded);
    dropdoxRef.classList.toggle('is-open');
  });
      
  userMobileBtnRef.addEventListener('click', () => {
    const expandedMobile = userMobileBtnRef.getAttribute('aria-expanded') === 'true' || false;
    userMobileBtnRef.classList.toggle('is-active');
    userMobileBtnRef.setAttribute('aria-expanded', !expandedMobile);
    dropdoxMobileRef.classList.toggle('is-open');
  });
    openAndCloseMyCabinet()
    
}


function openAndCloseMyCabinet () {
    const registrationBtnRef = document.querySelector('[data-modal-open]');
    const registrationMobileBtnRef = document.querySelector('[data-mobile-open]');
    const dropboxContainerRef = document.querySelector('.dropdox.desktop');
    const dropboxMobileContainerRef = document.querySelector('.dropdox.mobile');
    const exitCabinetBtnRef = document.querySelector('[data-cabinet-exit]');
    const exitMobileCabinetBtnRef = document.querySelector('[data-mobile-exit]');
  
  registrationBtnRef.addEventListener('click', onOpenCabinet)
    
  registrationMobileBtnRef.addEventListener('click', onOpenCabinet)
    
  exitCabinetBtnRef.addEventListener('click', onExitCabinet)
    
  exitMobileCabinetBtnRef.addEventListener('click', onExitCabinet)

  function onOpenCabinet() {
    registrationBtnRef.classList.add('is-hiddden')
    registrationMobileBtnRef.classList.add('is-hiddden')
    dropboxContainerRef.classList.remove('is-hiddden')
    dropboxMobileContainerRef.classList.remove('is-hiddden')
  }

  function onExitCabinet() {
    registrationBtnRef.classList.remove('is-hiddden')
    registrationMobileBtnRef.classList.remove('is-hiddden')
    dropboxContainerRef.classList.add('is-hiddden')
    dropboxMobileContainerRef.classList.add('is-hiddden')
  }
}