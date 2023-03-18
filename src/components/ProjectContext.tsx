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
    image: "./udu.png",
    color: "blue",
    details: {
      sections: [
        {
          title: "Udu",
          description: `Percussion instrument, 2022 - Brazil\n \
           Dimensions: 26cm x 21cm x 26cm `,
          image: "./udu1.png",
        },
        {
          title: "Maraca",
          description: `
            Percussion instrument, 2022 - Brazil
            Dimensions: 18cm x 11cm x 18cm
          `,
          image: ["./maraca1.png", "./maraca2.png"],
        },
      ],
    },
  },
  {
    id: "sculpture",
    title: "Sculpture",
    image: "./sculpture.png",
    color: "#FF00FF",
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
    //   setLoading(false);
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
