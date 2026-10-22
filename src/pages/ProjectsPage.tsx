import { getProjects } from "../../API/projects";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "../components/project card/ProjectCard";
import "./ProjectsPage.css";
export default function ProjectsPage() {
  const { data, isLoading, isError, isFetching, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  if (isLoading) return <p>Загрузка...</p>;

  if (isError) {
    return <p>Ошибка: {(error as Error).message}</p>;
  }

  return (
    <>
      {isFetching && <p className="fetching-hint">Updating</p>}
      <h1 className="projects__title">Your projects</h1>
      <ul className="projects__list">
        {data?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
    </>
  );
}
