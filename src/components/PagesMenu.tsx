import { NavLink } from "react-router-dom";
import "../styles/PagesMenu.scss";

const PagesMenu = () => {
  return (
    <div className="group-pages">
      <img src="luisalogo.svg" className="logo" alt="Luisa Kuhn" />
      <div className="pages">
        <NavLink
          to={`/portfolioluisa/`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          projects
        </NavLink>
        <NavLink
          to={`/portfolioluisa/shots`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          shots
        </NavLink>
        <NavLink
          to={`/portfolioluisa/information`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          information
        </NavLink>
      </div>
    </div>
  );
};

export default PagesMenu;
