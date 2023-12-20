import { FC } from "react";
import "./SkillsSection.scss";

export const SkillsSection: FC = () => {
  return (
    <section id="skills" className="skills container">
      <div className="skills__text">
        <h2 className="text__heading heading-1--bold">Skills</h2>
        <p className="text__p subtitle--normal">
          The skills, tools and technologies Capybarara really good at:
        </p>
      </div>
      <div className="skills__icons">
        <div className="icons__container">
          <img
            loading="lazy"
            src="./assets/images/icons_js.svg"
            alt="Javascript"
          />
          <span className="body-1--normal">Javascript</span>
        </div>
        <div className="icons__container">
          <img
            loading="lazy"
            src="./assets/images/icons_ts.svg"
            alt="Typescript"
          />
          <span className="body-1--normal">Typescript</span>
        </div>
        <div className="icons__container">
          <img
            loading="lazy"
            src="./assets/images/icons_react.svg"
            alt="React"
          />
          <span className="body-1--normal">React</span>
        </div>
        <div className="icons__container">
          <img
            loading="lazy"
            src="./assets/images/icons_next.svg"
            alt="Next.js"
          />
          <span className="body-1--normal">Next.js</span>
        </div>
        <div className="icons__container">
          <img loading="lazy" src="./assets/images/icons_node.svg" alt="Node" />
          <span className="body-1--normal">Node.js</span>
        </div>
      </div>
      <img
        loading="lazy"
        className="skills__orange"
        src="./assets/images/orange_skills.png"
      />
    </section>
  );
};
