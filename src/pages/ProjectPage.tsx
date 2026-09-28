import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProject } from "../../API/projects";
export default function ProjectPage() {
  const { projectId } = useParams();

  const projectQuery = useQuery({
    queryKey: ["projects", projectId],
    queryFn: () => getProject(projectId!),
    enabled: !!projectId,
  });
  if (!projectId) return <p>проект не выбран</p>;

  if (projectQuery.isLoading) return <p>Загрузка проекта</p>;
  if (projectQuery.isError) {
    return <p>Ошибка: {(projectQuery.error as Error).message}</p>;
  }

  return (
    <div className="project__container">
      <h1 className="project__title">{projectQuery.data.name}</h1>
      <p className="project__description">{projectQuery.data.description}</p>
    </div>
  );
}
