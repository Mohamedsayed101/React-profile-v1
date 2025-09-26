import HeadingPage from "../../Components/HeadingPage/HeadingPage";

import { projectsList } from "../../DataStore/Projects";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <>
      <div className="px-3 flex flex-col gap-19">
        <HeadingPage title="Projects" />
        <div className="Cards-group flex justify-center gap-4.5 flex-wrap " data-aos="fade-left">
          {projectsList.map((project) => (
            <ProjectCard key={project.id} project={project}  />
          ))}
        </div>
      </div>
    </>
  );
}
