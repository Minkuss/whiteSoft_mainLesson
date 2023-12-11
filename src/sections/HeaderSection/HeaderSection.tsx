import { FC, useState } from "react";
import "./HeaderSection.scss";

export const HeaderSection: FC = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const showBurger = () => {
    useState(!burgerOpen);
  };

  return (
    <header className="header container">
      <nav className="header__nav">
        <img
          className="nav__img"
          src="./assets/images/hero_logo.png"
          alt="Capibara.com"
        />
        <div className="nav__links">
          <a className="links" href="#experience">
            Experience
          </a>
          <a className="links" href="#works">
            Work
          </a>
          <a className="links" href="#testimonials">
            Testimonials
          </a>
          <a className="links" href="#getInTouch">
            Contact
          </a>
          <div className="divider"></div>
        </div>
        <button
          onClick={showBurger}
          className="nav__burger"
          id="navBurger--open"
        >
          <img src="./assets/images/burger.svg" />
        </button>
        <div className="nav__links--burger shadow--2xl">
          <div className="burger__heading">
            <img
              className="nav__img"
              src="./assets/images/hero_logo.png"
              alt="Capibara.com"
            />
            <button className="nav__burger" id="navBurger--close">
              <img src="./assets/images/burger_close.svg" />
            </button>
          </div>
          <div className="divider"></div>
          <div className="burger__links">
            <a className="links" href="#experience">
              Experience
            </a>
            <a className="links" href="#works">
              Work
            </a>
            <a className="links" href="#testimonials">
              Testimonials
            </a>
            <a className="links" href="#getInTouch">
              Contact
            </a>
          </div>
          <div className="divider"></div>
        </div>
        <div className="burger__overlay"></div>
      </nav>
    </header>
  );
};
