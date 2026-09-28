import { type Project } from "../src/types";
export const getProjects = async (): Promise<Project[]> => {
  const url = "http://localhost:3000/projects";
  const res = await fetch(url);
  if (!res.ok) throw new Error("failed to load");
  return res.json();
};
