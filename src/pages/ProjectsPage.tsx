import { getProjects } from "../../API/projects";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "../components/project card/ProjectCard";
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
      <ul className="projects__list">
        {data?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
    </>
  );
}
