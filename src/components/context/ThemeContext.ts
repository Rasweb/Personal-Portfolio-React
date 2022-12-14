import { createContext } from "react";

// The current themes properties
interface ITheme {
  name: string;
  color: string;
  background: string;
  border: string;
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
    background: "#fefefa",
    border: "1px solid black",
    toggleTheme: () => {},
  },
  dark: {
    name: "Dark",
    color: "white",
    background: "black",
    border: "1px solid white",
    toggleTheme: () => {},
  },
};

// Context default value
export const ThemeContext = createContext(themes.light);
