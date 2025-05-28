'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Sobre mí', path: '/about' },
  { name: 'Proyectos', path: '/projects' },
  { name: 'Contacto', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-white via-blue-100 to-purple-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-bold text-blue-700">Johnny Alejandro</span>

        {/* Botón hamburguesa (solo en móvil) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 text-2xl"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* Menú desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`hover:text-blue-700 transition ${
                  pathname === item.path ? 'text-blue-700 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <ul className="md:hidden px-6 py-4 bg-white/90 backdrop-blur-sm text-center shadow">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                onClick={closeMenu}
                className={`block py-2 text-base font-medium text-gray-700 hover:text-blue-700 transition ${
                  pathname === item.path ? 'text-blue-700 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
