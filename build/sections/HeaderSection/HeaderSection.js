import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./HeaderSection.scss";
export const HeaderSection = () => {
    const [burgerIsOpen, setBurgerIsOpen] = useState(false);
    return (_jsx("header", { className: "header container", children: _jsxs("nav", { className: "header__nav", children: [_jsx("img", { className: "nav__img", src: "./assets/images/hero_logo.png", alt: "Capibara.com" }), _jsxs("div", { className: "nav__links", children: [_jsx("a", { className: "links", href: "#experience", children: "Experience" }), _jsx("a", { className: "links", href: "#works", children: "Work" }), _jsx("a", { className: "links", href: "#testimonials", children: "Testimonials" }), _jsx("a", { className: "links", href: "#getInTouch", children: "Contact" }), _jsx("div", { className: "divider" })] }), _jsx("button", { onClick: () => {
                        setBurgerIsOpen(!burgerIsOpen);
                    }, className: "nav__burger", id: "navBurger--open", children: _jsx("img", { src: "./assets/images/burger.svg" }) }), _jsxs("div", { className: `nav__links--burger ${burgerIsOpen ? "" : "burger--hidden"} shadow--2xl`, children: [_jsxs("div", { className: "burger__heading", children: [_jsx("img", { className: "nav__img", src: "./assets/images/hero_logo.png", alt: "Capibara.com" }), _jsx("button", { onClick: () => {
                                        setBurgerIsOpen(!burgerIsOpen);
                                    }, className: "nav__burger", id: "navBurger--close", children: _jsx("img", { src: "./assets/images/burger_close.svg" }) })] }), _jsx("div", { className: "divider" }), _jsxs("div", { className: "burger__links", children: [_jsx("a", { className: "links", href: "#experience", children: "Experience" }), _jsx("a", { className: "links", href: "#works", children: "Work" }), _jsx("a", { className: "links", href: "#testimonials", children: "Testimonials" }), _jsx("a", { className: "links", href: "#getInTouch", children: "Contact" })] }), _jsx("div", { className: "divider" })] }), _jsx("div", { className: `burger__overlay ${burgerIsOpen ? "overlay--active" : ""}` })] }) }));
};
