import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const packages = [
  { name: "Aurora", descricao: "10 fotos | Estúdio | 1 look | 40 minutos", photos: "O Aurora é para mulheres que desejam algo minimalista, leve e essencial. Um ensaio curtinho, cheio de afeto, feito para quem quer registrar um momento especial com delicadeza, sem muitos elementos — apenas você, sua essência e a verdade do instante. Simples, afetivo e íntimo!" },
  { name: "Bela", descricao: "15 fotos | Estúdio | Até 2 looks | 1 hora", photos: "O Bela é para quem deseja variedade e emoção, sem abrir mão da leveza. Com mais tempo e dois looks, esse ensaio te permite explorar novas versões suas — o lado doce, o forte e o sonhador. O texto aqui é um pouco mais longo, apenas para demonstrar como o scrollbar aparecerá se a altura for excedida. Testando o limite.Perfeito para quem quer sentir, viver e se expressar com mais liberdade." },
  { name: "Cléo", descricao: "20 fotos digitais | 2 looks | Estúdio ou externo | 1h30", photos: "O Cléo é para quem ama liberdade, autenticidade e narrativa. Seja no estúdio ou ao ar livre, esse ensaio te convida a viver algo mais artístico, verdadeiro e cheio de presença. Ideal para contar sua história com alma e intensidade." },
  { name: "Experiência", descricao: "30 fotos | 3 looks | 2 horas | Estúdio ou externo | Vídeo em slow motion", photos: "Para mulheres que não querem apenas fotos, mas memórias vivas. Mais tempo, mais detalhes e um vídeo em slow motion que deixa tudo com um toque cinematográfico. Para quem deseja viver uma experiência completa e inesquecível." },
  { name: "Experiência 1.2", descricao: "30 fotos | 3 looks | 2 horas | Estúdio ou externo | Vídeo em slow motion + 20 fotos reveladas",photos: "O Experiência 1.2 é para mulheres profundas e sentimentais, que amam tocar memórias com as próprias mãos. Além do ensaio completo, você leva 20 fotos reveladas, eternizando sua história também no papel.Para quem quer guardar, reviver e sentir cada capítulo dessa fase." },
];

const ITEM_WIDTH_BASE = 600;
const ITEM_HEIGHT_BASE = 325;
const GAP_SIZE = 24;

export default function Prices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, packages.length - 1));
  const goToPrevSlide = () => setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));

  const totalItemAndGap = ITEM_WIDTH_BASE + GAP_SIZE;
  const containerX = -currentIndex * totalItemAndGap;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === packages.length - 1;
  const centeringPadding = `calc(50% - ${ITEM_WIDTH_BASE / 2}px)`;

  return (
    <section id="prices" className="relative w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/images/nandaph/nanda009.jpg')", 
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative max-w-6xl mx-auto py-20 px-6 z-10">
        <h2 className="text-6xl font-display text-center mb-10 text-white">Pacotes</h2>

        <div className="relative flex items-center justify-center">

          {!isFirst && (
            <button
              onClick={goToPrevSlide}
              className="absolute left-0 z-20 p-3 text-white rounded-full shadow-lg transition-all duration-300 transform -translate-x-1/2 md:-translate-x-4 bg-[#cbb8a0] hover:bg-[#ac9982]"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
          )}


          <div className="overflow-visible w-full">
            <motion.div
              className="flex gap-6 items-center "
              style={{ paddingLeft: centeringPadding, paddingRight: centeringPadding }}
              animate={{ x: containerX }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
            >
              {packages.map((pkg, i) => {
                const isCurrent = i === currentIndex;
                const scale = isCurrent ? 1.15 : 0.85;
                const opacity = isCurrent ? 1 : 0.4;
                const zIndex = isCurrent ? 10 : 1;
                const blur = isCurrent ? 0 : 1.5;

                return (
                  <motion.div
                    key={i}
                    style={{
                      width: `${ITEM_WIDTH_BASE}px`,
                      height: `${ITEM_HEIGHT_BASE}px`,
                      zIndex,
                      filter: `blur(${blur}px)`
                    }}
                    className="flex-shrink-0 p-6 shadow-xl transition bg-white h-96 flex flex-col justify-between"
                    initial={false}
                    animate={{ scale, opacity }}
                    transition={{ type: "spring", stiffness: 300, damping: 35 }}
                    onClick={() => setCurrentIndex(i)}
                  >
                    <div className="px-4 py-4">
                      <h3 className="text-[#cbb8a0] text-3xl font-display">{pkg.name}</h3>
                      <p className="text-gray-600 text-3x1 font-display">{pkg.descricao}</p>
                    </div>

                    <div className="px-4 flex-initial overflow-y-auto pr-1 scrollbar-thin-webkit scrollbar-thin-firefox ">
                      <ul className="text-gray-600">
                        {pkg.duration && <li>Duração: {pkg.duration}</li>}
                        <li>{pkg.photos}</li>
                      </ul>
                    </div>

                    <div className="px-4 font-display">
                      <a href="https://wa.me/5598985308266"  target="_blank" rel="noopener noreferrer" className="mt-4 mb-4 px-4 py-1 bg-[#cbb8a0] text-white rounded hover:bg-[#cbb8a0] hover:scale-105 transform transition duration-300 self-start inline-block text-center">
                        Reservar
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {!isLast && (
            <button
              onClick={goToNextSlide}
              className="absolute right-0 z-10 p-3 text-white rounded-full shadow-lg transition-all duration-300 transform translate-x-1/2 md:translate-x-4 bg-[#cbb8a0] hover:bg-[#ac9982]"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {packages.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex ? "bg-[#ac9982] w-5" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
