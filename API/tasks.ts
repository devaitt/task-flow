import { type Task } from "../src/types";

export const getTasksByProject = async (projectId: string): Promise<Task[]> => {
  const url = `http://localhost:3000/tasks?projectId:contains=${projectId}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("failed to fetch tasks");
  return res.json();
};
