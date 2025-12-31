import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const feedbacks = [
  {
    name: "Karol Zion",
    avatar: "./images/foto-nanda-05.jpg",
    text:
      "Eu amo ser fotografada, já fizemos onze ensaios, mas cada um tem uma experiência individual, amo que você me deixa super a vontade e me faz sentir leve e confiante. Esse de todos é o mais bonito kkk. São sensações que só quem faz um ensaio com você sabe do que estou falando. Você não vende fotografias, você entrega experiências e isso me faz amar registrar minha vida com você.",
  },
  {
    name: "Aline Magalhães",
    avatar: "./images/foto-nanda-05.jpg",
    text:
      "Olhaaaaa... vc entregou muito mais do que eu tava esperando... Meu Deus...... Tá muito perfeito... minha mandíbula tá doendo pq não conseguia parar de sorrir olhando pra tela... A frase a cada foto é 'Tá muito lindo'. Acho que é o ensaio mais perfeito que já vi.",
  },
  {
    name: "Milena Nogueira Porto",
    avatar: "./images/foto-nanda-05.jpg",
    text:
      "A gente amou tanto esse ensaio. Foi leve, divertido, e cheio de carinho. Obrigada por ter registrado nossa essência. Foi maravilhosa a experiência de você nos fotografar!",
  },
  {
    name: "Gabriel Porto",
    avatar: "./images/foto-nanda-05.jpg",
    text:
      "Recebemos as fotos 3 horas atrás, e estamos falando sobre isso até agora hahahaha Trabalho impecável, Nanda! Simplesmente AMAMOS!",
  },
];

export default function Feedbacks() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((i) => (i + 1) % feedbacks.length);
  const prevSlide = () =>
    setIndex((i) => (i - 1 + feedbacks.length) % feedbacks.length);

  return (
    <section
      id="feedbacks"
      className="bg-[#cbb8a0] py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center"
    >
      {/* Título */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl lg:text-6xl font-display text-white mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Feedbacks
      </motion.h2>

      {/* Card */}
      <div className="relative w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white shadow-xl text-center px-6 pt-14 pb-8 sm:px-10 sm:pt-16 sm:pb-10"
          >
            {/* Avatar ajustado no mobile */}
            <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2">
              <img
                src={feedbacks[index].avatar}
                alt={feedbacks[index].name}
                className="w-24 h-24 sm:w-20 sm:h-20 rounded-full object-cover border-1 border-white shadow-md"
              />
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
              {feedbacks[index].text}
            </p>

            <h4 className="font-semibold text-gray-800">
              {feedbacks[index].name}
            </h4>
          </motion.div>
        </AnimatePresence>

        {/* Desktop / Tablet Buttons */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-[-40px] top-1/2 -translate-y-1/2 p-2 text-white hover:opacity-70 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-[-40px] top-1/2 -translate-y-1/2 p-2 text-white hover:opacity-70 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Mobile Controls */}
      <div className="flex sm:hidden gap-8 mt-6">
        <button onClick={prevSlide} className="text-white">
          <ChevronLeft size={28} />
        </button>
        <button onClick={nextSlide} className="text-white">
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {feedbacks.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
