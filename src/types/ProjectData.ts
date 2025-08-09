export type ProjectStatus = "active" | "archived" | "draft";

export interface ProjectData {
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  url?: string;
  repoUrl?: string;
  tags?: string[];
  year?: number;
  status?: ProjectStatus;
}
