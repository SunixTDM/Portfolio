import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiMysql,
  SiDjango,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

export default function AboutPage() {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-24 py-20 text-gray-800 bg-gradient-to-br from-white via-blue-100 to-purple-200">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-700">
        Sobre Mí
      </h2>

      {/* Texto descriptivo */}
      <div className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed space-y-6 mb-16 text-justify">
        <p>
          ¡Hola! Mi nombre es Johnny Alejandro y actualmente curso el <strong>quinto semestre de Ingeniería de Software</strong>. A lo largo de mi formación he trabajado en diversos proyectos que me han permitido fortalecer habilidades tanto en el frontend como en el backend.
        </p>

        <p>
          Me apasiona construir interfaces limpias, intuitivas y accesibles, además de optimizar la experiencia del usuario mediante buenas prácticas de desarrollo y diseño moderno.
        </p>

        <p>
          Estoy en constante aprendizaje y siempre abierto a nuevos desafíos que me permitan crecer profesionalmente y aportar valor en cada proyecto que emprendo.
        </p>
      </div>

      {/* Tecnologías */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Tecnologías que manejo</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center text-5xl">
          <SiPython className="blink hover:scale-110 transition-transform text-[#3776AB]" title="Python" />
          <SiJavascript className="blink hover:scale-110 transition-transform text-[#F7DF1E]" title="JavaScript" />
          <SiTypescript className="blink hover:scale-110 transition-transform text-[#3178C6]" title="TypeScript" />
          <SiTailwindcss className="blink hover:scale-110 transition-transform text-[#38BDF8]" title="Tailwind CSS" />
          <SiMongodb className="blink hover:scale-110 transition-transform text-[#47A248]" title="MongoDB" />
          <SiNodedotjs className="blink hover:scale-110 transition-transform text-[#339933]" title="Node.js" />
          <SiNextdotjs className="blink hover:scale-110 transition-transform text-black" title="Next.js" />
          <SiMysql className="blink hover:scale-110 transition-transform text-[#4479A1]" title="MySQL" />
          <SiDjango className="blink hover:scale-110 transition-transform text-[#092E20]" title="Django" />
          <SiHtml5 className="blink hover:scale-110 transition-transform text-[#E34F26]" title="HTML" />
          <SiCss3 className="blink hover:scale-110 transition-transform text-[#1572B6]" title="CSS" />
        </div>

        {/* Botón de descarga */}
        <div className="mt-12">
          <a
            href="/cv.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
