import projectdata from "../data/data.json";
import { IProject } from "../models/ProjectType";
import { ShowProjects } from "./pages/ShowProjects";

export const Projects = () => {
  const projectsHtml = projectdata.map((proj: IProject) => {
    return <ShowProjects key={proj.id} proj={proj} />;
  });
  console.log(projectsHtml);

  //   <button className="border-2">HTML Projects</button>
  //   <button className="border-2">Group</button>
  //   <button className="border-2">CSS</button>
  //   <button className="border-2">SCSS</button>
  //   <button className="border-2">JavaScript</button>
  //   <button className="border-2">TypeScript</button>

  // const htmlTest = projectdata.map((proj) => {
  //   for (let i = 0; i < proj.language.length; i++) {
  //     if (proj.language[i] === "HTML") {
  //       console.log(proj);
  //       console.log("S");
  //     }
  //   }
  //   return (
  //     <>
  //       <ShowProjects key={proj.id} proj={proj} />
  //       {/*
  //       <div key={proj.id} className="mb-2">
  //         <h2>{proj.title}</h2>
  //         <p>Category: {proj.category}</p>
  //         <p>Language: {proj.language}</p>
  //         <p>Read more {proj.github}</p>
  //         <img src={proj.image} alt={proj.title} />
  //         <p>{proj.description}</p>
  //       </div> */}
  //     </>
  //   );
  // });

  return (
    <>
      <div>
        <h1>Projects</h1>
        <ul className="md:flex md:flex-wrap justify-center">{projectsHtml}</ul>
        {/* md:gap-6 */}
      </div>
    </>
  );
};
