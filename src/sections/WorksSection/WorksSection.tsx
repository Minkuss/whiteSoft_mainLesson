import { FC, useContext } from "react";
import "./WorksSection.scss";
import { WorkComponent } from "../../components/index";
import { ApiContext } from "../../context/apiContext";
import { useWorksCards } from "../../hooks/useWorksCards";

export const WorksSection: FC = () => {
  const api = useContext(ApiContext).api;

  const buttonHrefs = [
    "https://capybarafacts.com",
    "https://capybaratips.com",
    "https://whatiscapybara.com",
  ];

  const cards = useWorksCards(api);

  return (
    <section id="works" className="works container">
      <div id="works__content" className="works__content">
        <div className="content__text">
          <h2 className="text__heading heading-1--bold">{cards.title}</h2>
          <p className="text__p subtitle--normal">{cards.shortDescription}</p>
        </div>
        {cards.items.map((item, index) => (
          <WorkComponent
            buttonHref={buttonHrefs[index]}
            key={index}
            data={item}
          />
        ))}
      </div>
    </section>
  );
};
