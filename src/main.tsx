import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.scss'
import Projects from './routes/projects';
import Information from './routes/information';
import Shots from './routes/shots';
import TopBar from './components/TopBar';

const router = createBrowserRouter([
  {
    path: "/portfolioluisa",
    element: <><TopBar /><Projects /></>,
  },
  {
    path: "/portfolioluisa/shots",
    element: <><TopBar /><Shots /></>,
  },
  {
    path: "/portfolioluisa/information",
    element: <><TopBar /><Information /></>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
