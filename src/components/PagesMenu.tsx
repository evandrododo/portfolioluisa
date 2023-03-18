import { NavLink } from "react-router-dom";
import "../styles/PagesMenu.scss";
import LogoSVG from "./icons/LogoSVG";

const PagesMenu = () => {
  return (
    <div className="group-pages">
      <LogoSVG color="currentColor"/>
      <div className="pages">
        <NavLink
          to={`/`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          projects
        </NavLink>
        <NavLink
          to={`/shots`}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          shots
        </NavLink>
        <NavLink
          to={`/information`}
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
