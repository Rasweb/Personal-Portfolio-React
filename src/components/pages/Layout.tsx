import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export const Layout = () => {
  let theme = useContext(ThemeContext);

  return (
    <div>
      <header className="flex justify-evenly p-7 h-1/5">
        <nav>
          <ul className="flex flex-row gap-7 font-bold">
            <li>
              <Link to={"/Personal-Portfolio-React/"}>Start</Link>
            </li>
            <li>
              <Link to={"about"}>About</Link>
            </li>
            <li>
              <Link to={"projects"}>Projects</Link>
            </li>
            <li>
              <button
                style={{
                  color: theme.color,
                  backgroundColor: theme.background,
                }}
                onClick={theme.toggleTheme}
              >
                Change theme
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
