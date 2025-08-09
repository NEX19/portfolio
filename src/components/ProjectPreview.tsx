import type { ProjectData } from "../types/ProjectData";

function ProjectPreview({ project }: { project: ProjectData }) {
  return (
    <div style={{ display: "flex", padding: "10px", gap: "10px" }}>
      <div className="flex-shrink-0 w-48 h-48 overflow-hidden rounded-md bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-fill"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold">{project.title}</h2>
        <div>{project.description}</div>
      </div>
    </div>
  );
}

export default ProjectPreview;
