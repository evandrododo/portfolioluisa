import Lettering from "../components/Lettering";
import Project from "../components/Project";
import "../styles/projects.scss";

const projects = [
  {
    id: "project1",
    title: "Project 1",
    image: "udu.png",
  },
  {
    id: "project2",
    title: "Project 2",
    image: "udu.png",
  },
];

export default function Projects() {
  return (
    <>
      <Lettering />
      <div className="projects-list">
        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>
    </>
  );
}
