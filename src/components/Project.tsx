import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Project.scss";
import LinkIcon from "./icons/LinkIcon";
import { ProjectContext } from "./ProjectContext";

export default function Project({
  id,
  title,
  image,
  color,
  textColor = "white",
}: any) {
  const { setProjectHovered } = useContext(ProjectContext);
  const [pointerInfo, setPointerInfo] = useState(false);
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const [infoOpacity, setInfoOpacity] = useState<any>(0);

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
    <div className="project">
      <div className="project-image">
        <NavLink to={`/projects/${id}`} style={{ display: "block" }}>
          <img
            src={image}
            alt={title}
            style={{
              outlineColor: color,
            }}
            onMouseOver={() => handleActiveProject(id)}
            onMouseOut={() => handleActiveProject(null)}
          />
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
            style={{
              color: textColor,
            }}
          >
            {title}
          </h4>
          <LinkIcon color={textColor} />
        </div>
      </NavLink>
    </div>
  );
}
