import Image from "next/image";

type ProjectLink = {
  title: string;
  url: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  links?: ProjectLink[];
  image: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  links,
  image,
}: ProjectCardProps) {
  return (
    <div className="group border border-neutral-800 rounded-lg overflow-hidden hover:border-cyan-400/60 transition">
      {/* Image */}
      <div className="relative h-44 w-full bg-neutral-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition"
        />
        <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
          {title}
        </h3>

        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <li
              key={item}
              className="text-xs text-neutral-300 border border-neutral-700 px-2 py-1 rounded"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Links */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-4 text-sm">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-cyan-400 transition"
              >
                {link.title} →
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
