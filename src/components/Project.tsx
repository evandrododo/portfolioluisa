import { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useScrollSnap from "../hooks/useScrollSnap";
import "../styles/Project.scss";
import useOnScreen from "../utils";
import LinkIcon from "./icons/LinkIcon";
import { ProjectContext } from "./ProjectContext";

export default function Project({
  id,
  title,
  image,
  color,
  video,
  textColor = "white",
}: any) {
  const { setProjectHovered, projectHovered } = useContext(ProjectContext);
  const [pointerInfo, setPointerInfo] = useState(false);
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const [infoOpacity, setInfoOpacity] = useState<any>(0);

  const ref = useRef<HTMLDivElement>(null);
  useScrollSnap({ ref: ref, duration: 500, delay: 0 });
  const refTitle = useRef<HTMLDivElement>(null);
  const isImgVisible = useOnScreen(ref, {
    rootMargin: "-100px 0px 0px 0px",
    threshold: 1,
  });
  const isTitleVisible = useOnScreen(refTitle, {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
  });

  const isMobile = window.innerWidth < 1200;
  const isHovered = projectHovered === id;

  useEffect(() => {
    console.log(id, "isImgVisible", isImgVisible, "isTitleVisible", isTitleVisible)
    if( isImgVisible && isTitleVisible && !isMobile && projectHovered === 'shots') {
      handleActiveProject("");
    }
    if (isImgVisible && isTitleVisible && isMobile) {
      handleActiveProject(id);
    }
  }, [isImgVisible, isTitleVisible]);

  const handleActiveProject = (id: any) => {
    clearTimeout(timeoutId);
    if (id !== null) {
      setPointerInfo(true);
      setInfoOpacity(1);
    } else {
      setInfoOpacity(0);
      const tid = setTimeout(() => {
        setPointerInfo(false);
      }, 2000);
      setTimeoutId(tid);
    }

    setProjectHovered(id);
  };

  return (
    <div className="project" id={id}>
      <div className="project-image" ref={ref}>
        <NavLink to={`/projects/${id}`} style={{ display: "block" }}>
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              style={{
                outlineColor: color,
              }}
              onMouseOver={() => handleActiveProject(id)}
              onMouseOut={() => handleActiveProject(null)}
            />
          ) : (
            <img
              src={image}
              alt={title}
              style={{
                outlineColor: color,
              }}
              onMouseOver={() => handleActiveProject(id)}
              onMouseOut={() => handleActiveProject(null)}
            />
          )}
        </NavLink>
      </div>
      <NavLink to={`/projects/${id}`} className="title-link">
        <div
          className="project-info"
          style={{
            opacity: infoOpacity,
            pointerEvents: pointerInfo ? "all" : "none",
          }}
          onMouseOver={() => handleActiveProject(id)}
          onMouseOut={() => handleActiveProject(null)}
        >
          <h4
            className="project-title"
            ref={refTitle}
            style={{
              color: textColor,
              opacity: isImgVisible && isHovered ? 1 : 0,
            }}
          >
            {title}
          </h4>
          <LinkIcon
            color={textColor}
            context="project"
            style={{
              opacity: isImgVisible && isHovered ? 1 : 0,
            }}
          />
        </div>
      </NavLink>
    </div>
  );
}
