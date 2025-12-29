import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center flex items-center text-[#a79075]"
      style={{ backgroundImage: "url('./images/nandahero.jpg')" }}
    >
      <div className="
        w-full
        px-6
        pt-32
        sm:px-10
        md:px-16
        lg:px-32
        xl:px-48
        text-center
        lg:text-left
      ">
        <h1 className="
          font-display
          leading-none
          text-4xl
          sm:text-6xl
          md:text-7xl
          lg:text-8xl
        ">
          Nanda <br /> Dourado
        </h1>

        <p className="
          font-display
          mt-2
          text-xl
          sm:text-2xl
          md:text-3xl
        ">
          Sua Fotógrafa
        </p>

        <div className="
          flex
          justify-center
          lg:justify-start
          gap-6
          sm:gap-10
          mt-8
          flex-wrap
        ">
          <div className="text-center lg:text-left">
            <span className="text-xl sm:text-2xl font-bold font-display">7+</span>
            <p className="font-display text-sm sm:text-base">Experiência</p>
          </div>

          <div className="text-center lg:text-left">
            <span className="text-xl sm:text-2xl font-bold font-display">500+</span>
            <p className="font-display text-sm sm:text-base">Clientes</p>
          </div>

          <div className="text-center lg:text-left">
            <span className="text-xl sm:text-2xl font-bold font-display">800+</span>
            <p className="font-display text-sm sm:text-base">Fotografias</p>
          </div>
        </div>
      </div>
    </section>
  );
}
