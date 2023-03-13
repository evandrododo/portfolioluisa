import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Project.scss";
import LinkIcon from "./LinkIcon";
import { ProjectContext } from "./ProjectContext";

export default function Project({ id, title, image, color }: any) {
  const { setActiveProject } = useContext(ProjectContext);
  const [pointerInfo, setPointerInfo] = useState(false);
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const [infoOpacity, setInfoOpacity] = useState<any>(0);

  const handleActiveProject = (id: any) => {
    clearTimeout(timeoutId);
    console.log("clearTimeout executado:", timeoutId);
    if (id !== null) {
      setPointerInfo(true);
      setInfoOpacity(0);
      const tid = setTimeout(() => {
        console.log("setInfoOpacity(1): setTimeout executado", tid);
        setInfoOpacity(1);
      }, 1000);
      console.log("setTimeout para setInfoOpacity(1) definido:", tid);
      setTimeoutId(tid);
    } else {
      setInfoOpacity(0);
      const tid = setTimeout(() => {
        console.log("pointerinfo(false): setTimeOut executado");
        setPointerInfo(false);
      }, 2000);
      console.log("setTimeout para pointerinfo(false) definido:", tid);
      setTimeoutId(tid);
    }

    setActiveProject(id);
  };
  return (
    <div className="project">
      <div className="project-image">
        <NavLink
          to={`/portfolioluisa/projects/${id}`}
          style={{ display: "block" }}
        >
          <img
            src={image}
            alt={title}
            style={{
              outlineColor: pointerInfo && infoOpacity ? color : "transparent",
            }}
            onPointerEnter={() => handleActiveProject(id)}
            onPointerOut={() => handleActiveProject(null)}
          />
        </NavLink>
      </div>
      <NavLink
        to={`/portfolioluisa/projects/${id}`}
        style={{ display: "block" }}
      >
        <div
          className="project-info"
          style={{
            opacity: infoOpacity,
            pointerEvents: pointerInfo ? "all" : "none",
          }}
          onMouseOver={() => handleActiveProject(id)}
          onMouseLeave={() => handleActiveProject(null)}
        >
          <h4 className="project-title">{title}</h4>
          <LinkIcon color="white" />
        </div>
      </NavLink>
    </div>
  );
}
