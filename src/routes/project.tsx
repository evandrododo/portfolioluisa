import { useContext, useEffect } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { Container } from "../components/Container";
import LinkIcon from "../components/icons/LinkIcon";
import { ProjectContext } from "../components/ProjectContext";
import "../styles/projects.scss";

export async function loaderProject({ params }: any) {
  const id = params.id;
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
    <>
      <h1
        style={{
          backgroundColor: project.color,
          color: project.textColor || "white",
          padding: "3em 0 2em",
          fontWeight: 600,
        }}
        className="project-title"
      >
        <Container className="project-detail">{project.title}</Container>
      </h1>
      <Container className="project-detail" id={id}>
        <div>
          {project.details &&
            project.details.sections.map((section: any) => (
              <div key={section.title} className={section.containerSectionClass ? section.containerSectionClass : "section"}>
                {section.title && <h2>{section.title}</h2>}
                {section.description && (
                  <div className="description">{section.description}</div>
                )}
                {section.image && typeof section.image !== "string" && (
                  <div
                    style={section.containerImageStyle}
                    className={`${section.containerImageClass || ''} container-image`}
                  >
                    {section.image.map((image: any) => {
                      if (typeof image === "object") {
                        return (
                          <>
                            <div
                              className="caption-container"
                              style={image.captionContainerStyle}
                            >
                              <img
                                src={image.src}
                                alt={section.title}
                                style={image.customStyle}
                              />
                              {image.caption && (
                                <div className="caption">{image.caption}</div>
                              )}
                            </div>
                          </>
                        );
                      }
                      return <img src={image} alt={section.title} />;
                    })}
                  </div>
                )}
                {section.image && typeof section.image === "string" && (
                  <img src={section.image} alt={section.title} />
                )}
                {section.embedVideo}
              </div>
            ))}
        </div>
        <div className="center">
          <NavLink to={`/#${id}`}>
            <LinkIcon context="left" />
          </NavLink>
        </div>
      </Container>
    </>
  );
}
