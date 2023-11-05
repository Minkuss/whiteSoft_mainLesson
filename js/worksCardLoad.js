document.addEventListener('DOMContentLoaded', function() {
  const data = [
    {card__image: "../assets/images/facts.png", card__heading: "Capybara Facts", 
    card__info: "This site provides detailed and accurate information about capybaras. It covers various topics such as their habitat, physical characteristics, behavior, diet, and lifecycle. It may also include interesting facts and trivia about capybaras. The site aims to educate visitors who are interested in learning more about these unique creatures", 
    card__skills: ["Next.js", "Typescript", "PostgreSQL", "Tailwindcss", "Figma", "Storybook", "Git"], 
    href: "https://capybarafacts.com"},
    {card__image: "../assets/images/tips.png", card__heading: "CapybaraTips", 
    card__info: "This website is dedicated to providing practical tips and guides on how to care for capybaras as pets. It covers essential topics such as feeding and nutrition, housing and environment setup, health and hygiene, socialization, and training. The site may also include testimonials or experiences shared by capybara owners or experts. It aims to assist individuals who are considering or already own capybaras as pets.", 
    card__skills: ["Next.js", "Typescript", "PostgreSQL", "Tailwindcss", "Figma", "Storybook", "Git"], 
    href: "https://capybaratips.com"},
    {card__image: "../assets/images/capibara_guide.png", card__heading: "What Is Capybara", 
    card__info: "This site serves as a comprehensive introduction to capybaras for those who are unfamiliar with the species. It covers basic information, such as the capybara's classification, origin, and distinct features. It may include images or illustrations to help readers visualize the animal. The site's main objective is to provide a general overview for individuals seeking introductory knowledge about capybaras.", 
    card__skills: ["React", "Typescript", "PostgreSQL", "Tailwindcss", "Figma", "Storybook", "Git"], 
    href: "https://whatiscapybara.com"}
  ]

  const cardsContainer = document.getElementById("works__content")
  let count = 1;

  function createCard(data) {
    const card = document.createElement("div");
    card.className = count % 2 === 0 ? "content__card card__reversed shadow--md" : "content__card shadow--md"

    card.innerHTML = `
    <div class="card__image">
    <img src=${data.card__image} />
  </div>
  <div class="card__content">
    <div class="wrapper">
      <span class="card__heading subtitle">${data.card__heading}</span>
      <p class="card__info body2">
      ${data.card__info}
      </p>
      <ul class="card__skills">
      ${data.card__skills.map(skill => `<li class="skills__tag"><span class="tag__text body3">${skill}</span></li>`).join("")}
      </ul>
      <a href = ${data.href} class="card__icon icon__button"
        ><img src="../assets/images/link_ico.svg" alt="Ссылка"
      /></a>
    </div>
  </div>
    `

    count++;
    return card;
  }

  data.forEach((data) => {
    const card = createCard(data);
    cardsContainer.appendChild(card);
  })
});