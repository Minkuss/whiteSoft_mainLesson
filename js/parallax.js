document.addEventListener('DOMContentLoaded', function () {
  const parallaxLayer = document.querySelector('.parallax');

  window.addEventListener('scroll', function () {
    let yOffset = window.scrollY;
    parallaxLayer.style.transform = 'translateY(' + yOffset * 0.5 + 'px)';
  });
});
