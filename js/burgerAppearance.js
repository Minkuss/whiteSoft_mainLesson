document.addEventListener('DOMContentLoaded', function () {
  const burgerBtnOpen = document.getElementById('navBurger--open');
  const burgerBtnClose = document.getElementById('navBurger--close');
  const burgerMenu = document.querySelector('.nav__links--burger');
  const overlay = document.querySelector(".burger__overlay");
  const links = document.querySelectorAll(".links");

  burgerBtnOpen.addEventListener('click', function openMenu() {
    burgerMenu.classList.add('burger--active');
    overlay.classList.add("overlay--active")
    burgerBtnClose.addEventListener('click', function closeMenu() {
      burgerMenu.classList.remove('burger--active');
      overlay.classList.remove("overlay--active")
    })
    links.forEach((link => {
      link.addEventListener('click', () => {
        burgerMenu.classList.remove('burger--active');
        overlay.classList.remove("overlay--active")
      })
    }))
  });
});
