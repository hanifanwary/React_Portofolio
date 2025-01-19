import React from "react";
import myProject1 from "../../assets/Manage-Landing-Page-Simplify-Team-Collaboration-Productivity-01-18-2025_09_59_AM.png";
import myProject2 from "../../assets/Frontend-Mentor-Clipboard-landing-page-01-18-2025_10_01_AM.png";
import myProject3 from "../../assets/Frontend-Mentor-Bookmark-landing-page-01-18-2025_10_07_AM.png";

const Projects = () => {
  const projects = [
    {
      name: "Responsive Manage Landing Page Master",
      image: myProject1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fugit.",
      link: "https://hanifanwary.github.io/Frontend_mentor_manage-landing-page-master/",
    },
    {
      name: "Bookmark Landing Page Master",
      image: myProject3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fugit.",
      link: "https://hanifanwary.github.io/frontend_mentor_bookmark-landing-page-master/",
    },
    {
      name: "Responsive Clipboard Landing Page",
      image: myProject2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fugit.",
      link: "https://hanifanwary.github.io/Clipboard-landing-page-/",
    },
  ];

  return (
    <section
      id="projects"
      className="text-white flex flex-col items-center justify-center py-10 px-4"
    >
      <div className="z-30 py-10 w-full">
        <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg"
            >
              {/* Gambar project */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover transform transition duration-300 group-hover:scale-110"
              />
              {/* Overlay untuk deskripsi */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-center text-sm px-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GO TO LINK
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
