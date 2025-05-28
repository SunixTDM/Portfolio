import Image from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  repo: string;
  demo: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  repo,
  demo,
  image,
}: ProjectProps) {
  return (
    <div className="bg-white/90 backdrop-blur-md shadow-md rounded-xl overflow-hidden border border-gray-200 transition hover:shadow-lg">
      <Image
        src={image}
        alt={`Imagen del proyecto ${title}`}
        width={800}
        height={400}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 text-sm">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href={repo}
            target="_blank"
            className="text-blue-600 hover:underline font-medium text-sm"
          >
            Código
          </a>
          <a
            href={demo}
            target="_blank"
            className="text-purple-600 hover:underline font-medium text-sm"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
