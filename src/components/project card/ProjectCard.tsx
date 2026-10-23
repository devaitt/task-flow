import { type Project } from "../../types";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
interface ProjectCardProps {
  project: Project;
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className={styles.cardСontainer}>
        <div className={styles.card}>
          <div className={styles.cardName}>{project.name}</div>
          <div className={styles.cardDescription}>{project.description}</div>
          <div className={styles.cardCreateDate}>
            {`Created at: ${project.createdAt}`}
          </div>
        </div>
      </div>
    </Link>
  );
}
