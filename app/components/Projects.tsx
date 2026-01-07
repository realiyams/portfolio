import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects-data";

export default function Projects() {
  return (
    <section id="proyek" className="py-24 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">
          Proyek
        </h2>

        {/* Mobile: Stack | Desktop: Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              links={project.links}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
