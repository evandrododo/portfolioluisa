const Call = ({ color = "currentColor", className = "" }: any) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_423_857)">
        <path
          d="M25.992 14.2389C25.92 15.8139 24.8336 17.972 22.7296 20.7099C20.5536 23.5707 18.7136 25.0002 17.208 25.0002C16.2752 25.0002 15.4864 24.1296 14.8416 22.3882C14.4112 20.7923 13.9808 19.1948 13.5504 17.5988C13.072 15.8575 12.5584 14.9868 12.0096 14.9868C11.8896 14.9868 11.4704 15.2421 10.7536 15.7493L10 14.7655C10.7904 14.0645 11.568 13.3618 12.3344 12.6592C13.3888 11.7384 14.1792 11.2554 14.7056 11.2054C15.9504 11.0842 16.7168 11.9452 17.0048 13.7883C17.3152 15.7767 17.5312 17.0141 17.6512 17.497C18.0096 19.1463 18.4048 19.9701 18.8368 19.9701C19.1712 19.9701 19.6752 19.4354 20.3456 18.3645C21.016 17.2935 21.3744 16.4794 21.4224 15.9205C21.5184 14.9965 21.1584 14.5345 20.3456 14.5345C19.9632 14.5345 19.568 14.6234 19.1616 14.7995C19.9472 12.1956 21.4496 10.9308 23.6672 11.0035C25.312 11.0519 26.0864 12.1309 25.992 14.2389Z"
          fill={color}
        />
      </g>
      <rect
        x="1"
        y="1"
        width="34"
        height="34"
        rx="17"
        stroke={color}
        stroke-width="2"
      />
      <defs>
        <clipPath id="clip0_423_857">
          <rect
            width="16"
            height="14"
            fill="white"
            transform="translate(10 11)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Call;