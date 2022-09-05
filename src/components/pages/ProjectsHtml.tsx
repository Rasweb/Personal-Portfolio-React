import { Dispatch, SetStateAction } from "react";

interface IProjectsHtml {
  // useState boolean
  setSortControl: Dispatch<SetStateAction<boolean>>;
  // Boolean
  sortcontrol: boolean;
  // useState number
  setShow: Dispatch<SetStateAction<number>>;
}

export const ProjectsHtml = (props: IProjectsHtml) => {
  return (
    <>
      <h1>Projects</h1>

      <div>
        {!props.sortcontrol ? (
          <>
            <button onClick={() => props.setSortControl(true)}>
              Show sort options
            </button>
          </>
        ) : (
          <>
            <button onClick={() => props.setSortControl(false)}>Hide</button>
            <button className="border-2" onClick={() => props.setShow(0)}>
              All
            </button>
            <button className="border-2" onClick={() => props.setShow(1)}>
              HTML Projects
            </button>
            <button className="border-2" onClick={() => props.setShow(2)}>
              SCSS
            </button>
            <button className="border-2" onClick={() => props.setShow(3)}>
              JavaScript
            </button>
            <button className="border-2" onClick={() => props.setShow(4)}>
              TypeScript
            </button>
            <button className="border-2" onClick={() => props.setShow(5)}>
              Vue
            </button>
            <button className="border-2" onClick={() => props.setShow(6)}>
              Group
            </button>
          </>
        )}
      </div>
    </>
  );
};
