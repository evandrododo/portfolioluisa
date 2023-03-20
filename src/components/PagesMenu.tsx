import { NavLink } from "react-router-dom";
import "../styles/PagesMenu.scss";
import LogoSVG from "./icons/LogoSVG";
import { HashLink } from 'react-router-hash-link';

const PagesMenu = () => {
  return (
    <div className="group-pages">
      <NavLink
        to={`/`}
        className={"logo"}
      >
        <LogoSVG/>
      </NavLink>
      <div className="pages">
        <HashLink
          smooth
          to={`/#projects`}
        >
          projects
        </HashLink>
        <HashLink
          smooth
          to={`/#shots`}
        >
          shots
        </HashLink>
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
