import { FC, useState } from "react";
import "./HeaderSection.scss";

export const HeaderSection: FC = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

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
          onClick={() => {
            setBurgerIsOpen(!burgerIsOpen);
          }}
          className="nav__burger"
          id="navBurger--open"
        >
          <img src="./assets/images/burger.svg" />
        </button>
        <div
          className={`nav__links--burger ${
            burgerIsOpen ? "" : "burger--hidden"
          } shadow--2xl`}
        >
          <div className="burger__heading">
            <img
              className="nav__img"
              src="./assets/images/hero_logo.png"
              alt="Capibara.com"
            />
            <button
              onClick={() => {
                setBurgerIsOpen(!burgerIsOpen);
              }}
              className="nav__burger"
              id="navBurger--close"
            >
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
        <div
          className={`burger__overlay ${burgerIsOpen ? "overlay--active" : ""}`}
        ></div>
      </nav>
    </header>
  );
};
