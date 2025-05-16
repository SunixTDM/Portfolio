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
        <a href="#about" className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-xl">About Me</a>
        <a href="#projects" className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl">Projects</a>
      </nav>
    </main>
  );
}
