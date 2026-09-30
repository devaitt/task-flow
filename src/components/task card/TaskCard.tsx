import { type Task } from "../../types";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="task-card__container">
      <div className="task-card__body">
        <h2 className="task-card__title">{task.title}</h2>
        <p>{"Priority: " + task.priority}</p>
        <p className="task-card__assignee">{task.assignee}</p>
      </div>
    </div>
  );
}
