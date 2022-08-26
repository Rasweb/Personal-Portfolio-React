import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/Personal-Portfolio-React/"}>Start</Link>
            </li>
            <li>
              <Link to={"about"}>About</Link>
            </li>
            <li>
              <Link to={"projects"}>Projects</Link>
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
