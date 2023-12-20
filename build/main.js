import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom";
import { ExperienceSection, FormSection, GetInTouchSection, HeaderSection, HeroSection, SkillsSection, TestimonialsSection, WorksSection, } from "./sections";
import "./global-scss/global.scss";
import "./global-scss/fonts.scss";
import "./global-scss/reset.scss";
import { PopupComponent } from "./components";
ReactDOM.createRoot(document.getElementById("root")).render(_jsxs(React.StrictMode, { children: [_jsx(PopupComponent, {}), _jsx(HeaderSection, {}), _jsx(HeroSection, {}), _jsx(SkillsSection, {}), _jsx(ExperienceSection, {}), _jsx(WorksSection, {}), _jsx(TestimonialsSection, {}), _jsx(FormSection, {}), _jsx(GetInTouchSection, {})] }));
