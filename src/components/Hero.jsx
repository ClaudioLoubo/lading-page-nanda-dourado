import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center flex items-center justify-start text-[#a79075]"
      style={{ backgroundImage: "url('/src/images/nandaph/nandahero.jpg')" }}>
      
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