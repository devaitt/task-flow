import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTask } from "../../API/tasks";

export default function TaskPage() {
  const { taskId } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tasks", taskId],
    queryFn: () => getTask(taskId!),
    enabled: !!taskId,
  });

  if (!taskId) return <p>task is not selected</p>;

  if (isLoading) return <p>Загрузка</p>;

  if (isError) {
    return <p>Ошибка: {(error as Error).message}</p>;
  }

  return (
    <div>
      <p>{data.title}</p>
      <p>{data.description}</p>
    </div>
  );
}
