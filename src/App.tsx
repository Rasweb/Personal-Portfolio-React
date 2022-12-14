import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/pages/Layout";
import { Start } from "./components/pages/Start";
import { About } from "./components/pages/About";
import { Projects } from "./components/Projects";
import { useState } from "react";
import { ThemeContext, themes } from "./components/context/ThemeContext";

function App() {
  const [theme, setTheme] = useState(themes.dark);

  theme.toggleTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <Routes>
          <Route path="/Personal-Portfolio-React/" element={<Layout />}>
            <Route index element={<Start />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="projects" element={<Projects />}></Route>
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
