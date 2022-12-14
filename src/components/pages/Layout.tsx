import { useContext, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";

export const Layout = () => {
  let theme = useContext(ThemeContext);
  const [openNav, setOpenNav] = useState(false);
  const [darkImageColor, setDarkImageColor] = useState(false);

  useEffect(() => {
    if (theme.name === "Dark") {
      setDarkImageColor(true);
    } else {
      setDarkImageColor(false);
    }

    return;
  }, [theme]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul
      style={{
        color: theme.color,
        backgroundColor: theme.background,
      }}
      className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
    >
      <li>
        <Link
          className="font-unbounded md:text-lg"
          to={"/Personal-Portfolio-React/"}
        >
          Start
        </Link>
      </li>
      <li>
        <Link className="font-unbounded md:text-lg" to={"projects"}>
          Projects
        </Link>
      </li>
      <li>
        <Link className="font-unbounded md:text-lg" to={"about"}>
          About
        </Link>
      </li>
    </ul>
  );

  return (
    <div
      className="min-h-screen"
      style={{
        color: theme.color,
        backgroundColor: theme.background,
      }}
    >
      <Navbar
        style={{
          color: theme.color,
          backgroundColor: theme.background,
          border: theme.border,
        }}
        className=" mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4"
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="hidden lg:block">{navList}</div>
          <div>
            <button
              style={{
                color: theme.color,
                backgroundColor: theme.background,
              }}
              onClick={theme.toggleTheme}
            >
              {darkImageColor ? (
                <>
                  <i className="fa-regular fa-sun text-2xl md:text-3xl"></i>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-moon text-2xl md:text-3xl"></i>
                </>
              )}
            </button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6  hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
