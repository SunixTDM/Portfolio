'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        'service_uttg019',     // ← Reemplaza con tus datos
        'template_2gzs57j',
        form.current,
        'w7ckKuH_uqvfHokFK'
      )
      .then(() => {
        setMessageSent(true);
        form.current?.reset();
        setTimeout(() => setMessageSent(false), 4000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-24 py-20 text-gray-800 bg-gradient-to-br from-white via-blue-100 to-purple-200">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-700">
        Contáctame
      </h2>

      <div className="max-w-2xl mx-auto w-full flex flex-col gap-10">
        {/* FORMULARIO */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full bg-white/90 backdrop-blur-md shadow-md p-8 rounded-xl space-y-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Tu nombre"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Tu correo"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Tu mensaje"
            required
            className="w-full p-3 border border-gray-300 rounded-lg resize-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar mensaje
          </button>

          {messageSent && (
            <p className="text-green-600 font-semibold mt-2">
              ¡Mensaje enviado correctamente!
            </p>
          )}
        </form>

        {/* ICONOS DE CONTACTO DEBAJO */}
        <div className="flex justify-center gap-10 text-4xl">
          <a
            href="mailto:johnny.alejandro2006@gmail.com"
            className="text-[#D44638] hover:scale-110 transition-transform"
            title="Correo"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/SunixTDM"
            target="_blank"
            className="text-black hover:scale-110 transition-transform"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tu-linkedin"
            target="_blank"
            className="text-[#0A66C2] hover:scale-110 transition-transform"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
