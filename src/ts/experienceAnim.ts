document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.text__button');
  const btnsContainers = document.querySelectorAll('.dates__text');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const clickedButton = event.currentTarget as HTMLElement;
      const order = Number(clickedButton.getAttribute('data-order'));
      const buttonContainer = document.querySelector(`div[data-order='${order}']`);
      const experienceCards = document.querySelectorAll('.cards__experience');

      experienceCards.forEach((card) => {
        const cardOrder = Number(card.getAttribute('data-order'));

        card.className =
          order === cardOrder
            ? `cards__experience card__${cardOrder} active shadow--md`
            : order < cardOrder
            ? `cards__experience card__${cardOrder} inactive-right shadow--md`
            : `cards__experience card__${cardOrder} inactive-left shadow--md`;
      });

      document.querySelector('.content__cards')!.className = `content__cards event-${order}`;

      buttons.forEach((button) => {
        button.classList.remove('text__button--active');
      });
      btnsContainers.forEach((container) => {
        container.classList.remove('dates__text--active');
      });
      clickedButton.classList.add('text__button--active');
      if (buttonContainer) {
        buttonContainer.classList.add('dates__text--active');
      }
    });
  });
});
