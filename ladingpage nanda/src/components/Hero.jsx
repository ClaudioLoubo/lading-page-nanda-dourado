import React from "react";

export default function Hero() {
  return (
    // Seção Principal: Mantém o alinhamento à esquerda (justify-start)
    // Removemos os px-4/md:px-0 daqui, o padding será controlado no container interno
    <section id="home" className="relative h-screen bg-cover bg-center flex items-center justify-start text-[#a79075]"
      style={{ backgroundImage: "url('/src/images/nandaph/nandahero.jpg')" }}>
      
      {/* Container de Conteúdo: Adicionando padding horizontal (px) responsivo */}
      {/* px-8 (padding horizontal de 8 unidades) para mobile, garantindo espaço nas laterais */}
      {/* md:px-16 (padding de 16 unidades) para telas médias */}
      {/* lg:px-24 (padding de 24 unidades) para telas grandes, garantindo o "respiro" que você quer */}
      <div className="p-8 px-8 mt-20 md:p-12 md:px-16 lg:px-96"> 
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display leading-none">Nanda <br />Dourado </h1>
        <p className="text-3xl mt-1 font-display">Sua Fotográfa</p>
        <div className="flex space-x-4 md:space-x-10 mt-6">
          <div><span className="text-xl font-display sm:text-2xl font-bold">7+</span><p className="font-display">Experiência</p></div>
          <div><span className="text-xl font-display sm:text-2xl font-bold">500+</span><p className="font-display">Clientes</p></div>
          <div><span className="text-xl font-display sm:text-2xl font-bold">800+</span><p className="font-display">Fotografias</p></div>
        </div>
      </div>
    </section>
  );
}