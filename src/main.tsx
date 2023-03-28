import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/index.scss";
import Projects from "./routes/projects";
import Information from "./routes/information";
import TopBar from "./components/TopBar";
import { ProjectProvider } from "./components/ProjectContext";
import ProjectPage, { loaderProject } from "./routes/project";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <TopBar changeColor />
        <Projects />
      </>
    ),
  },
  {
    path: "/projects/:id",
    element: (
      <>
        <TopBar changeColor />
        <ProjectPage />
      </>
    ),
    loader: loaderProject,
  },
  {
    path: "/information",
    element: (
      <>
        <TopBar />
        <Information />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProjectProvider>
      <RouterProvider router={router} />
    </ProjectProvider>
  </React.StrictMode>
);
