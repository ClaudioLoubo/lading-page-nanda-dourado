import React from "react";

export default function Header() {
  return (
    <header className="fixed w-full z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-white font-display">ND</div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="text-white font-display">Home</a></li>
          <li><a href="#about" className="text-white font-display transition duration-300 ease-in-out transform hover:scale-110">Sobre Mim</a></li>
          <li><a href="#portfolio" className="text-white font-display">Portfólio</a></li>
          <li><a href="#feedbacks" className="text-white font-display">Feedbacks</a></li>
          <li><a href="#prices" className="text-white font-display">Pacotes</a></li>
          <li><a href="#contact" className="text-white font-display"></a></li>
        </ul>
      </nav>
    </header>
  );
}
