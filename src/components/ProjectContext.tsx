import { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext({
  projects: [],
  loading: true,
  activeProject: null,
  setActiveProject: (id: any) => {},
});

export const ProjectProvider = ({ children }: any) => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState<any>(null);
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
      value={{ projects, loading, activeProject, setActiveProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
