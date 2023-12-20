import { FC, useState } from "react";
import "./ExperienceSection.scss";

export const ExperienceSection: FC = () => {
  const [btnOrder, setBtnOrder] = useState("1");

  const changeBtnOrder = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setBtnOrder(event.currentTarget.getAttribute("data-order"));
  };

  return (
    <section id="experience" className="experience container">
      <div className="experience__content">
        <div className="content__text">
          <h2 className="text__heading heading-1--bold">Experience</h2>
          <p className="text__p subtitle--normal">
            Here is a quick summary of Capibarara most recent experiences:
          </p>
        </div>

        <div className={`content__cards event-${btnOrder}`}>
          <div data-order="1" className="dates__text">
            <button
              onClick={(event) => changeBtnOrder(event)}
              data-order="1"
              className={`text__button ${
                btnOrder === "1" ? "text__button--active" : ""
              } body-2--normal`}
            >
              May 2020 - Present
            </button>
          </div>
          <div data-order="2" className="dates__text">
            <button
              onClick={(event) => changeBtnOrder(event)}
              data-order="2"
              className={`text__button ${
                btnOrder === "2" ? "text__button--active" : ""
              } body-2--normal`}
            >
              Dec 2019 - May 2020
            </button>
          </div>
          <div
            data-order="3"
            className={`dates__text ${
              btnOrder === "3" ? "dates__text--active" : ""
            }`}
          >
            <button
              onClick={(event) => changeBtnOrder(event)}
              data-order="3"
              className={`text__button ${
                btnOrder === "3" ? "text__button--active" : ""
              } body-2--normal`}
            >
              May 2019 - Dec 2019
            </button>
          </div>

          <div
            data-order="1"
            className={`cards__experience card__1 ${
              btnOrder === "1"
                ? "active"
                : Number(btnOrder) < 1
                ? "inactive-right"
                : "inactive-left"
            } shadow--md`}
          >
            <img
              loading="lazy"
              className="experience__img"
              src="./assets/images/ws_logo.svg"
              alt="White soft"
            />
            <div className="experience__info">
              <span className="info__prof subtitle--semi-bold">
                Middle Frontend Developer
              </span>
              <ul className="info__ul">
                <li className="ul__item">
                  <span className="item__span body-2--normal">
                    Collaborating with senior developers to enhance skills and
                    learn new technologies
                  </span>
                </li>
                <li className="ul__item">
                  <span className="item__span body-2--normal">
                    Mentoring and providing guidance to junior frontend
                    developers
                  </span>
                </li>
                <li className="ul__item">
                  <span className="item__span body-2--normal">
                    Optimizing the performance of web applications
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            data-order="2"
            className={`cards__experience card__2 ${
              btnOrder === "2"
                ? "active"
                : Number(btnOrder) < 2
                ? "inactive-right"
                : "inactive-left"
            } shadow--md`}
          >
            <img
              loading="lazy"
              className="experience__img"
              src="./assets/images/ws_logo.svg"
              alt="White soft"
            />
            <div className="experience__info">
              <span className="info__prof subtitle--semi-bold">
                Junior Frontend Developer
              </span>
              <ul className="info__ul">
                <li className="ul__item">
                  <span className="item__span body-2--normal">
                    Participating in code reviews and receiving feedback
                  </span>
                </li>
                <li className="ul__item">
                  <span className="item__span body-2--normal">
                    Collaborating with UI/UX designers to implement usability
                    and accessibility enhancements
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            data-order="3"
            className={`cards__experience card__3 ${
              btnOrder === "3"
                ? "active"
                : Number(btnOrder) < 3
                ? "inactive-right"
                : "inactive-left"
            } shadow--md`}
          >
            <img
              loading="lazy"
              className="experience__img"
              src="./assets/images/ws_logo.svg"
              alt="White soft"
            />
            <div className="experience__info">
              <span className="info__prof subtitle--semi-bold">
                Frontend Trainee
              </span>
              <ul className="info__ul">
                <li className="ul__item">
                  <span className="item__span body-2--normal">
                    Testing and debugging features or code snippets
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
