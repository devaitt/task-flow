import { type Task } from "../../types";
import { Link } from "react-router-dom";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <Link to={`/projects/${task.projectId}/tasks/${task.id}`}>
      <div className="task-card__container">
        <div className="task-card__body">
          <h2 className="task-card__title">{task.title}</h2>
          <p>{"Priority: " + task.priority}</p>
          <p className="task-card__assignee">{task.assignee}</p>
        </div>
      </div>
    </Link>
  );
}
