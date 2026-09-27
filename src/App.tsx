import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import TaskPage from "./pages/TaskPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProjectsPage />} />
      <Route path="/projects/:projectId" element={<ProjectPage />} />
      <Route path="/projects/:projectId/tasks/:taskId" element={<TaskPage />} />
    </Routes>
  );
}
