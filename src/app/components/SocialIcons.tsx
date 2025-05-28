import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="flex justify-center gap-6 text-2xl text-gray-700 mt-4">
      <a
        href="https://github.com/SunixTDM"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-black"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:johnny.alejandro2006@gmail.com"
        className="hover:text-black"
      >
        <FaEnvelope />
      </a>
      <a
        href="https://www.linkedin.com/in/tu-perfil"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-black"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
