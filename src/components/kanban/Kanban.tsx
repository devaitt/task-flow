import { type Task } from "../../types";
import KanbanColumn from "./KanbanColumn";

interface KanbanProps {
  tasks: Task[];
}
export default function Kanban({ tasks }: KanbanProps) {
  const backlogTasks = tasks.filter((task) => task.status === "backlog");
  return (
    <div className="kanban__container">
      <KanbanColumn tasks={backlogTasks} title="Backlog" />
    </div>
  );
}
