import projectdata from "../data/data.json";

export const Projects = () => {
  const projectsHtml = projectdata.map((proj) => {
    return (
      <div key={proj.id}>
        <h2>{proj.title}</h2>
        <p>Category: {proj.category}</p>
        <p>Language: {proj.language}</p>
        <p>Read more {proj.github}</p>
        <img src={proj.image} alt={proj.title} />
        <p>{proj.description}</p>
      </div>
    );
  });
  console.log(projectsHtml);

  return (
    <>
      <div>
        <h1>Projects</h1>
        {projectsHtml}
      </div>
    </>
  );
};
