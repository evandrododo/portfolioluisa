import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import Projects from "./routes/projects";
import Information from "./routes/information";
import Shots from "./routes/shots";
import TopBar from "./components/TopBar";
import { ProjectProvider } from "./components/ProjectContext";
import ProjectPage, { loaderProject } from "./routes/project";

const router = createHashRouter([
  {
    path: "/portfolioluisa",
    element: (
      <>
        <TopBar changeColor />
        <Projects />
      </>
    ),
  },
  {
    path: "/portfolioluisa/projects/:id",
    element: (
      <>
        <TopBar changeColor />
        <ProjectPage />
      </>
    ),
    loader: loaderProject,
  },
  {
    path: "/portfolioluisa/shots",
    element: (
      <>
        <TopBar />
        <Shots />
      </>
    ),
  },
  {
    path: "/portfolioluisa/information",
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
