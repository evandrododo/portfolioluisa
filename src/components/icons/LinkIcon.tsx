const LinkIcon = ({
  color = "currentColor",
  className = "",
  context = "",
  style = {},
}: any) => {
  switch (context) {
    //left
    case "left":
      return (
        <svg
          width="64"
          height="65"
          viewBox="0 0 64 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="61.4712"
            y="62.707"
            width="58.9423"
            height="60.414"
            rx="29.4711"
            transform="rotate(-180 61.4712 62.707)"
            stroke={color}
            stroke-width="4.58601"
          />
          <path
            d="M15.2159 31.086C14.4349 31.8671 14.4349 33.1334 15.2159 33.9145L27.9438 46.6424C28.7249 47.4234 29.9912 47.4234 30.7723 46.6424C31.5533 45.8613 31.5533 44.595 30.7723 43.814L19.4586 32.5002L30.7723 21.1865C31.5533 20.4055 31.5533 19.1392 30.7723 18.3581C29.9912 17.5771 28.7249 17.5771 27.9438 18.3581L15.2159 31.086ZM47.3696 30.5002L16.6301 30.5002L16.6301 34.5002L47.3696 34.5002L47.3696 30.5002Z"
            fill={color}
          />
        </svg>
      );
    //lettering
    case "lettering":
      return (
        <svg
          width="64"
          height="65"
          viewBox="0 0 64 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
        >
          <rect
            x="2.76469"
            y="2.29301"
            width="58.9423"
            height="60.414"
            rx="29.4711"
            stroke={color}
            stroke-width="4.58601"
          />
          <path
            d="M49.0199 33.9142C49.801 33.1332 49.801 31.8668 49.0199 31.0858L36.292 18.3579C35.511 17.5768 34.2446 17.5768 33.4636 18.3579C32.6825 19.1389 32.6825 20.4052 33.4636 21.1863L44.7773 32.5L33.4636 43.8137C32.6825 44.5948 32.6825 45.8611 33.4636 46.6421C34.2446 47.4232 35.511 47.4232 36.292 46.6421L49.0199 33.9142ZM16.8662 34.5L47.6057 34.5L47.6057 30.5L16.8662 30.5L16.8662 34.5Z"
            fill={color}
          />
        </svg>
      );
    // menorzinho
    case "project":
      return (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
        >
          <rect
            x="2.29301"
            y="2.29301"
            width="75.414"
            height="75.414"
            rx="37.707"
            stroke={color}
            stroke-width="4.58601"
          />
          <path
            d="M60.7692 41.4137C61.5503 40.6327 61.5503 39.3663 60.7692 38.5853L48.0413 25.8574C47.2602 25.0763 45.9939 25.0763 45.2129 25.8574C44.4318 26.6384 44.4318 27.9048 45.2129 28.6858L56.5266 39.9995L45.2129 51.3132C44.4318 52.0943 44.4318 53.3606 45.2129 54.1416C45.9939 54.9227 47.2602 54.9227 48.0413 54.1416L60.7692 41.4137ZM20.6453 41.9995L59.355 41.9995L59.355 37.9995L20.6453 37.9995L20.6453 41.9995Z"
            fill={color}
          />
        </svg>
      );
    case "menu":
    default:
      return (
        <svg
          width="112"
          height="112"
          viewBox="0 0 112 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          style={style}
        >
          <rect
            x="2.29301"
            y="2.29301"
            width="107.138"
            height="107.138"
            rx="53.5688"
            stroke={color}
            strokeWidth="4.58601"
          />
          <path
            d="M85.3239 58.2939C86.6671 56.9507 86.6671 54.7729 85.3239 53.4297L63.4349 31.5408C62.0917 30.1976 59.914 30.1976 58.5707 31.5408C57.2275 32.884 57.2275 35.0618 58.5707 36.405L78.0276 55.8618L58.5707 75.3186C57.2275 76.6618 57.2275 78.8396 58.5707 80.1828C59.914 81.526 62.0917 81.526 63.435 80.1828L85.3239 58.2939ZM28.8319 59.3013L82.8918 59.3013L82.8918 52.4223L28.8319 52.4223L28.8319 59.3013Z"
            fill={color}
          />
        </svg>
      );
  }
};

export default LinkIcon;
