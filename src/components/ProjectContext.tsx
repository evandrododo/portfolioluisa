import { createContext, useState, useEffect } from "react";

export interface ProjectsState {
  projects: any[];
  loading: boolean;
  projectHovered: any;
  setProjectHovered: (id: any) => void;
}

export const ProjectContext = createContext({
  projects: [],
  loading: true,
  projectHovered: null,
  setProjectHovered: (id: any) => {},
} as ProjectsState);

const initialProjects: any[] = [
  {
    id: "project1",
    title: "Musical Ceramics",
    image: "/udu.png",
    color: "blue",
    details: {
      sections: [
        {
          title: "Udu",
          description: `Percussion instrument, 2022 - Brazil\n \
           Dimensions: 26cm x 21cm x 26cm `,
          image: "/udu1.jpg",
        },
        {
          title: "Maraca",
          description: `Percussion instrument, 2022 - Brazil
            Dimensions: 18cm x 11cm x 18cm
          `,
          image: ["/maraca1.jpg", "/maraca2.jpg"],
          containerImageStyle: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "1rem 0",
          },
        },
      ],
    },
  },
  {
    id: "sculpture",
    title: "Sculpture",
    image: "./sculpture.png",
    color: "#FF00FF",
    details: {
      sections: [
        {
          title: "Vulva",
          description: `Illustration and sculpture in ceramics, 2022 - Brazil\n \
           _Ode. Looking for balance_`,
          image: [
            {
              src: "/vulva1.png",
              customStyle: {
                width: "64.8%",
                marginRight: "0.9%",
              },
            },
            {
              src: "/vulva2.png",
              customStyle: {
                width: "34.3%",
              },
            },
            {
              src: "/vulva3.png",
              caption: "Dimensions: 33 x 15cm",
              customStyle: {
                width: "100%",
              },
            },
          ],
        },
        {
          title: "Gynandrus Plant",
          description: `Sculpture, 2022 - Brazil
            Dimensions: 29 x 30 x 27 cm
          `,
          image: "/gynandrus.png",
        },
      ],
    },
  },
  {
    id: "naturaldye",
    title: "Natural Dye",
    image: "./naturaldye.jpg",
    color: "#FF0000",
    details: {
      sections: [
        {
          title: "Wall flags (in progress)",
          description: "Fabric dye with natural ink from plants and insects",
          image: ["/flag1.png"],
          containerImageStyle: {
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
          },
        },
        {
          image: ["/flag2.png"],
          containerImageStyle: {
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            marginTop: "-15%",
          },
        },
        {
          image: ["/flag3.png"],
          containerImageStyle: {
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            marginTop: "-15%",
          },
        },
        {
          image: [
            "/flag4.png",
            {
              src: "/flag5.png",
              customStyle: {
                margin: "0 2rem",
              },
            },
            "/flag6.png",
          ],
          containerImageStyle: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "5rem 0",
          },
        },
        {
          image: ["/flag7.png"],
          containerImageStyle: {
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          },
        },
        {
          image: [
            "/flag8_wide.png",
            {
              src: "/flag9.png",
              customStyle: {
                margin: "0 2rem",
              },
            },
          ],
          containerImageStyle: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "5rem 0",
          },
        },
      ],
    },
  },
  {
    id: "utilityceramics",
    title: "Utility Ceramics",
    image: "./utilityceramics.png",
    color: "#FFFF00",
    textColor: "#000000",
    details: {
      sections: [
        {
          image: "/utilityceramics1.png",
        },
        {
          image: "/utilityceramics2.png",
        },
        {
          image: "/utilityceramics3.png",
        },
      ],
    },
  },
  {
    id: "videoart",
    title: "Video Art",
    image: "./videoart.png",
    color: "#00FFFF",
    textColor: "#000000",
    details: {
      sections: [
        {
          title: "The illusion run",
          description: `Written and directed by Luisa Kuhn`,
          embedVideo: (
            <>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/216410019?h=5f28440f25"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </>
          ),
        },
        {
          title: "Lie of the day",
          description: "Written and directed by Luisa Kuhn and Luiza Schneider",
          embedVideo: (
            <>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/166593232?h=7ccca5adea"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </>
          ),
        },
        {
          title: "Feel it",
          description: "Written and directed by Luisa Kuhn",
          embedVideo: (
            <>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
              style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                src="https://www.youtube.com/embed/89YOI9vFoUc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              </div>
            </>
          ),
        },
      ],
    },
  },
];

export const ProjectProvider = ({ children }: any) => {
  const [projects, setProjects] = useState(initialProjects);
  const [projectHovered, setProjectHovered] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchProjects = async () => {
    //   const response = await fetch("/api/projects");
    //   const data = await response.json();
    //   setProjects(data);
      setLoading(false);
    // };
    // fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{ projects, loading, projectHovered, setProjectHovered }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
