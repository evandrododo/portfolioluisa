import { useContext, useEffect } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { Container } from "../components/Container";
import LinkIcon from "../components/icons/LinkIcon";
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
    <Container className="project-detail">
      <h1 style={{ color: project.color }}>{project.title}</h1>
      <div>
        {project.details &&
          project.details.sections.map((section: any) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              <div className="description">{section.description}</div>
              {typeof section.image !== "string" ? (
                <div style={section.containerImageStyle}>
                  {section.image.map((image: any) => {
                    if (typeof image === "object") {
                      return (
                        <>
                          <img
                            src={image.src}
                            alt={section.title}
                            style={image.customStyle}
                          />
                          {image.caption && (
                            <div className="caption">{image.caption}</div>
                          )}
                        </>
                      );
                    }
                    return <img src={image} alt={section.title} />;
                  })}
                </div>
              ) : (
                <img src={section.image} alt={section.title} />
              )}
            </div>
          ))}
      </div>
      <div className="center">
        <NavLink to="/">
          <LinkIcon />
        </NavLink>
      </div>
    </Container>
  );
}
