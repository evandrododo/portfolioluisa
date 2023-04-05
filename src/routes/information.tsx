import { Container } from "../components/Container";
import Behance from "../components/icons/Behance";
import Call from "../components/icons/Call";
import Download from "../components/icons/Download";
import Instagram from "../components/icons/Instagram";
import Linkedin from "../components/icons/Linkedin";
import Location from "../components/icons/Location";
import Mail from "../components/icons/Mail";
import Vimeo from "../components/icons/Vimeo";
import "../styles/information.scss";

export default function Information() {
  return (
    <Container>
      <div className="information">
        <div className="photo">
          <img src="luisakuhn.jpg" alt="Luisa Kuhn" />
        </div>
        <div className="sideinfo">
          <div className="text">
            <h2>Hi!</h2>
            <p>I am an artist and designer.</p>
            <p>Feel free to get in touch :)</p>
          </div>
          <div className="contact-info">
            <div className="location">
              <Location />
              <span>Brazil</span>
            </div>
            <div className="email">
              <Mail />
              <a href="mailto:luisakuhn@gmail.com">luisakuhn@gmail.com</a>
            </div>
            <div className="phone">
              <Call />
              <a href="tel:+5551984107790">+55 51 98410-7790</a>
            </div>
          </div>
          <div className="socialmedia">
            <a
              href="https://www.behance.net/luisakuhn/"
              target="_blank"
              rel="noreferrer"
            >
              <Behance />
            </a>
            <a
              href="https://www.instagram.com/luisa_kuhn/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/in/luisakuhn/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="linkedin" />
            </a>
            <a
              href="https://www.vimeo.com/luisakuhn/"
              target="_blank"
              rel="noreferrer"
            >
              <Vimeo />
            </a>
          </div>
          <div className="download">
            <a href="luisa_kuhn_curriculum.pdf" download>
              Download Curriculum
              <Download />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
