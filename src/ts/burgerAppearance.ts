document.addEventListener('DOMContentLoaded', () => {
  const burgerBtnOpen = document.getElementById('navBurger--open') as HTMLElement;
  const burgerBtnClose = document.getElementById('navBurger--close') as HTMLElement;
  const burgerMenu = document.querySelector('.nav__links--burger') as HTMLElement;
  const overlay = document.querySelector('.burger__overlay') as HTMLElement;
  const links = document.querySelectorAll('.links');
  const body = document.querySelector('body') as HTMLBodyElement;

  burgerBtnOpen.addEventListener('click', () => {
    burgerMenu.classList.add('burger--active');
    overlay.classList.add('overlay--active');
    body.style.overflow = 'hidden';

    burgerBtnClose.addEventListener('click', () => {
      burgerMenu.classList.remove('burger--active');
      overlay.classList.remove('overlay--active');
      body.style.overflow = 'auto';
    });

    links.forEach((link: Element) => {
      link.addEventListener('click', () => {
        burgerMenu.classList.remove('burger--active');
        overlay.classList.remove('overlay--active');
        body.style.overflow = 'auto';
      });
    });
  });
});
