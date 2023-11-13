document.addEventListener('DOMContentLoaded', function () {
  const ids = ["mail__text", "phone__text"];

  ids.forEach(id => {
    const textElement = document.getElementById(id);
    const words = textElement.textContent.split(' ');

    const coloredText = words.map(word => {
      const coloredWord = [];

      for (let i = 0; i < word.length; i++) {
        const colorClass = i % 2 === 0 ? 'orange' : 'yellow';
        coloredWord.push(`<span class="${colorClass}">${word[i]}</span>`);
      }

      return coloredWord.join('');      
    });

    textElement.innerHTML = coloredText.join(' ');
  });
});
