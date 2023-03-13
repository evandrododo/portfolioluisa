import Filter from "./Filter";
import PagesMenu from "./PagesMenu";
import "../styles/TopBar.scss";
import { ProjectContext } from "./ProjectContext";
import { useContext } from "react";

export default function TopBar({ changeColor = false}) {
  const { activeProject } = useContext(ProjectContext);
  const className = changeColor && activeProject ? 'topbar active' : 'topbar';
  return (
    <div className={className}>
      <PagesMenu />
      <Filter />
    </div>
  );
}
