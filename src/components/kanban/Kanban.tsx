import { type Task } from "../../types";
import KanbanColumn from "./KanbanColumn";
import type { TaskStatus } from "../../types";

const COLUMNS: { status: TaskStatus; title: string }[] = [
  { status: "backlog", title: "Backlog" },
  { status: "in-progress", title: "In Progress" },
  { status: "review", title: "Review" },
  { status: "done", title: "Done" },
];

interface KanbanProps {
  tasks: Task[];
}
export default function Kanban({ tasks }: KanbanProps) {
  return (
    <div className="kanban__container">
      {COLUMNS.map((column) => (
        <KanbanColumn
          key={column.status}
          title={column.title}
          tasks={tasks.filter((task) => task.status === column.status)}
        />
      ))}
    </div>
  );
}
