import Image from 'next/image';
import SocialIcons from './components/SocialIcons';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center bg-gradient-to-br from-white via-blue-100 to-purple-200">
      <div className="mb-6">
        <Image
          src="/Johnny.png"
          alt="Foto de perfil"
          width={0}
          height={0}
          sizes="100vw"
          className="w-32 sm:w-40 md:w-48 h-auto rounded-full border-4 border-white shadow-md"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        ¡Hola! Soy Johnny Alejandro
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6">
        Estudiante de Ingeniería de Software | Fullstack Developer
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <a
          href="/about"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Sobre mí
        </a>
        <a
          href="/projects"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Proyectos
        </a>
      </div>

      <SocialIcons />
    </main>
  );
}
