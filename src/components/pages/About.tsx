export const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center px-5 pt-4 md:px-60">
        <h1 className="font-oswald text-4xl mb-4 md:text-5xl">About Me</h1>
        <p className="font-unbounded text-xl mb-6 md:text-2xl md:mb-10">
          I have worked on projects using Bootstrap, CSS, Cypress, Express,
          HTML, JavaScript, NodeJS, React, Scss/sass, Tailwind, TypeScript, and
          Vue.
        </p>
        <p className="font-unbounded text-lg mb-2 md:text-2xl md:mb-5">
          I have been an front end developer intern at Nexus Group, from the 3rd
          of October to the 9th of december 2022.
        </p>
        <p className="font-unbounded text-lg mb-2 md:text-2xl md:mb-5">
          When I was at Nexus me and another employee began creating/reviving a
          six year old web-Gui. Using JavaScript, HTML, and CSS, we updated old
          dependencies and created/updated functionality to create, update,
          revoke and list different certificates.
        </p>
      </div>
      <div className="flex justify-center pt-4">
        <div className="flex items-end px-4 md:px-10">
          <i className="fa-brands fa-linkedin text-5xl md:text-6xl"></i>
          <a
            href="https://www.linkedin.com/in/rasmus-palm-076a83219/?original_referer=https%3A%2F%2Frasweb.one%2F"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <p className="text-2xl md:text-3xl">Rasmus Palm</p>
          </a>
        </div>
        <div className="flex items-end px-4 md:px-10">
          <i className="fa-brands fa-github text-5xl md:text-6xl"></i>
          <a
            href="https://github.com/Rasweb"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <p className="text-2xl md:text-3xl">Rasweb</p>
          </a>
        </div>
      </div>
    </div>
  );
};
