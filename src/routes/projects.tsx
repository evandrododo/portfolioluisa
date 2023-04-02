import { useContext, useEffect, useRef, useState } from "react";
import Lettering from "../components/Lettering";
import Project from "../components/Project";
import { ProjectContext, ProjectsState } from "../components/ProjectContext";
import useScrollSnap from "../hooks/useScrollSnap";
import "../styles/projects.scss";
import useOnScreen from "../utils";

export default function Projects() {
  const { projectHovered, setProjectHovered, projects, loading } =
    useContext<ProjectsState>(ProjectContext);
  const refShots = useRef<HTMLHeadingElement>(null);
  const refScrollShots = useRef(null);
  const refVulva = useRef<HTMLImageElement>(null);
  const refDeactiveMarker = useRef<HTMLDivElement>(null);
  
  useScrollSnap({ ref: refScrollShots, duration: 1500, delay: 0 });
  const isShotsTitleVisible = useOnScreen(refShots);
  const isVulvaVisible = useOnScreen(refVulva);
  const isDeactiveMarkerVisible = useOnScreen(refDeactiveMarker);

  useEffect(() => {
    console.log('project hovered', projectHovered)
    console.log("isShotsTitleVisible", isShotsTitleVisible, "isVulvaVisible", isVulvaVisible, "isDeactiveMarkerVisible", isDeactiveMarkerVisible)
    if (isShotsTitleVisible) {
      setProjectHovered('shots')
    } 
    if ((isVulvaVisible && !isShotsTitleVisible) || isDeactiveMarkerVisible) {
      setProjectHovered(null)
    }
  }, [isVulvaVisible, isDeactiveMarkerVisible, isShotsTitleVisible])

  const [displayBg, setDisplayBg] = useState(false);
  const [bgColor, setBgColor] = useState<any>(null);
  const [bgOpacity, setBgOpacity] = useState<any>(0);
  const [timeoutId, setTimeoutId] = useState<any>(null);

  useEffect(() => {
    clearTimeout(timeoutId);
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
      <div ref={refDeactiveMarker}>&nbsp;</div>
      <div className="projects-list" id="projects">
        {projects.map((project) => {
          if (project.display === false) {
            return;
          }
          return (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
              color={project.color}
              textColor={project.textColor}
              video={project.video}
            />
          );
        })}
      </div>
      <div className="shots" id="shots">
        <div
          className={`shots-title ${isShotsTitleVisible ? "visible" : ""}`}
          ref={refScrollShots}
        >
          <h3 ref={refShots}>Shots</h3>
        </div>
        <div
          className="shots-list"
          style={{ backgroundColor: isShotsTitleVisible ? "magenta" : "white" }}
        >
          <div className="shot">
            <div>
              <img src="/image28.png" alt="Vulva digital illustration" />
              <span className="caption">Digital Illustration, 2022</span>
            </div>
          </div>
          <div className="shot">
            <div>
              <img
                src="/relacionamento-abusivo.gif"
                alt="relacionamento abusivo"
                ref={refVulva}
              />
              <span className="caption">
                Digital Illustration and animation, 2016
              </span>
            </div>
          </div>
          <div className="shot cyanotype">
            <div className="img-container">
              <img src="/cyanotype1.png" alt="foto azul 1" />
              <img src="/cyanotype2.png" alt="foto azul 2" />
              <img src="/cyanotype3.png" alt="foto azul 3" />
            </div>
            <span className="caption full-width">Cianotype, 2012</span>
          </div>
          <div className="shot left">
            <div>
              <img src="/typedesign.png" alt="typedesign" />
              <span className="caption">Type design, 2015</span>
            </div>
          </div>
          <div className="shot">
            <div className="typography">
              <div className="img-container">
                <img
                  src="/shots_typo1.png"
                  alt="typography experimentation 1"
                />
                <img
                  src="/shots_typo2.png"
                  alt="typography experimentation 2"
                />
              </div>
              <span className="caption">Typography experimentation, 2015</span>
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
          <div className="shot">
            <div>
              <img src="/shots_last.png" alt="sticker" />
              <span className="caption">Sticker illustration, 2013</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
