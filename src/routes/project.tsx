import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { ProjectContext } from "../components/ProjectContext";
import "../styles/projects.scss";

export async function loaderProject({ params }: any) {
  const id = params.id;
  console.log("id project", id);
  return { id };
}
export default function ProjectPage() {
  const { projectHovered, setProjectHovered, projects } =
    useContext(ProjectContext);
  const { id }: any = useLoaderData();
  const project = projects.find((project) => project.id === id);

  useEffect(() => {
    if (projectHovered) {
      setProjectHovered(null);
    }
  }, []);

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <div>
        {project.details &&
          project.details.sections.map((section: any) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              <div>{section.description}</div>
              {typeof section.image !== "string" ? (
                <div>
                  {section.image.map((image: any) => (
                    <img src={image} alt={section.title} />
                  ))}
                </div>
              ) : (
                <img src={section.image} alt={section.title} />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
