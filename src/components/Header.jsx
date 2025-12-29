import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 ">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white font-display">
          ND
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          {[
            ["Home", "#home"],
            ["Sobre Mim", "#about"],
            ["Portfólio", "#portfolio"],
            ["Feedbacks", "#feedbacks"],
            ["Pacotes", "#prices"],
            ["Contato", "#contact"],
          ].map(([label, link]) => (
            <li key={label}>
              <a
                href={link}
                className="text-white font-display transition hover:opacity-70"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
          aria-label="Abrir menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md">
          <ul className="flex flex-col items-center gap-6 py-8">
            {[
              ["Home", "#home"],
              ["Sobre Mim", "#about"],
              ["Portfólio", "#portfolio"],
              ["Feedbacks", "#feedbacks"],
              ["Pacotes", "#prices"],
              ["Contato", "#contact"],
            ].map(([label, link]) => (
              <li key={label}>
                <a
                  href={link}
                  onClick={() => setOpen(false)}
                  className="text-white text-xl font-display"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
