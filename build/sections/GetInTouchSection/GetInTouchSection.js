import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./GetInTouchSection.scss";
export const GetInTouchSection = () => {
    const mailText = "capibarara@gmail.com";
    const phoneText = "+8 800 200-59-20";
    const copyToClipboard = (event) => {
        const spanText = event.currentTarget.textContent;
        navigator.clipboard.writeText(spanText);
    };
    return (_jsx("section", { id: "getInTouch", className: "getInTouch container", children: _jsxs("div", { className: "getInTouch__content", children: [_jsxs("div", { className: "content__text", children: [_jsx("h2", { className: "text__heading heading-1--bold", children: "Get in touch" }), _jsx("p", { className: "text__p subtitle--normal", children: "What\u2019s next? Feel free to reach out to Capibarara if you're looking for a developer, have a query, or simply want to connect." })] }), _jsxs("div", { className: "content__contacts", children: [_jsxs("div", { className: "contacts__mail", children: [_jsx("img", { loading: "lazy", className: "mail__icon", src: "./assets/images/mail.svg" }), _jsx("a", { "data-order": "1", className: "contacts__btn", children: _jsx("span", { onClick: (event) => copyToClipboard(event), className: "mail__text heading-2--semi-bold", id: "mail__text", children: mailText.split("").map((symbol, index) => (_jsx("span", { className: index % 2 === 0 ? "orange" : "yellow", children: symbol }, index))) }) })] }), _jsxs("div", { className: "contacts__phone", children: [_jsx("img", { loading: "lazy", className: "phone__icon", src: "./assets/images/phone.svg" }), _jsx("a", { "data-order": "2", className: "contacts__btn", children: _jsx("span", { onClick: (event) => copyToClipboard(event), id: "phone__text", className: "phone__text heading-2--semi-bold", children: phoneText.split(" ").map((word, wordIndex) => (_jsxs("span", { children: [word.split("").map((symbol, index) => (_jsx("span", { className: index % 2 === 0 ? "orange" : "yellow", children: symbol }, index))), wordIndex < phoneText.split(" ").length - 1 && " "] }, wordIndex))) }) })] })] })] }) }));
};
