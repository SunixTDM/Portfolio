export default function Footer() {
  return (
    <footer className="bg-white border-t py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Johnny Galvez. Todos los derechos reservados.
      </div>
    </footer>
  );
}
