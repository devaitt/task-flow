import { type Task } from "../../types";
import TaskCard from "../task card/TaskCard";

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
}
export default function KanbanColumn({ tasks, title }: KanbanColumnProps) {
  return (
    <div className="kanban-column__container">
      <h2 className="kanban__title">{title}</h2>
      <ul className="kanban__list">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}
