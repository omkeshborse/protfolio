import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
function Project() {
  return (
    <section className="py-20 align-element" id="project">
      <SectionTitle text={"web creation"} />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
            return <ProjectCard key={project.id } {...project}/>
        })}
      </div>
    </section>
  );
}
export default Project;
