document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('popup__close');

  closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  setTimeout(function () {
    popup.style.display = 'flex';
  }, 120000);
});
