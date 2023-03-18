import { useContext, useEffect, useState } from "react";
import Lettering from "../components/Lettering";
import Project from "../components/Project";
import { ProjectContext } from "../components/ProjectContext";
import "../styles/projects.scss";

const projects: any[] = [
  {
    id: "project1",
    title: "Musical Ceramics",
    image: "/udu.png",
    color: "blue",
  },
  {
    id: "sculpture",
    title: "Sculpture",
    image: "/sculpture.png",
    color: "#FF00FF",
  },
];

export default function Projects() {
  const { activeProject } = useContext(ProjectContext);
  const [displayBg, setDisplayBg] = useState(false);
  const [bgColor, setBgColor] = useState<any>(null);
  const [bgOpacity, setBgOpacity] = useState<any>(0);
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log("activeProject", activeProject);
    clearTimeout(timeoutId);
    console.log('timeoutId', timeoutId)
    if (activeProject) {
      const projectColor = projects.find(
        (project) => project.id === activeProject
      ).color;
      setBgColor(projectColor);
      setDisplayBg(true);
      setBgOpacity(0);
      const tid = setTimeout(() => {
        setBgOpacity(1);
      }, 100);
      setTimeoutId(tid);
    } else {
      if(loaded) {

      setBgOpacity(0);
      const tid = setTimeout(() => {
        setDisplayBg(false);
      }, 2000);
      setTimeoutId(tid);
      }
    }
  }, [activeProject]);

  useEffect(() => {
    setLoaded(true);
  }, [])
  return (
    <>
      <Lettering />
      <div
        className="bg-color"
        style={{
          display: displayBg ? "block" : "none",
          backgroundColor: bgColor,
          opacity: bgOpacity,
        }}
      ></div>
      <div className="projects-list">
        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
            color={project.color}
          />
        ))}
      </div>
    </>
  );
}
