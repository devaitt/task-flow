export interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export type TaskStatus = "backlog" | "in-progress" | "review" | "done";

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high" | null;
  assignee: string | null;
  createdAt: string;
  updatedAt: string;
}
