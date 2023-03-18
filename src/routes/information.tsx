import Instagram from "../components/icons/Instagram";
import Linkedin from "../components/icons/Linkedin";
import LinkIcon from "../components/icons/LinkIcon";
import "../styles/information.scss";

export default function Information() {
  return (
    <>
      <div className="information">
        <div className="photo">
          <img src="luisakuhn.jpg" alt="Luisa Kuhn" />
        </div>
        <div className="text">
          <p className="description">
            Luisa Kuhn é uma profissional altamente criativa e inovadora, capaz
            de aplicar seus conhecimentos em artes visuais no processo de design
            de interfaces de usuário. Além de possuir habilidades em design de
            interação e experiência do usuário, esta designer tem um olhar único
            e sensível para as texturas, padrões, cores e formas.
          </p>
          <p className="description">
            Sua capacidade de visualizar e criar padrões estéticos únicos é um
            ativo valioso no processo de desenvolvimento de interfaces de
            usuário. A designer pode usar sua experiência em artes visuais para
            projetar interfaces intuitivas e agradáveis, que são tanto
            funcionais quanto visualmente atraentes. Através da aplicação de
            técnicas de cerâmica e tecido, ela pode criar mockups e protótipos
            para testar ideias e conceitos, permitindo que o processo de design
            iterativo progrida rapidamente.
          </p>
          <p className="description">
            A UX designer com experiência em artes é uma profissional altamente
            versátil e adaptável, capaz de trabalhar em diferentes projetos e
            equipes, e sua abordagem única e criativa para o design é um grande
            trunfo em qualquer equipe de desenvolvimento.
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
    </>
  );
}
