import { NavLink } from "react-router-dom";
import "../styles/Project.scss";

export default function Project({ id, title, image }: any) {
  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-info">
        <h4 className="project-title">{title}</h4>
        <NavLink to={`/portfolioluisa/projects/${id}`}>
          <img src="circleright.svg" alt="circle right" />
        </NavLink>
      </div>
    </div>
  );
}
