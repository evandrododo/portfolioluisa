import "./PagesMenu.css";

const PagesMenu = () => {
  return (
    <div className="group-pages">
      <img src="luisalogo.svg" className="logo" alt="Luisa Kuhn" />
      <div className="pages">
        <a href="#projects">projects</a>
        <a href="#shots">shots</a>
        <a href="#information">information</a>
      </div>
    </div>
  );
};

export default PagesMenu;
