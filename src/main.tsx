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
import Shots from "./routes/shots";
import TopBar from "./components/TopBar";
import { ProjectProvider } from "./components/ProjectContext";
import ProjectPage, { loaderProject } from "./routes/project";

const router = createBrowserRouter(
  [
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
      path: "/shots",
      element: (
        <>
          <TopBar />
          <Shots />
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
  ],
  {
    basename: "/portfolioluisa",
  }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProjectProvider>
      <RouterProvider router={router} />
    </ProjectProvider>
  </React.StrictMode>
);
