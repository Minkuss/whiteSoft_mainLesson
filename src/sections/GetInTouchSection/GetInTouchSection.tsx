import { FC } from "react";
import "./GetInTouchSection.scss";

export const GetInTouchSection: FC = () => {
  return (
    <section id="getInTouch" className="getInTouch container">
      <div className="getInTouch__content">
        <div className="content__text">
          <h2 className="text__heading heading-1--bold">Get in touch</h2>
          <p className="text__p subtitle--normal">
            What’s next? Feel free to reach out to Capibarara if you're looking
            for a developer, have a query, or simply want to connect.
          </p>
        </div>
        <div className="content__contacts">
          <div className="contacts__mail">
            <img
              loading="lazy"
              className="mail__icon"
              src="./assets/images/mail.svg"
            />
            <a data-order="1" className="contacts__btn">
              <span className="mail__text heading-2--semi-bold" id="mail__text">
                capibarara@gmail.com
              </span>
            </a>
          </div>
          <div className="contacts__phone">
            <img
              loading="lazy"
              className="phone__icon"
              src="./assets/images/phone.svg"
            />
            <a data-order="2" className="contacts__btn">
              <span
                id="phone__text"
                className="phone__text heading-2--semi-bold"
              >
                +8 800 200-59-20
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
