import { createContext } from "react";

// The current themes properties
interface ITheme {
  name: string;
  color: string;
  background: string;
  toggleTheme(): void;
}

// Different themes
interface IThemes {
  light: ITheme;
  dark: ITheme;
}

// Theme color properties
export const themes: IThemes = {
  light: {
    name: "Light",
    color: "black",
    background: "white",
    toggleTheme: () => {},
  },
  dark: {
    name: "Dark",
    color: "white",
    background: "black",
    toggleTheme: () => {},
  },
};

// Context default value
export const ThemeContext = createContext(themes.light);
