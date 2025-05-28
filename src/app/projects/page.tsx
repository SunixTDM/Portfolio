import { projects } from '@/data/Projects';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-24 py-20 text-gray-800 bg-gradient-to-br from-white via-blue-100 to-purple-200">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
        Proyectos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
