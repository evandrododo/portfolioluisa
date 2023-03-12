import Filter from "./Filter";
import PagesMenu from "./PagesMenu";
import "../styles/TopBar.scss";

export default function TopBar() {
  return (
    <div className="topbar">
      <PagesMenu />
      <Filter />
    </div>
  );
}
