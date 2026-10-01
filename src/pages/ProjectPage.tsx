import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProject } from "../../API/projects";
import { getTasksByProject } from "../../API/tasks";
import Kanban from "../components/kanban/Kanban";

export default function ProjectPage() {
  const { projectId } = useParams();

  const projectQuery = useQuery({
    queryKey: ["projects", projectId],
    queryFn: () => getProject(projectId!),
    enabled: !!projectId,
  });

  const tasksQuery = useQuery({
    queryKey: ["tasks", projectId],
    queryFn: () => getTasksByProject(projectId!),
    enabled: !!projectId,
  });

  if (!projectId) return <p>project is not selected</p>;

  if (projectQuery.isLoading || tasksQuery.isLoading) return <p>loading...</p>;

  if (projectQuery.isError) {
    return <p>Ошибка: {(projectQuery.error as Error).message}</p>;
  }
  if (tasksQuery.isError) {
    return <p>Ошибка: {(tasksQuery.error as Error).message}</p>;
  }

  return (
    <div className="project__container">
      <h1 className="project__title">{projectQuery.data.name}</h1>
      <p className="project__description">{projectQuery.data.description}</p>
      <Kanban tasks={tasksQuery.data} />
    </div>
  );
}
