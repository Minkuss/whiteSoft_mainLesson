import { FC } from "react";
import "./FormSection.scss";

export const FormSection: FC = () => {
  return (
    <section id="contacts" className="contacts container">
      <div className="contacts__content">
        <div className="content__text">
          <h2 className="text__heading heading-1--bold">Contact Capibarara</h2>
          <p className="text__p subtitle--normal">
            Do you wanna chat with Capibarara? Then send the request!
          </p>
        </div>
        <form className="content__form shadow--lg" action="">
          <div className="field-wrapper">
            <label htmlFor="subject" className="field__label body-3--normal">
              Subject*
            </label>
            <input
              className="field__input input body-1--normal"
              id="subject"
              type="text"
            />
          </div>
          <div className="field-wrapper">
            <label htmlFor="name" className="field__label body-3--normal">
              Name*
            </label>
            <input
              className="field__input input body-1--normal"
              id="name"
              type="text"
            />
          </div>
          <div className="field-wrapper">
            <label htmlFor="phone" className="field__label body-3--normal">
              Phone*
            </label>
            <input
              className="field__input input body-1--normal"
              id="phone"
              type="tel"
              placeholder="+7 ______-__-__"
            />
          </div>
          <div className="field-wrapper">
            <label
              htmlFor="description"
              className="field__label body-3--normal"
            >
              Description
            </label>
            <textarea
              className="field__textarea textarea body-1--normal"
              id="description"
            ></textarea>
          </div>
          <button type="submit" className="field__button button">
            Send it!
          </button>
        </form>
      </div>
    </section>
  );
};
