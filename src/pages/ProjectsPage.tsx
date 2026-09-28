import { getProjects } from "../../API/projects";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "../components/project card/ProjectCard";
export default function ProjectsPage() {
  const projectsQuery = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  if (projectsQuery.isLoading) return <p>Загрузка...</p>;
  if (projectsQuery.isError) {
    return <p>Ошибка: {(projectsQuery.error as Error).message}</p>;
  }

  return (
    <>
      <ul className="projects__list">
        {projectsQuery.data?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
    </>
  );
}
