import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const packages = [
  {
    name: "Aurora",
    descricao: "10 fotos | Estúdio | 1 look | 40 minutos",
    photos:
      "O Aurora é para mulheres que desejam algo minimalista, leve e essencial. Um ensaio curtinho, cheio de afeto, feito para quem quer registrar um momento especial com delicadeza.",
  },
  {
    name: "Bela",
    descricao: "15 fotos | Estúdio | Até 2 looks | 1 hora",
    photos:
      "O Bela é para quem deseja variedade e emoção, sem abrir mão da leveza. Mais tempo para explorar versões suas com liberdade.",
  },
  {
    name: "Cléo",
    descricao: "20 fotos | 2 looks | Estúdio ou externo | 1h30",
    photos:
      "O Cléo é liberdade e narrativa. Um ensaio artístico, verdadeiro e cheio de presença.",
  },
  {
    name: "Experiência",
    descricao: "30 fotos | 3 looks | 2 horas | Vídeo",
    photos:
      "Para quem não quer apenas fotos, mas memórias vivas. Uma experiência completa e inesquecível.",
  },
  {
    name: "Experiência 1.2",
    descricao:
      "30 fotos | 3 looks | 2 horas | Vídeo + 20 fotos reveladas",
    photos:
      "Para mulheres profundas e sentimentais, que amam tocar memórias com as próprias mãos.",
  },
];

const GAP = 24;

export default function Prices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(600);
  const [isDesktop, setIsDesktop] = useState(false);


  useEffect(() => {
    const resize = () => {
      const w = window.innerWidth;

      if (w < 640) {
        setItemWidth(w * 0.9);
        setIsDesktop(false);
      } else if (w < 1024) {
        setItemWidth(420);
        setIsDesktop(false);
      } else {
        setItemWidth(600);
        setIsDesktop(true);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const total = itemWidth + GAP;
  const x = -currentIndex * total;
  const paddingCenter = `calc(50% - ${itemWidth / 2}px)`;

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === packages.length - 1;

  return (
    <section id="prices" className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./images/foto-nanda-10.webp')",
          backgroundAttachment: isDesktop ? "fixed" : "scroll",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-6xl mx-auto py-20 px-4 z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-center mb-12 text-white">
          Pacotes
        </h2>

        <div className="relative flex items-center justify-center">

          {isDesktop && !isFirst && (
            <button
              onClick={() => setCurrentIndex((i) => i - 1)}
              className="absolute left-0 z-20 p-3 bg-[#cbb8a0] text-white rounded-full shadow-lg hover:bg-[#ac9982] transition"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full overflow-visible">
            <motion.div
              className="flex gap-6 touch-pan-x"
              drag={!isDesktop ? "x" : false}
              dragConstraints={{
                left: -total * (packages.length - 1),
                right: 0,
              }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -100 && currentIndex < packages.length - 1) {
                  setCurrentIndex((i) => i + 1);
                }
                if (info.offset.x > 100 && currentIndex > 0) {
                  setCurrentIndex((i) => i - 1);
                }
              }}
              style={{
                paddingLeft: isDesktop ? paddingCenter : "5%",
                paddingRight: isDesktop ? paddingCenter : "5%",
              }}
              animate={{ x }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {packages.map((pkg, i) => {
                const isCurrent = i === currentIndex;

                return (
                  <motion.div
                    key={i}
                    style={{ width: itemWidth }}
                    className={`flex-shrink-0 bg-white/10 backdrop-blur-md p-6 shadow-xl flex flex-col justify-between
                      border transition
                      ${isCurrent ? "border-white/50" : "border-white/10"}
                    `}
                    animate={{
                      scale: isDesktop ? (isCurrent ? 1.08 : 0.92) : 1,
                      opacity: isDesktop ? (isCurrent ? 1 : 0.6) : 1,
                      filter:
                        isDesktop && !isCurrent ? "blur(1.5px)" : "blur(0px)",
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    onClick={() => setCurrentIndex(i)}
                  >
                    <div>
                      <h3 className="text-white text-3xl font-display mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-white font-display mb-4">
                        {pkg.descricao}
                      </p>
                    </div>

                    <div className="text-gray-200 max-h-32 overflow-y-auto pr-1">
                      {pkg.photos}
                    </div>

                    <a
                      href="https://wa.me/5598985308266"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 px-4 py-2 bg-[#cbb8a0] text-white rounded text-center hover:scale-105 transition"
                    >
                      Reservar
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Botão direita (desktop) */}
          {isDesktop && !isLast && (
            <button
              onClick={() => setCurrentIndex((i) => i + 1)}
              className="absolute right-0 z-20 p-3 bg-[#cbb8a0] text-white rounded-full shadow-lg hover:bg-[#ac9982] transition"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {packages.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-3 rounded-full cursor-pointer transition-all ${
                i === currentIndex
                  ? "w-6 bg-[#ac9982]"
                  : "w-3 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
