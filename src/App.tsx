import "./App.css";
import Filter from "./components/Filter";
import PagesMenu from "./components/PagesMenu";

function App() {
  return (
    <>
      <div className="topbar">
        <PagesMenu />
        <Filter />
      </div>
      <div className="fixed-background">
        <div className="line artist">
          <div>Artist</div>
          <div>&</div>
        </div>
        <div className="line designer">
          <div>Designer</div>
        </div>
        <div className="line contact">
          <div>contact</div>
          <img src="circleright.svg" alt="circle right" />
        </div>
      </div>
    </>
  );
}

export default App;
