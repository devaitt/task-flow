export interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: "backlog" | "in-progress" | "review" | "done";
  priority: "low" | "medium" | "high" | null;
  assignee: string | null;
  createdAt: string;
  updatedAt: string;
}
