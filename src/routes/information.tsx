import { Container } from "../components/Container";
import Instagram from "../components/icons/Instagram";
import Linkedin from "../components/icons/Linkedin";
import LinkIcon from "../components/icons/LinkIcon";
import "../styles/information.scss";

export default function Information() {
  return (
    <Container>
      <div className="information">
        <div className="photo">
          <img src="luisakuhn.jpg" alt="Luisa Kuhn" />
        </div>
        <div className="text">
          <p className="description">
            Meet Luisa, a designer who brings a unique perspective to every
            project she works on thanks to her diverse range of artistic skills.
            While she has a deep passion for UX design, Luisa has also worked
            with video art, book production, ceramics, and other hands-on
            crafts. This combination of artistic pursuits allows her to bring a
            fresh and creative approach to every project she takes on.
          </p>
          <p className="description">
            Luisa's approach to design is centered around the user, with a deep
            understanding of their needs and motivations. She believes that
            design should be accessible and inclusive, and is committed to
            creating solutions that are both beautiful and intuitive. Her
            dedication to user-centered design ensures that every detail is
            carefully considered, resulting in experiences that are not only
            visually stunning but also highly functional. Luisa's artistic
            skills allow her to bring ideas to life in a way that engages and
            delights users.
          </p>
          <p className="description">
            What makes Luisa truly special is her ability to bring a fresh and
            creative perspective to every project she takes on, thanks to her
            diverse range of artistic skills. Her dedication to user-centered
            design ensures that every detail is carefully considered, resulting
            in experiences that are not only visually stunning but also highly
            functional. Luisa's hands-on approach to art and design allows her
            to create experiences that engage and delight users, making her a
            valuable asset to any creative team.
          </p>
        </div>
      </div>
      <div className="contactinfo">
        <div className="socialmedia">
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
        </div>
        <div className="email">
          <a href="mailto:luisakuhn@gmail.com">
            luisakuhn@gmail.com <LinkIcon className="linkemail" />
          </a>
        </div>
        <div className="phone">
          <a href="tel:+5551984107790">+55 51 98410-7790</a>
        </div>
      </div>
    </Container>
  );
}
