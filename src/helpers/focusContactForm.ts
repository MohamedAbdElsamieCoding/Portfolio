import { scrollToSection } from "./scrollToSection";

export const focusContactForm = () => {
  scrollToSection("contact");
  setTimeout(() => {
    document.getElementById("name")?.focus();
  }, 300);
};
