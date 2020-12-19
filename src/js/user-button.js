export default  openUserButton()
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
}
