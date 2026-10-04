import { type Task } from "../src/types";

export const getTasksByProject = async (projectId: string): Promise<Task[]> => {
  const url = `http://localhost:3000/tasks?projectId:contains=${projectId}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("failed to fetch tasks");
  return res.json();
};

export const getTask = async (taskId: string): Promise<Task> => {
  const url = `http://localhost:3000/tasks?id:contains=${taskId}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed to fetch task");
  }
  const data: Task[] = await res.json();
  const task = data.find((task) => task.id === taskId);
  if (!task) {
    throw new Error("task not found");
  }
  return task;
};
