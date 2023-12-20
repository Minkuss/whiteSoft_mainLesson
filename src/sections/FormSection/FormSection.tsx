import { FC, useEffect, useState } from "react";
import "./FormSection.scss";

export const FormSection: FC = () => {
  const [isValid, setIsValid] = useState<fullInput>({
    name_input: false,
    phone_input: false,
    subject_input: false,
  });
  const [isEmpty, setIsEmpty] = useState<fullInput>({
    name_input: false,
    phone_input: false,
    subject_input: false,
  });
  const [phoneValue, setPhoneValue] = useState("");

  const checkSubmitButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const inputValue = event.currentTarget.value;

    inputValue
      ? setIsValid((prevIsValid) => ({
          ...prevIsValid,
          [input.id + "_input"]: true,
        }))
      : setIsValid((prevIsValid) => ({
          ...prevIsValid,
          [input.id + "_input"]: false,
        }));
  };

  const validation = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    const input = event.currentTarget;
    const inputValue = event.currentTarget.value;

    setIsEmpty((prevIsEmpty) => ({
      ...prevIsEmpty,
      [input.id + "_input"]: input.required && !inputValue,
    }));
  };

  const applyPhoneMask = (event: React.ChangeEvent<HTMLInputElement>) => {
    let phoneNumber = event.currentTarget.value;
    phoneNumber = phoneNumber.replace(/\D/g, "");

    if (phoneNumber.length === 0) {
      phoneNumber = "+7(" + phoneNumber;
    } else if (phoneNumber.length <= 4) {
      phoneNumber = "+7(" + phoneNumber.substring(1);
    } else if (phoneNumber.length <= 7) {
      phoneNumber =
        "+7(" + phoneNumber.substring(1, 4) + ") " + phoneNumber.substring(4);
    } else if (phoneNumber.length <= 11) {
      phoneNumber =
        "+7(" +
        phoneNumber.substring(1, 4) +
        ") " +
        phoneNumber.substring(4, 7) +
        "-" +
        phoneNumber.substring(7);
    } else {
      phoneNumber =
        "+7(" +
        phoneNumber.substring(1, 4) +
        ") " +
        phoneNumber.substring(4, 7) +
        "-" +
        phoneNumber.substring(7, 9) +
        "-" +
        phoneNumber.substring(9, 11);
    }

    setPhoneValue(phoneNumber);
  };

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
            <label
              htmlFor="subject"
              className={`${
                isEmpty.subject_input ? "field__label--error" : "field__label"
              } body-3--normal`}
            >
              Subject*
            </label>
            <input
              className={`field__input input body-1--normal ${
                isEmpty.subject_input ? "input--error" : ""
              }`}
              id="subject"
              type="text"
              required={true}
              onChange={(event) => checkSubmitButton(event)}
              onBlur={(event) => validation(event)}
            />
          </div>
          <div className="field-wrapper">
            <label
              htmlFor="name"
              className={`${
                isEmpty.name_input ? "field__label--error" : "field__label"
              } body-3--normal`}
            >
              Name*
            </label>
            <input
              className={`field__input input body-1--normal ${
                isEmpty.name_input ? "input--error" : ""
              }`}
              id="name"
              type="text"
              required={true}
              onChange={(event) => checkSubmitButton(event)}
              onBlur={(event) => validation(event)}
            />
          </div>
          <div className="field-wrapper">
            <label
              htmlFor="phone"
              className={`${
                isEmpty.phone_input ? "field__label--error" : "field__label"
              } body-3--normal`}
            >
              Phone*
            </label>
            <input
              className={`field__input input body-1--normal ${
                isEmpty.phone_input ? "input--error" : ""
              }`}
              id="phone"
              type="tel"
              placeholder="+7 ______-__-__"
              required={true}
              onChange={(event) => {
                checkSubmitButton(event);
                applyPhoneMask(event);
              }}
              value={phoneValue}
              onBlur={(event) => validation(event)}
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
          <button
            disabled={
              isValid.name_input && isValid.phone_input && isValid.subject_input
                ? false
                : true
            }
            type="submit"
            className="field__button button"
          >
            Send it!
          </button>
        </form>
      </div>
    </section>
  );
};
