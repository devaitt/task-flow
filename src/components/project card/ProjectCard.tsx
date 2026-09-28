import { type Project } from "../../types";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="project__container">
        <div className="card">
          <div className="card__name">{project.name}</div>
          <div className="card__description">{project.description}</div>
          <div className="card__create-date">{project.createdAt}</div>
        </div>
      </div>
    </Link>
  );
}
