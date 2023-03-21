import Filter from "./Filter";
import PagesMenu from "./PagesMenu";
import "../styles/TopBar.scss";
import { ProjectContext } from "./ProjectContext";
import { useContext, useState } from "react";
import Menu from "./icons/Menu";
import { NavLink } from "react-router-dom";
import LinkIcon from "./icons/LinkIcon";
import { Close } from "./icons/Close";

export default function TopBar({ changeColor = false }) {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });
  const { projectHovered, projects } = useContext(ProjectContext);
  const [previousUrl, setPreviousUrl] = useState<string>("");
  const url = window.location.href+window.location.hash;
  console.log('url', url)
  // Url change
  if (url !== previousUrl) {
    setActiveMobileMenu(false);
    setPreviousUrl(url);
  }
  const urlArray = url.split("/");
  const projectIdUrl = urlArray[urlArray.length - 1];
  const projectActive = projects.find((project) => project.id === projectIdUrl);

  const projectHover = projects.find(
    (project) => project.id === projectHovered
  );
  const className = changeColor && projectHovered ? "topbar active" : "topbar";

  const style: any = {};
  if (projectActive) {
    style.backgroundColor = projectActive ? projectActive.color : "transparent";
    style.color = projectActive.textColor || "white";
  }
  if (projectHover) {
    style.color = projectHover.textColor;
  }

  return (
    <div className={className} style={style}>
      <PagesMenu
        isMobile={isMobile}
        activeMobileMenu={activeMobileMenu}
        setActiveMobileMenu={setActiveMobileMenu}
      />
      <Filter />
      
    </div>
  );
}
