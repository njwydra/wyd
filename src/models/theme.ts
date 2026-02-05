export enum Theme {
  BASE = "base",
  NEUMORPHISM_DEBOSS = "neumorphism-deboss",
  NEUMORPHISM_EMBOSS = "neumorphism-emboss",
}

export const ThemeToClassMap = {
  [Theme.BASE]: "",
  [Theme.NEUMORPHISM_DEBOSS]: "theme-neumorphism-deboss",
  [Theme.NEUMORPHISM_EMBOSS]: "theme-neumorphism-emboss",
};
