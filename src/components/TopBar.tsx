import Filter from "./Filter";
import PagesMenu from "./PagesMenu";
import "../styles/TopBar.scss";
import { ProjectContext } from "./ProjectContext";
import { useContext } from "react";

export default function TopBar({ changeColor = false}) {
  const { projectHovered, projects } = useContext(ProjectContext);
  // get project id from url
  const url = window.location.href;
  const urlArray = url.split('/');
  const projectIdUrl = urlArray[urlArray.length - 1];
  const projectActive = projects.find((project) => project.id === projectIdUrl);
console.log('projectActive', projectActive)

  const projectHover = projects.find((project) => project.id === projectHovered);
  const className = changeColor && projectHovered ? 'topbar active' : 'topbar';
  
  const style: any = {};
  if (projectActive) {
    style.backgroundColor = projectActive ? projectActive.color : 'transparent';
    style.color = projectActive.textColor || 'white';
  }
  if (projectHover) {
    style.color = projectHover.textColor;
  }
  return (
    <div className={className} style={style}>
      <PagesMenu />
      <Filter />
    </div>
  );
}
