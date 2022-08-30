import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/pages/Layout";
import { Start } from "./components/pages/Start";
import { About } from "./components/pages/About";
import { Projects } from "./components/Projects";

function App() {
  return (
    // <HashRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/Personal-Portfolio-React/" element={<Layout />}>
          <Route index element={<Start />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="projects" element={<Projects />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // </HashRouter>
  );
}

export default App;
