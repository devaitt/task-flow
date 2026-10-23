import { getProjects } from "../../API/projects";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "../components/project card/ProjectCard";
import styles from "./ProjectsPage.module.css";
export default function ProjectsPage() {
  const { data, isLoading, isError, isFetching, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  if (isLoading) return <p className={styles.loadingMsg}>Загрузка...</p>;

  if (isError) {
    return (
      <p className={styles.errorMsg}>Ошибка: {(error as Error).message}</p>
    );
  }

  return (
    <>
      {isFetching && <p className={styles.fetchingHint}>Updating</p>}
      <h1 className={styles.projectsTitle}>Your projects</h1>
      <ul className={styles.projectsList}>
        {data?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
    </>
  );
}
