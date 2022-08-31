import { IProject } from "../../models/ProjectType";

interface IShowProjects {
  proj: IProject;
}

export const ShowProjects = (props: IShowProjects) => {
  return (
    <>
      <li
        key={props.proj.id}
        className="flex flex-col items-center mb-4 p-1 bg-white border-2 rounded max-w-sm ml-3.5 h-3/6"
      >
        <h2>{props.proj.title}</h2>
        <p>category: {props.proj.category}</p>
        <p>language: {props.proj.language}</p>
        <img
          src={props.proj.image}
          alt={props.proj.title}
          className=" w-80 md:w-4/5 h-auto "
        />
        <div>
          <p className="border-black border-2 mt-2 p-1">
            {props.proj.description}
          </p>
        </div>
        <a href={props.proj.github}>Read More</a>
      </li>
    </>
  );
};
