import { FC } from "react";
import "./HeroSection.scss";

export const HeroSection: FC = () => {
  return (
    <section id="hero" className="hero container">
      <div className="hero__info">
        <div className="column__content">
          <h1 className="content__h1 heading-1--bold">
            Hi, I’m Capybarara&nbsp;👋
          </h1>
          <p className="content__p body-2--normal">
            Known for its adorable appearance and friendly nature, the
            Capybarara is now embarking on a journey to find a new job.
            Motivated by the desire to explore new opportunities and challenges,
            the Capybarara is determined to utilize its unique skills and traits
            to secure a fulfilling position!
          </p>
        </div>
        <a
          href="#getInTouch"
          className="column__btn button subtitle--semi-bold"
        >
          I wanna employ you!!!!
        </a>
        <div className="wrap">
          <img
            loading="lazy"
            className="info__img"
            src="./assets/images/hero_img.png"
            alt="Capybara"
          />
        </div>
      </div>
    </section>
  );
};
