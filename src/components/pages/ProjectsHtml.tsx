import { Dispatch, SetStateAction } from "react";

interface IProjectsHtml {
  // useState boolean
  setSortControl: Dispatch<SetStateAction<boolean>>;
  // Boolean
  sortcontrol: boolean;
  // useState number
  setShow: Dispatch<SetStateAction<number>>;
  show: number;
  cat: string;
}

export const ProjectsHtml = (props: IProjectsHtml) => {
  return (
    <>
      <div className="flex justify-center font-oswald pt-2 mb-3">
        <h1 className="text-4xl md:text-5xl">Projects</h1>
      </div>

      <div className="flex flex-col justify-center">
        {!props.sortcontrol ? (
          <>
            <button
              className="font-unbounded text-xl md:text-2xl"
              onClick={() => props.setSortControl(true)}
            >
              Show sort options
            </button>
          </>
        ) : (
          <div className="flex flex-col mx-20 border-2 font-unbounded mb-4 text-lg md:text-2xl md:self-center md:w-5/12">
            <button
              className="mb-1"
              onClick={() => props.setSortControl(false)}
            >
              Hide
            </button>
            <button className="mb-2 " onClick={() => props.setShow(0)}>
              All
            </button>
            <button className="mb-2" onClick={() => props.setShow(1)}>
              HTML Projects
            </button>
            <button className="mb-2" onClick={() => props.setShow(2)}>
              SCSS
            </button>
            <button className="mb-2" onClick={() => props.setShow(3)}>
              JavaScript
            </button>
            <button className="mb-2" onClick={() => props.setShow(4)}>
              TypeScript
            </button>
            <button className="mb-2" onClick={() => props.setShow(5)}>
              Vue
            </button>
            <button className="mb-2" onClick={() => props.setShow(6)}>
              Group
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-center font-oswald text-xl md:text-3xl">
        <p className="mb-1 md:mb-2">Current sort option: {props.cat}</p>
      </div>
      <div className="flex justify-center font-oswald text-xl md:text-2xl">
        {props.show === 0 ? (
          <></>
        ) : (
          <>
            <button className="mb-1" onClick={() => props.setShow(0)}>
              Clear sort
            </button>
          </>
        )}
      </div>
    </>
  );
};
