document.addEventListener('DOMContentLoaded', function () {
  const id = [
    "mail__text", "phone__text"
  ]

  id.forEach(id => {
    const textElement = document.getElementById(id);
    const textContent = textElement.textContent;
    const coloredText = [];
  
    for (let i = 0; i < textContent.length; i++) {
      const colorClass = i % 2 === 0 ? 'orange' : 'yellow';
      coloredText.push(`<span class="${colorClass}">${textContent[i]}</span>`);
    }
  
    textElement.innerHTML = coloredText.join('');

  })
});