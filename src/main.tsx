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
import { ApiContext } from "./context/apiContext";

const api = "https://express-service-dun.vercel.app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApiContext.Provider value={{ api: api }}>
      <PopupComponent />
      <HeaderSection />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <WorksSection />
      <TestimonialsSection />
      <FormSection />
      <GetInTouchSection />
    </ApiContext.Provider>
  </React.StrictMode>
);
