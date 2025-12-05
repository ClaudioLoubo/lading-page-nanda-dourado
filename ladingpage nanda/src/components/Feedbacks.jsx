import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const feedbacks = [
  {
    name: "Karol Zion",
    text: "Eu amo ser fotografada, já fizemos onze ensaios, mas cada um tem uma experiência individual, amo que você me deixa super a vontade e me faz sentir leve e confiante. Esse de todos é o mais bonito kkk. São sensações que só quem faz um ensaio com você sabe do que estou falando. Você não vende fotografias, você entrega experiências e isso me faz amar registrar minha vida com você.",
  },
  {
    name: "Aline Magalhães",
    text: "Olhaaaaa... vc entregou muito mais do que eu tava esperando... Meu Deus...... Tá muito perfeito... minha mandíbula tá doendo pq não conseguia parar de sorrir olhando pra tela... A frase a cada foto é 'Tá muito lindo'. Acho que é o ensaio mais perfeito que já vi. Nesse momento tô falando de todo e qualquer trabalho que já vi com esse meus olhos... Tá muito incrível. Tá muito lindo. Vc é incrível demais.",
  },
  {
    name: "Milena Nogueira Porto",
    text: "A gente amou tanto esse ensaio. Foi leve, divertido, e cheio de carinho. Obrigada por ter registrado nossa essência. Foi maravilhosa a experiência de você nos fotografar! ❤️🥹",
  },
  {
    name: "Gabriel Porto",
    text: "Recebemos as fotos 3 horas atrás, e estamos falando sobre isso até agora hahahaha Trabalho impecável, Nanda! Simplesmente AMAMOS! ❤️",
  },
];

export default function Feedbacks() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % feedbacks.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);

  return (
    <section id="feedbacks" className="bg-[#cbb8a0] py-24 px-6 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Título */}
      <motion.h2
        className="text-center text-6xl md:text-5xl font-display text-white mb-10 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Feedbacks
      </motion.h2>

      {/* Container do card central */}
      <div className="flex justify-center items-center relative w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 shadow-xl text-center w-full break-words relative"
          >
            <p className="text-gray-600 leading-relaxed mb-6">{feedbacks[index].text}</p>
            <h4 className="font-semibold text-gray-800">{feedbacks[index].name}</h4>

            {/* Botão anterior - esquerda */}
            <button
              onClick={prevSlide}
              className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full hover:bg-white hover:text-[#cbb8a0] transition"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Botão próximo - direita */}
            <button
              onClick={nextSlide}
              className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full hover:bg-white hover:text-[#cbb8a0] transition"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pontos indicadores abaixo do card */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {feedbacks.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
