import { useContext, useEffect, useState } from "react";
import Lettering from "../components/Lettering";
import Project from "../components/Project";
import { ProjectContext, ProjectsState } from "../components/ProjectContext";
import "../styles/projects.scss";


export default function Projects() {
  const { projectHovered, projects, loading } =
    useContext<ProjectsState>(ProjectContext);
  const [displayBg, setDisplayBg] = useState(false);
  const [bgColor, setBgColor] = useState<any>(null);
  const [bgOpacity, setBgOpacity] = useState<any>(0);
  const [timeoutId, setTimeoutId] = useState<any>(null);

  useEffect(() => {
    clearTimeout(timeoutId);
    console.log("timeoutId", timeoutId);
    if(!projects || projects.length === 0) {
      return;
    }
      
    if (projectHovered) {
      const projectColor = projects.find(
        (project) => project.id === projectHovered
      ).color;
      setBgColor(projectColor);
      setDisplayBg(true);
      setBgOpacity(0);
      const tid = setTimeout(() => {
        setBgOpacity(1);
      }, 100);
      setTimeoutId(tid);
    } else {
        console.log('bgOpacity', bgOpacity, loading)
      if (!loading) {
        setBgOpacity(0);
        console.log('bgOpacity', bgOpacity)
      console.log('hover false')
        const tid = setTimeout(() => {
          setDisplayBg(false);
        }, 2000);
        setTimeoutId(tid);
      }
    }
  }, [projectHovered]);

  useEffect(() => {
  }, [loading]);
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
