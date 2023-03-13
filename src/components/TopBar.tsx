import Filter from "./Filter";
import PagesMenu from "./PagesMenu";
import "../styles/TopBar.scss";
import { ProjectContext } from "./ProjectContext";
import { useContext } from "react";

export default function TopBar() {
  const { activeProject } = useContext(ProjectContext);
  return (
    <div className={activeProject ? 'topbar active' : 'topbar'}>
      <PagesMenu />
      <Filter />
    </div>
  );
}
