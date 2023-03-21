import { NavLink } from "react-router-dom";
import "../styles/PagesMenu.scss";
import LogoSVG from "./icons/LogoSVG";
import { HashLink } from "react-router-hash-link";
import Menu from "./icons/Menu";
import LinkIcon from "./icons/LinkIcon";
import { Close } from "./icons/Close";

const PagesMenu = ({
  isMobile,
  activeMobileMenu,
  setActiveMobileMenu,
}: any) => {
  return (
    <>
      <div className="group-pages">
        <NavLink to={`/`} className={"logo"}>
          <LogoSVG />
        </NavLink>
        {isMobile && (
          <>
            <div
              className="menu-button"
              onClick={() => setActiveMobileMenu(true)}
            >
              <Menu />
            </div>
          </>
        )}
        <div
          className={`pages ${isMobile && activeMobileMenu ? "active" : ""}`}
        >
          <HashLink smooth to={`/#projects`} onClick={() => setActiveMobileMenu(false)}>
            projects
          </HashLink>
          <HashLink smooth to={`/#shots`} onClick={() => setActiveMobileMenu(false)}>
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
          {isMobile && activeMobileMenu && (
            <>
              <NavLink
                to={`/`}
                className={"return-button"}
                onClick={() => setActiveMobileMenu(false)}
              >
                <LinkIcon color="black" />
              </NavLink>
              <div
                className="close-button"
                onClick={() => setActiveMobileMenu(false)}
              >
                <Close />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PagesMenu;
