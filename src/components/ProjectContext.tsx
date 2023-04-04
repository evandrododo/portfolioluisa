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
    id: "ceramics",
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
          containerSectionClass: "margin-bottom",
        },
        {
          title: "Maraca",
          description: `Percussion instrument, 2022 - Brazil
            Dimensions: 18cm x 11cm x 18cm
          `,
          image: ["/maraca1.jpg", "/maraca2.jpg"],
          containerImageClass: "image-row",
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
          description: (
            <>
              Illustration and sculpture in ceramics, 2022 - Brazil
              <br />
              <i>Ode. Looking for balance</i>
            </>
          ),
          image: [
            {
              src: "/vulva1.png",
              captionContainerStyle: {
                width: "64.8%",
                marginRight: "0.9%",
              },
            },
            {
              src: "/vulva2.png",
              captionContainerStyle: {
                width: "34.3%",
              },
            },
          ],
        },
        {
          image: [
            {
              src: "/vulva3.png",
              caption: "Dimensions: 33 x 15cm",
              customStyle: {
                width: "100%",
              },
            },
          ],
          containerSectionClass: "section margin-bottom",
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
    id: "naturaldyeing",
    title: "Natural Dyeing",
    image: "./naturaldye.jpg",
    color: "#FF0000",
    details: {
      sections: [
        {
          title: "Wall flags (in progress)",
          description: "Fabric dye with natural ink from plants and insects",
          image: [
            {
              src: "/flag1.png",
              caption: "Tye dye with cochineal pigment, 65x90cm",
            },
          ],
          containerImageStyle: {
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
          },
        },
        {
          image: [
            {
              src: "/flag2.png",
              caption: "Sunlight with saffron and anatto pigment 75 x 120cm",
            },
          ],
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
          image: [
            {
              src: "/flag3.png",
              caption: "Forest with alfafa pigment 65 x 90cm",
            },
          ],
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
            {
              src: "/flag4.png",
              caption: "Sunlight with saffron and anatto pigment, 45 x 94cm",
              customStyle: {
                marginRight: "2rem",
              },
            },
            {
              src: "/flag5.png",
              customStyle: {
                marginRight: "2rem",
              },
              caption: "Burning sun with anatto pigment, 45 x 80cm",
            },
            {
              src: "/flag6.png",
              caption: "Brazil with saffron and alfafa pigment, 40 x 80cm",
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
        {
          image: [
            {
              src: "/flag7.png",
              caption:
                "Heart in fire with cochineal and anatto pigment, 40 x 80cm",
            },
          ],
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
            {
              src: "/flag8_wide.png",
              caption: "Save the bears with alfafa pigment, 65x90cm",
            },
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
            alignItems: "start",
            margin: "5rem 0",
          },
          containerImageClass: "save-the-bears",
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
          image: [
            {
              src: "/utilityceramics1.png",
            }
          ],
          containerSectionClass: "section margin-bottom",
        
        },
        {
          containerSectionClass: "section margin-bottom",
          image:[
            {
              src: "/utilityceramics2.png",
              caption: "Plate, 15 x 15 cm",
            }
          ],
          containerImageStyle: {
            textAlign: "center",
          }
        },
        {
          containerSectionClass: "section margin-bottom",
          image:[
            {
              src: "/utilityceramics3.png",
              caption: "Plate, 16 x 10 cm",
            }
          ]
        },
      ],
    },
  },
  {
    id: "videoart",
    title: "Video Art",
    image: "./videoart.png",
    video: "./videoart.webm",
    color: "#00FFFF",
    textColor: "#000000",
    details: {
      sections: [
        {
          title: "The illusion run",
          description: `Written and directed by Luisa Kuhn`,
          containerSectionClass: "margin-bottom",
          embedVideo: (
            <>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/216410019?h=5f28440f25&title=0&byline=0&portrait=0"
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
          containerSectionClass: "margin-bottom",
          embedVideo: (
            <>
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/166593232?h=7ccca5adea&title=0&byline=0&portrait=0"
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
          description: `Written and directed by Luisa Kuhn
Exhibited at an art festival called “Art All Night - Trenton: 6th Annual Film Festival” in Trenton, New Jersey, United States.`,
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
  {
    id: "phytotypes",
    title: "Phytotypes",
    image: "./phytotypes.png",
    color: "#0000FF",
    details: {
      sections: [
        {
          title: "Project research",
          description: `Phytotype experimentation: Historical
          photograpy process and exemplifications
          under orientation from the artist and
          professor Andrea Bracher, 2013`,
          image: [
            "/phytotypes1.png",
            "/phytotypes2.png",
            "/phytotypes3.png",
            "/phytotypes4.png",
            "/phytotypes5.png",
            "/phytotypes6.png",
          ],
          containerImageClass: "image-row",
        },
        {
          image: ["/phytotypes7.png", "/phytotypes8.png"],
          containerImageClass: "image-row image-row--center",
        },
      ],
    },
  },
  {
    id: "books",
    title: "Books",
    image: "./books.png",
    color: "#FF0000",
    details: {
      sections: [
        {
          title: "Rebeca: It's fun to imagine",
          description: `Writen and illustrated under orientation of Joseane Rücker. In process of publishing by Editora Urutau`,
          image: ["./rebeca1.gif"]
        },
        {
          title: "The Book of each One's Colours",
          description: "Idealized and handmade by Luisa Kuhn and Joel Nunes",
          image: ["./books2.gif"]
        },
        {
          image: [
            "/books3.png",
            "/books4.png",
          ]
        },
        {
          image: [
            "/books5.png",
            "/books6.png",
          ]
        },
        {
          image: [
            "/books7.png",
          ]
        },
      ],
    },
  },
    {
      id: "shots",
      display: false,
      color: "magenta"

    },
    {
      id: "shots-white",
      display: false,
      color: "white"

    }
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
