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
    if (!projects || projects.length === 0) {
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
      console.log("bgOpacity", bgOpacity, loading);
      if (!loading) {
        setBgOpacity(0);
        console.log("bgOpacity", bgOpacity);
        console.log("hover false");
        const tid = setTimeout(() => {
          setDisplayBg(false);
        }, 2000);
        setTimeoutId(tid);
      }
    }
  }, [projectHovered]);

  useEffect(() => {}, [loading]);
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
      <div className="projects-list" id="projects">
        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
            color={project.color}
            textColor={project.textColor}
          />
        ))}
      </div>
      <div className="shots" id="shots">
        <div className="shots-title">
          <h3>Shots</h3>
        </div>
        <div className="shots-list">
          <div className="shot">
            <div>
              <img src="/image28.png" alt="Vulva digital illustration" />
              <span className="caption">Digital Illustration, 2022</span>
            </div>
          </div>
          <div className="shot">
            <div>
              <img src="/abusivo.png" alt="relacionamento abusivo" />
              <span className="caption">
                Digital Illustration and animation, 2016
              </span>
            </div>
          </div>
          <div className="shot">
            <div>
              <div className="shot" style={{ flexDirection: "row" }}>
                <img src="/cyanotype1.png" alt="foto azul 1" />
                <img src="/cyanotype2.png" alt="foto azul 2" />
                <img src="/cyanotype3.png" alt="foto azul 3" />
              </div>
              <span className="caption">Cianotype, 2012</span>
            </div>
          </div>
          <div className="shot left">
            <div>
              <img src="/typedesign.png" alt="typedesign" />
              <span className="caption">Type design, 2015</span>
            </div>
          </div>
          <div className="shot right">
            <div>
              <img src="/image13.png" alt="beautiful girl" />
              <span className="caption">Digital Illustration, 2021</span>
            </div>
          </div>
          <div className="shot left">
            <div>
              <img src="/tilda.png" alt="ser de luz" />
              <span className="caption">Digital illustration, 2021</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
