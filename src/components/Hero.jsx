import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center text-[#a79075]"
      style={{ backgroundImage: "url('./images/foto-nanda-08.jpg')" }}
    >
      <div
        className="
          mt-24
          px-4
          sm:px-8
          md:px-16
          lg:px-40
          xl:px-60
        "
      >
        <h1
          className="
            font-display leading-none
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          Nanda <br /> Dourado
        </h1>

        <p className="text-2xl sm:text-3xl mt-2 font-display">
          Sua Fotógrafa
        </p>

        <div className="flex gap-6 sm:gap-10 mt-6">
          <div>
            <span className="text-xl sm:text-2xl font-bold font-display">7+</span>
            <p className="font-display">Experiência</p>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-bold font-display">500+</span>
            <p className="font-display">Clientes</p>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-bold font-display">800+</span>
            <p className="font-display">Fotografias</p>
          </div>
        </div>
      </div>
    </section>
  );
}
