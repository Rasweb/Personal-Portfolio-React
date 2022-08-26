import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Start } from "./pages/Start";
import { About } from "./pages/About";
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
