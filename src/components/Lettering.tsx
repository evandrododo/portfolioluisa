import { NavLink } from "react-router-dom";
import "../styles/Lettering.scss";

export default function Lettering() {
  return (
    <div className="fixed-background">
      <div className="line artist">
        <div>Artist</div>
        <div>&</div>
      </div>
      <div className="line designer">
        <div>Designer</div>
      </div>
      <div className="line contact">
        <NavLink to="/portfolioluisa/information">
          <div>contact</div>
          <img src="circleright.svg" alt="circle right" />
        </NavLink>
      </div>
    </div>
  );
}
