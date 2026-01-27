import ProjectCard from "./ProjectCard";
import { projectsByLocale } from "../data/projects-data";

type Locale = "id" | "en";

const projectsSectionContent: Record<
  Locale,
  { id: string; title: string }
> = {
  id: {
    id: "proyek",
    title: "Proyek",
  },
  en: {
    id: "projects",
    title: "Projects",
  },
};

export default function Projects({ locale }: { locale: Locale }) {
  const section = projectsSectionContent[locale];
  const projects = projectsByLocale[locale];

  return (
    <section id={section.id} className="py-24 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">
          {section.title}
        </h2>

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
