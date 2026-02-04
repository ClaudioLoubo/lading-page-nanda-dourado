import React from "react";

const rows = [
  {
    title: "Casal",
    images: [
      "./images/foto-casal-07.webp",
      "./images/foto-casal-08.webp",
      "./images/foto-casal-09.webp",
      "./images/foto-casal-10.webp",
      "./images/foto-casal-11.webp",
    ],
  },
  {
    title: "Feminino",
    images: [
      "./images/foto-feminino-01.webp",
      "./images/foto-feminino-02.webp",
      "./images/foto-feminino-03.webp",
      "./images/foto-feminino-04.webp",
      "./images/foto-feminino-05.webp",
    ],
  },
  {
    title: "Posicionamento",
    images: [
      "./images/foto-posicionamento-01.webp",
      "./images/foto-posicionamento-02.webp",
      "./images/foto-posicionamento-03.webp",
      "./images/foto-posicionamento-02.webp",
      "./images/foto-posicionamento-03.webp",
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24">
      <h2 className="text-[#cbb8a0] text-4xl sm:text-5xl lg:text-6xl text-center font-display mb-20">
        Portfólio
      </h2>

      <div className="space-y-20">
        {rows.map((row, index) => (
          <div key={index} className="relative">
            {/* Linha acima e abaixo do título */}
            <div className="flex items-center w-full mb-4">
              <div className="flex-1 border-t border-[#cbb8a0]"></div>
              <h3 className="px-4 text-3xl sm:text-3xl lg:text-4xl font-display uppercase tracking-widest text-[#cbb8a0] text-center">
                {row.title}
              </h3>
              <div className="flex-1 border-t border-[#cbb8a0]"></div>
            </div>

            {/* Grid para desktop, scroll horizontal para mobile */}
            <div className="grid grid-flow-col sm:grid-flow-row gap-4 sm:gap-8 overflow-x-auto sm:overflow-x-visible scroll-smooth scrollbar-hide sm:grid-cols-4 lg:grid-cols-5">
              {row.images.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[80vw] sm:w-full h-[240px] sm:h-[240px] lg:h-[280px] overflow-hidden"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="flex w-full mb-8">
              <div className="flex-1 mt-10 border-t border-[#cbb8a0]"></div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
