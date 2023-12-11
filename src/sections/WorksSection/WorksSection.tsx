import { FC } from "react";
import "./WorksSection.scss";

export const WorksSection: FC = () => {
  return (
    <section id="works" className="works container">
      <div id="works__content" className="works__content">
        <div className="content__text">
          <h2 className="text__heading heading-1--bold">Work</h2>
          <p className="text__p subtitle--normal">
            Some of the noteworthy projects Capibarara have built:
          </p>
        </div>
      </div>
    </section>
  );
};
