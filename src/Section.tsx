import "./Section.css";

interface SectionProps {
  color: string;
  title: string;
  link?: string;
  children?: React.ReactNode;
}

const Section = ({ color, title, link, children }: SectionProps) => {
  return (
    <section style={{ backgroundColor: color }} className="section">
      <div className="top-section">
      <h2>{title}</h2>
      {link ? (
        <a className="active-section">
          <img src="/circleright.svg" />
        </a>
      ) : (
        <a className="active-section">
          <img src="/arrowdown.svg" />
        </a>
      )}
      </div>
    </section>
  );
};

export default Section;
