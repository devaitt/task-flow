import { type Task } from "../../types";
import TaskCard from "../task card/TaskCard";
import styles from "./kanbanColumn.module.css";

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
}
export default function KanbanColumn({ tasks, title }: KanbanColumnProps) {
  return (
    <div className={styles.kanbanColumnContainer}>
      <h2 className={styles.kanbanTitle}>{title}</h2>
      <div className={styles.kanbanList}>
        <ul className={styles.kanbanList}>
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
