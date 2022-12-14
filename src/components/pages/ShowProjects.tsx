import { useContext } from "react";
import { IProject } from "../../models/ProjectType";
import { ThemeContext } from "../context/ThemeContext";

interface IShowProjects {
  proj: IProject;
}

export const ShowProjects = (props: IShowProjects) => {
  let theme = useContext(ThemeContext);
  return (
    <>
      <li
        key={props.proj.id}
        className="flex flex-col items-center mb-4 p-1 border-2 rounded max-w-sm ml-3.5 h-3/6 md:h-[500px] md:w-[500px]"
        style={{
          color: theme.color,
          backgroundColor: theme.background,
        }}
      >
        <h2 className="font-oswald text-2xl md:text-3xl">{props.proj.title}</h2>
        <p className="font-oswald text-lg md:text-xl md:mb-2">
          category: {props.proj.category}
        </p>
        <img
          src={props.proj.image}
          alt={props.proj.title}
          className=" w-80 md:w-4/5 h-auto md:w-[40rem] md:h-[178px] md:border md:border-black"
        />
        <div>
          <p className="border-2 mt-2 p-1 font-unbounded md:h-[210px] md:mt-0">
            {props.proj.description}
          </p>
        </div>
        <a
          className="font-unbounded text-base md:text-lg"
          href={props.proj.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          Read More
        </a>
      </li>
    </>
  );
};
