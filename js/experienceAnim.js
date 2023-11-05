document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll(".text__button");
  let prev = 1;
  
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const clickedButton = event.currentTarget;
      const order = Number(clickedButton.getAttribute("data-order"));
      const experienceCards = document.querySelectorAll(".cards__experience");
  
      experienceCards.forEach((card) => {
        const cardOrder = Number(card.getAttribute("data-order"));
  
        console.log(`order: ${order}`);
        console.log(`cardOrder: ${cardOrder}`);
  
        card.className =
          order === cardOrder
            ? `cards__experience card__${cardOrder} active shadow--md`
            : order < cardOrder
            ? `cards__experience card__${cardOrder} inactive-right shadow--md`
            : `cards__experience card__${cardOrder} inactive-left shadow--md`;
      });
  
      document.querySelector(
        ".content__cards"
      ).className = `content__cards event-${order}`;
  
      buttons.forEach((button) => {
        button.classList.remove("text__button--active");
      });
      clickedButton.classList.add("text__button--active");
  
      prev = order;
    });
  });
});
