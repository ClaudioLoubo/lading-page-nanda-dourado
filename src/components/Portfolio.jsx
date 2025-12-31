import React from "react";

const rows = [
  {
    title: "Casal",
    images: [
      "./images/foto-casal-01.jpeg",
      "./images/foto-casal-02.jpeg",
      "./images/foto-casal-03.jpeg",
      "./images/foto-casal-04.jpeg",
      "./images/foto-casal-05.jpeg",
      "./images/foto-casal-06.jpeg",
      "./images/foto-casal-07.jpeg",
      "./images/foto-casal-08.jpeg",
    ],
  },
  {
    title: "Feminino",
    images: [
      "./images/foto-feminino-01.jpeg",
      "./images/foto-feminino-02.jpeg",
      "./images/foto-feminino-03.jpeg",
      "./images/foto-feminino-04.jpeg",
      "./images/foto-feminino-05.jpeg",
      "./images/foto-feminino-06.jpeg",
      "./images/foto-feminino-07.jpeg",
      "./images/foto-feminino-08.jpeg",
    ],
  },
  {
    title: "Posicionamento",
    images: [
      "./images/foto-posicionamento-01.jpeg",
      "./images/foto-posicionamento-02.jpeg",
      "./images/foto-posicionamento-03.jpeg",
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24 overflow-hidden">
      <h2 className="text-[#cbb8a0] text-4xl sm:text-5xl lg:text-6xl text-center font-display mb-20">
        Portfólio
      </h2>

      <div className="space-y-20">
        {rows.map((row, index) => (
          <div key={index} className="relative">
    
            <div className="flex items-center w-full mb-8">
              <div className="flex-1 border-t border-[#cbb8a0]"></div>
              <h3 className="px-4 text-3xl sm:text-3xl lg:text-4xl font-display uppercase tracking-widest text-[#cbb8a0] text-center">
                {row.title}
              </h3>
              <div className="flex-1 border-t border-[#cbb8a0]"></div>
            </div>

            <div className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide">
              {[...row.images, ...row.images].map((img, i) => (
                <div
                  key={i}
                  className="min-w-[280px] sm:min-w-[360px] h-[420px] flex-shrink-0 overflow-hidden"
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
          </div>
        ))}
      </div>
    </section>
  );
}
