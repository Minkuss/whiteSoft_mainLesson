import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./WorksSection.scss";
import { WorkComponent } from "../../components/index";
export const WorksSection = () => {
    const data = [
        {
            card__image: "./assets/images/facts.png",
            card__heading: "Capybara Facts",
            card__info: "This site provides detailed and accurate information about capybaras. It covers various topics such as their habitat, physical characteristics, behavior, diet, and lifecycle. It may also include interesting facts and trivia about capybaras. The site aims to educate visitors who are interested in learning more about these unique creatures",
            card__skills: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Tailwindcss",
                "Figma",
                "Storybook",
                "Git",
            ],
            href: "https://capybarafacts.com",
        },
        {
            card__image: "./assets/images/tips.png",
            card__heading: "CapybaraTips",
            card__info: "This website is dedicated to providing practical tips and guides on how to care for capybaras as pets. It covers essential topics such as feeding and nutrition, housing and environment setup, health and hygiene, socialization, and training. The site may also include testimonials or experiences shared by capybara owners or experts. It aims to assist individuals who are considering or already own capybaras as pets.",
            card__skills: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Tailwindcss",
                "Figma",
                "Storybook",
                "Git",
            ],
            href: "https://capybaratips.com",
        },
        {
            card__image: "./assets/images/capibara_guide.png",
            card__heading: "What Is Capybara",
            card__info: "This site serves as a comprehensive introduction to capybaras for those who are unfamiliar with the species. It covers basic information, such as the capybara's classification, origin, and distinct features. It may include images or illustrations to help readers visualize the animal. The site's main objective is to provide a general overview for individuals seeking introductory knowledge about capybaras.",
            card__skills: [
                "React",
                "Typescript",
                "PostgreSQL",
                "Tailwindcss",
                "Figma",
                "Storybook",
                "Git",
            ],
            href: "https://whatiscapybara.com",
        },
    ];
    return (_jsx("section", { id: "works", className: "works container", children: _jsxs("div", { id: "works__content", className: "works__content", children: [_jsxs("div", { className: "content__text", children: [_jsx("h2", { className: "text__heading heading-1--bold", children: "Work" }), _jsx("p", { className: "text__p subtitle--normal", children: "Some of the noteworthy projects Capibarara have built:" })] }), data.map((element) => (_jsx(WorkComponent, { data: element }, data.indexOf(element))))] }) }));
};
