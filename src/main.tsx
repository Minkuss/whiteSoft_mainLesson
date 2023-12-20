import React from "react";
import ReactDOM from "react-dom";
import {
  ExperienceSection,
  FormSection,
  GetInTouchSection,
  HeaderSection,
  HeroSection,
  SkillsSection,
  TestimonialsSection,
  WorksSection,
} from "./sections";
import "./global-scss/global.scss";
import "./global-scss/fonts.scss";
import "./global-scss/reset.scss";
import { PopupComponent } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PopupComponent />
    <HeaderSection />
    <HeroSection />
    <SkillsSection />
    <ExperienceSection />
    <WorksSection />
    <TestimonialsSection />
    <FormSection />
    <GetInTouchSection />
  </React.StrictMode>
);
