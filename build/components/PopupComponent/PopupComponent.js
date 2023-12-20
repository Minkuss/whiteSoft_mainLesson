import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import "./PopupComponent.scss";
export const PopupComponent = () => {
    const [isOpen, setIsOpen] = useState(true);
    const closePopup = () => {
        setIsOpen(false);
        setTimeout(() => {
            setIsOpen(true);
        }, 120000);
    };
    return (_jsx(_Fragment, { children: isOpen && (_jsxs("div", { className: "popup", id: "popup", children: [_jsx("button", { onClick: closePopup, className: "popup__close", id: "popup__close", children: _jsx("img", { src: "./assets/images/burger_close.svg" }) }), _jsx("img", { src: "./assets/images/popup_img.png", className: "popup__img" })] })) }));
};
