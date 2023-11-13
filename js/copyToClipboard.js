document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll(".contacts__btn");
  const id = [
    "mail__text", "phone__text"
  ];

  buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
      const currBtn = event.currentTarget;
      const order = Number(currBtn.getAttribute("data-order"));

      const text = document.getElementById(id[order-1]).textContent;
      navigator.clipboard.writeText(text);
    });
  })
});
