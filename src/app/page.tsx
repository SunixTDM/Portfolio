import Image from 'next/image';

export default function HomePage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-white via-indigo-50 to-purple-100">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-12">
        {/* Texto de bienvenida */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
            Hola, Soy Johnny Alejandro Galvez Acevedo 👋
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
             Soy estudiante apasionado de Ingeniería de Software, dedicado a construir aplicaciones web rápidas, modernas y responsivas utilizando tecnologías como <strong>Next.js</strong> and <strong>Tailwind CSS</strong>.
          </p>
          <a href="/contact">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-full transition duration-300">
              ¡Contactame!
            </button>
          </a>
        </div>

        {/* imagen */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/Johnny.png" // Asegúrate de tener esta imagen en /public
            alt="Johnny Alejandro Galvez Acevedo"
            width={250}
            height={250}
            className="rounded-full shadow-lg border-4 border-indigo-500"
          />
        </div>
      </div>
    </section>
  );
}
