import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { ProjectContext } from "../components/ProjectContext";
import "../styles/projects.scss";

export async function loaderProject({ params }: any) {
  const id = params.id;
  console.log('id project', id)
  return { id };
}
export default function ProjectPage() {
  const { activeProject, setActiveProject } = useContext(ProjectContext)
  const { id }: any = useLoaderData();

  useEffect(() => {
    if(activeProject) {
      setActiveProject(null)
    }
  }, [])

  return (
    <>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
      <h1>{id}</h1>
    </>
  );
}
