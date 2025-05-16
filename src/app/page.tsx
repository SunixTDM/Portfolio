export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E1E2F] text-white flex flex-col items-center justify-center px-4 py-10 font-sans">
      <h1 className="text-5xl font-bold border border-white px-6 py-2 mb-6">Software Portfolio</h1>
      <h2 className="text-2xl font-semibold mb-4">Johnny Alejandro Galvez Acevedo</h2>
      <p className="text-center mb-2">This is my personal portfolio.</p>
      <p className="text-center mb-10">Below are some of my projects.</p>

      <nav className="flex flex-wrap justify-center gap-6">
        <a href="#back" className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-xl">Back</a>
        <a href="#skills" className="bg-cyan-500 hover:bg-cyan-600 transition text-white px-6 py-3 rounded-xl">Habilities</a>
  <section
  id="about"
  className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-4 py-10"
>
  <h2 className="text-4xl font-bold border border-white px-4 py-2 mb-8">
    About Me
  </h2>

  <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
    {/* Foto */}
    <div className="w-40 h-40 rounded-full border-4 border-white flex items-center justify-center text-sm">
      Photo
    </div>

    {/* Texto */}
    <p className="max-w-xl text-center md:text-left text-lg leading-relaxed">
      Hello, my name is <strong>Johnny Alejandro Gálvez Acevedo</strong>. I am
      18 years old and I study Software Engineering at{" "}
      <em>Universidad Cooperativa, Pasto campus</em>. I’m very interested in
      programming, especially with a focus on <strong>Backend development</strong>.
    </p>
  </div>

  <blockquote className="italic text-xl text-center mb-8">
    "Passionate about programming with a backend focus"
  </blockquote>

  {/* Botones */}
  <div className="flex flex-wrap justify-center gap-6">
    <a
      href="#"
      className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-xl"
    >
      Back
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
      Contact Information
    </a>
  </div>
</section>

        <a href="#about" className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-xl">About Me</a>
        <a href="#projects" className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl">Projects</a>
      </nav>
    </main>
  );
}
