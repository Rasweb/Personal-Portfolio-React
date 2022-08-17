import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Start } from "./pages/Start";
import { About } from "./pages/About";

function App() {
  return (
    // <HashRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/Personal-Portfolio-React/" element={<Layout />}>
          <Route index element={<Start />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // </HashRouter>
  );
}

export default App;
