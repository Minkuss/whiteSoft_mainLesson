document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup') as HTMLElement;
  const closeBtn = document.getElementById('popup__close') as HTMLElement;

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  setTimeout(() => {
    popup.style.display = 'flex';
  }, 120000);
  
});
