import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./WorkComponent.scss";
export const WorkComponent = (props) => {
    const { data } = { ...defaultProps, ...props };
    return (_jsxs("div", { className: "content__card shadow--md", children: [_jsx("div", { className: "card__image", children: _jsx("img", { src: data.card__image }) }), _jsx("div", { className: "card__content", children: _jsxs("div", { className: "wrapper", children: [_jsx("span", { className: "card__heading subtitle--semi-bold", children: data.card__heading }), _jsx("p", { className: "card__info body-2--normal", children: data.card__info }), _jsx("ul", { className: "card__skills", children: data.card__skills.map((skill) => (_jsx("li", { className: "skills__tag", children: _jsx("span", { className: "tag__text body-3--medium", children: skill }) }, data.card__skills.indexOf(skill)))) }), _jsx("a", { href: data.href, className: "card__icon icon__button", children: _jsx("img", { src: "./assets/images/link_ico.svg", alt: "\u0421\u0441\u044B\u043B\u043A\u0430" }) })] }) })] }));
};
const defaultProps = {
    data: {
        card__image: "",
        card__heading: "",
        card__info: "",
        card__skills: [],
        href: "",
    },
};
