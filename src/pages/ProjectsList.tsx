import ProjectPreview from "../components/ProjectPreview";
import type { ProjectData } from "../types/ProjectData";

function ProjectsList() {
  const starcraft_gold_medal: ProjectData = {
    title: "I won starcraft: brood war",
    image: "terran.jpg",
    description: "30 APM monster is back at it again",
  };

  const money_having: ProjectData = {
    title: "I got all them racks",
    image: "money_spread.jpeg",
    description: `Where your racks go? Oh, you spent it on clothes, money, drugs and clothes I'm 'bout to make three hunnid K this week, I got like, three shows And I get a hunnid K each, and I keep a pound, huh, and a pint on me`,
  };

  const projects = [starcraft_gold_medal, money_having];

  return (
    <>
      <div>List of Projects</div>
      <div>
        {projects.map((project, index) => (
          <ProjectPreview project={project} key={index}></ProjectPreview>
        ))}
      </div>
    </>
  );
}

export default ProjectsList;
