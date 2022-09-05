import { useState } from "react";
import projectdata from "../data/data.json";
import { IProject } from "../models/ProjectType";
import { ProjectsHtml } from "./pages/ProjectsHtml";
import { ShowProjects } from "./pages/ShowProjects";

export const Projects = () => {
  const [show, setShow] = useState(0);
  const [sortcontrol, setSortControl] = useState(false);

  // All projects
  const projectsHtml = projectdata.map((proj: IProject) => {
    return <ShowProjects key={proj.id} proj={proj} />;
  });

  // HTML projects
  const showHtml = projectdata.map((projHtml) => {
    for (let i = 0; i < projHtml.language.length; i++) {
      if (projHtml.language[i] === "HTML") {
        if (projHtml.language[0] === "HTML") {
          return <ShowProjects key={projHtml.id} proj={projHtml} />;
        }
      }
    }
    return null;
  });

  // Scss projects
  const showScss = projectdata.map((projScss) => {
    for (let i = 0; i < projScss.language.length; i++) {
      if (projScss.language[i] === "SCSS") {
        if (projScss.language[0] === "SCSS") {
          return <ShowProjects key={projScss.id} proj={projScss} />;
        }
      }
    }
    return null;
  });

  // Javascript projects
  const showJs = projectdata.map((projJs) => {
    for (let i = 0; i < projJs.language.length; i++) {
      if (projJs.language[i] === "JavaScript") {
        if (projJs.language[0] === "JavaScript") {
          return <ShowProjects key={projJs.id} proj={projJs} />;
        }
      }
    }
    return null;
  });

  // Typescript projects
  const showTs = projectdata.map((projTs) => {
    for (let i = 0; i < projTs.language.length; i++) {
      if (projTs.language[i] === "TypeScript") {
        if (projTs.language[0] === "TypeScript") {
          return <ShowProjects key={projTs.id} proj={projTs} />;
        }
      }
    }
    return null;
  });

  // Vue projects
  const showVue = projectdata.map((projVue) => {
    for (let i = 0; i < projVue.language.length; i++) {
      if (projVue.language[i] === "Vue") {
        if (projVue.language[0] === "Vue") {
          return <ShowProjects key={projVue.id} proj={projVue} />;
        }
      }
    }
    return null;
  });

  // Group projects
  const showGroup = projectdata.map((projGroup) => {
    if (projGroup.category === "group") {
      return <ShowProjects key={projGroup.id} proj={projGroup} />;
    }
    return null;
  });

  let comp = null;
  switch (show) {
    // All projects
    case 0:
      console.log("0");
      comp = (
        <ul className="md:flex md:flex-wrap justify-center">{projectsHtml}</ul>
      );
      break;
    // Html projects
    case 1:
      console.log("1");
      comp = (
        <ul className="md:flex md:flex-wrap justify-center">{showHtml}</ul>
      );
      break;
    // Scss projects
    case 2:
      comp = (
        <ul className="md:flex md:flex-wrap justify-center">{showScss}</ul>
      );
      break;
    // Javascript projects
    case 3:
      comp = <ul className="md:flex md:flex-wrap justify-center">{showJs}</ul>;
      break;
    // Typescript projects
    case 4:
      comp = <ul className="md:flex md:flex-wrap justify-center">{showTs}</ul>;
      break;
    // Vue projects
    case 5:
      comp = <ul className="md:flex md:flex-wrap justify-center">{showVue}</ul>;
      break;
    case 6:
      comp = (
        <ul className="md:flex md:flex-wrap justify-center">{showGroup}</ul>
      );
      break;
  }

  return (
    <>
      <div>
        <ProjectsHtml
          // useState as prop
          setSortControl={setSortControl}
          // boolean as prop
          sortcontrol={sortcontrol}
          // useState as prop
          setShow={setShow}
        />
        <div>{comp}</div>
      </div>
    </>
  );
};
