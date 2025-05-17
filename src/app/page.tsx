export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E1E2F] text-white flex flex-col items-center px-4 py-10 font-sans">
      {/* Header */}
      <header className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-5xl font-bold border border-white px-6 py-2 mb-6">
          Software Portfolio
        </h1>
        <h2 className="text-2xl font-semibold mb-4">
          Johnny Alejandro Gálvez Acevedo
        </h2>
        <p className="text-center mb-2">This is my personal portfolio.</p>
        <p className="text-center mb-10">
          Below are some of my projects.
        </p>

        {/* Navegación principal */}
        <nav className="flex flex-wrap justify-center gap-6">
          <a
            href="#habilities"
            className="bg-cyan-500 hover:bg-cyan-600 transition text-white px-6 py-3 rounded-xl"
          >
            Habilities
          </a>
          <a
            href="#about"
            className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-xl"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-xl"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Sección About Me */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-4 py-10"
      >
        <h2 className="text-4xl font-bold border border-white px-4 py-2 mb-8">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
          <div className="w-40 h-40 rounded-full border-4 border-white flex items-center justify-center text-sm">
            Photo
          </div>

          <p className="max-w-xl text-center md:text-left text-lg leading-relaxed">
            Hello, my name is <strong>Johnny Alejandro Gálvez Acevedo</strong>. I am
            18 years old and I study Software Engineering at
            <em> Universidad Cooperativa, Pasto campus</em>. I’m very interested in
            programming, especially with a focus on <strong>Backend development</strong>.
          </p>
        </div>

        <blockquote className="italic text-xl text-center mb-8">
          "Passionate about programming with a backend focus"
        </blockquote>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#projects" className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl">
            Projects
          </a>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-xl">
            Contact Information
          </a>
        </div>
      </section>

      {/* Sección Projects */}
      <section
        id="projects"
        className="min-h-screen bg-[#1f2937] text-white px-4 py-10 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold border border-white px-6 py-2 mb-4">
          Projects
        </h2>

        <p className="text-center max-w-xl mb-10 text-lg">
          Here is a collection of my past projects, always aiming to have more:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="border-4 border-gray-300 hover:border-cyan-400 transition rounded-lg p-6 text-center bg-gray-800"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Project {n}</h3>
              <p className="text-sm text-gray-300 mt-2">Brief description</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#about" className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-xl">
            About Me
          </a>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-xl">
            Contact Information
          </a>
        </div>
      </section>

      {/* Sección Contact */}
      <section
        id="contact"
        className="min-h-screen bg-[#111827] text-white px-6 py-12 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold border border-white px-6 py-2 mb-4">
          Contact Information
        </h2>

        <p className="text-center max-w-2xl mb-10 text-lg">
          Here is my contact information in case you need my services and knowledge
          for a project or job:
        </p>

        <div className="flex flex-col gap-6 mb-12 text-lg">
          <div className="flex items-center gap-4">
            <img src="/phone.svg" alt="Phone" className="w-6 h-6" />
            <span>+57 313#######</span>
          </div>
          <div className="flex items-center gap-4">
            <img src="/window.svg" alt="Email" className="w-6 h-6" />
            <span>johnnygalvez.dev@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <img src="/globe.svg" alt="GitHub" className="w-6 h-6" />
            <a
              href="https://github.com/johnnygalvez"
              className="text-cyan-400 hover:underline"
              target="_blank"
            >
              github.com/johnnygalvez
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img src="/globe.svg" alt="Twitter" className="w-6 h-6" />
            <a
              href="https://twitter.com/johnnygalvez"
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              @johnnygalvez
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#about" className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-xl">
            About Me
          </a>
          <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 transition text-white px-6 py-3 rounded-xl">
            Projects
          </a>
        </div>
      </section>

      {/* Sección Habilities */}
      <section
        id="habilities"
        className="min-h-screen bg-[#1e293b] text-white px-6 py-12 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold border border-white px-6 py-2 mb-6">
          Habilities
        </h2>

        <p className="text-center max-w-2xl mb-10 text-lg">
          I have various skills in software development, with a stronger focus on
          backend, but also some knowledge of frontend. I’m capable of contributing
          to large projects and working effectively in a team.
        </p>

        <h3 className="text-xl mb-4 font-semibold">Experience in:</h3>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Node.js", "PHP", "JavaScript", "Python", "Django", "HTML", "MongoDB", ".NET", "MySQL"].map((tech) => (
            <span
              key={tech}
              className="bg-cyan-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-cyan-500 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#about" className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-xl">
            About Me
          </a>
          <a href="#projects" className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl">
            Projects
          </a>
        </div>
      </section>
    </main>
  );
}



    </main>
  );
}
