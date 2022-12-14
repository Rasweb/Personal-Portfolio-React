import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import linkDark from "../../data/Linkedin-dark.png";
import linkLight from "../../data/Linkedin-light.png";
import { ThemeContext } from "../context/ThemeContext";

export const Start = () => {
  let theme = useContext(ThemeContext);
  const [darkImageColor, setDarkImageColor] = useState(false);

  useEffect(() => {
    if (theme.name === "Dark") {
      setDarkImageColor(true);
    } else {
      setDarkImageColor(false);
    }

    return;
  }, [theme]);

  return (
    <>
      <div className="flex flex-col items-center text-center p-3">
        <div>
          <div>
            <h1 className="pt-8 mb-6 text-4xl font-oswald uppercase md:text-5xl">
              Hello, I'm Rasmus Palm
            </h1>
          </div>
          <div className="px-8 md:px-60 ">
            <p className="mb-6 text-2xl font-unbounded md:text-3xl">
              Welcome to my personal portfolio. Here you can find all my public
              projects and my social links.
            </p>
          </div>
          {darkImageColor ? (
            <>
              <div className="flex justify-center mb-6 md:mb-10">
                <a
                  href="https://www.linkedin.com/in/rasmus-palm-076a83219/?original_referer=https%3A%2F%2Frasweb.one%2F"
                  rel="noopener noreferrer"
                  target={"_blank"}
                >
                  <img className="md:w-[25rem]" src={linkDark} alt="" />
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center mb-6 md:mb-10">
                <a href="https://www.linkedin.com/in/rasmus-palm-076a83219/?original_referer=https%3A%2F%2Frasweb.one%2F">
                  <img className="md:w-[25rem]" src={linkLight} alt="" />
                </a>
              </div>
            </>
          )}
          <div>
            <p className="text-lg font-unbounded md:text-3xl">
              <Link to={"projects"}>Explore my work here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
