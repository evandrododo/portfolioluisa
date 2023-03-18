import Filter from "./Filter";
import PagesMenu from "./PagesMenu";
import "../styles/TopBar.scss";
import { ProjectContext } from "./ProjectContext";
import { useContext } from "react";

export default function TopBar({ changeColor = false}) {
  const { projectHovered } = useContext(ProjectContext);
  const className = changeColor && projectHovered ? 'topbar active' : 'topbar';
  return (
    <div className={className}>
      <PagesMenu />
      <Filter />
    </div>
  );
}
