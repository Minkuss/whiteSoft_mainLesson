import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./FormSection.scss";
export const FormSection = () => {
    const [isValid, setIsValid] = useState({
        name_input: false,
        phone_input: false,
        subject_input: false,
    });
    const [isEmpty, setIsEmpty] = useState({
        name_input: false,
        phone_input: false,
        subject_input: false,
    });
    const [phoneValue, setPhoneValue] = useState("");
    const checkSubmitButton = (event) => {
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
    const validation = (event) => {
        const input = event.currentTarget;
        const inputValue = event.currentTarget.value;
        setIsEmpty((prevIsEmpty) => ({
            ...prevIsEmpty,
            [input.id + "_input"]: input.required && !inputValue,
        }));
    };
    const applyPhoneMask = (event) => {
        let phoneNumber = event.currentTarget.value;
        phoneNumber = phoneNumber.replace(/\D/g, "");
        if (phoneNumber.length === 0) {
            phoneNumber = "+7(" + phoneNumber;
        }
        else if (phoneNumber.length <= 4) {
            phoneNumber = "+7(" + phoneNumber.substring(1);
        }
        else if (phoneNumber.length <= 7) {
            phoneNumber =
                "+7(" + phoneNumber.substring(1, 4) + ") " + phoneNumber.substring(4);
        }
        else if (phoneNumber.length <= 11) {
            phoneNumber =
                "+7(" +
                    phoneNumber.substring(1, 4) +
                    ") " +
                    phoneNumber.substring(4, 7) +
                    "-" +
                    phoneNumber.substring(7);
        }
        else {
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
    return (_jsx("section", { id: "contacts", className: "contacts container", children: _jsxs("div", { className: "contacts__content", children: [_jsxs("div", { className: "content__text", children: [_jsx("h2", { className: "text__heading heading-1--bold", children: "Contact Capibarara" }), _jsx("p", { className: "text__p subtitle--normal", children: "Do you wanna chat with Capibarara? Then send the request!" })] }), _jsxs("form", { className: "content__form shadow--lg", action: "", children: [_jsxs("div", { className: "field-wrapper", children: [_jsx("label", { htmlFor: "subject", className: `${isEmpty.subject_input ? "field__label--error" : "field__label"} body-3--normal`, children: "Subject*" }), _jsx("input", { className: `field__input input body-1--normal ${isEmpty.subject_input ? "input--error" : ""}`, id: "subject", type: "text", required: true, onChange: (event) => checkSubmitButton(event), onBlur: (event) => validation(event) })] }), _jsxs("div", { className: "field-wrapper", children: [_jsx("label", { htmlFor: "name", className: `${isEmpty.name_input ? "field__label--error" : "field__label"} body-3--normal`, children: "Name*" }), _jsx("input", { className: `field__input input body-1--normal ${isEmpty.name_input ? "input--error" : ""}`, id: "name", type: "text", required: true, onChange: (event) => checkSubmitButton(event), onBlur: (event) => validation(event) })] }), _jsxs("div", { className: "field-wrapper", children: [_jsx("label", { htmlFor: "phone", className: `${isEmpty.phone_input ? "field__label--error" : "field__label"} body-3--normal`, children: "Phone*" }), _jsx("input", { className: `field__input input body-1--normal ${isEmpty.phone_input ? "input--error" : ""}`, id: "phone", type: "tel", placeholder: "+7 ______-__-__", required: true, onChange: (event) => {
                                        checkSubmitButton(event);
                                        applyPhoneMask(event);
                                    }, value: phoneValue, onBlur: (event) => validation(event) })] }), _jsxs("div", { className: "field-wrapper", children: [_jsx("label", { htmlFor: "description", className: "field__label body-3--normal", children: "Description" }), _jsx("textarea", { className: "field__textarea textarea body-1--normal", id: "description" })] }), _jsx("button", { disabled: isValid.name_input && isValid.phone_input && isValid.subject_input
                                ? false
                                : true, type: "submit", className: "field__button button", children: "Send it!" })] })] }) }));
};
