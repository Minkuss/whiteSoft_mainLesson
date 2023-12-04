document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.contacts__btn');
  const id: string[] = [
    'mail__text', 'phone__text'
  ];

  buttons.forEach((btn: Element) => {
    btn.addEventListener('click', (event: Event) => {
      const currBtn = event.currentTarget as HTMLElement;
      const order = Number(currBtn.getAttribute('data-order'));
      const textElement = document.getElementById(id[order - 1]);
      if (textElement) {
        const text = textElement.textContent;
        if (text) {
          navigator.clipboard.writeText(text);
        }
      }
    });
  });
});
