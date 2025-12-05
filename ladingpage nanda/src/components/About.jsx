import React from "react";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-20 px-6 text-center">
      {/* Título animado */}
      <motion.h2
        className="text-6xl text-[#cbb8a0] font-display mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Sobre Mim
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Imagem animada */}
        <motion.img
          src="/src/images/nandaph/nandasobre.jpg"
          alt="Sobre Mim"
          className="shadow-md"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Texto animado */}
        <motion.p
          className="text-lg font-display text-justify text-gray-600"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Eu sempre fui fascinada pelo que existe por trás de um olhar. Antes mesmo de segurar uma câmera, eu já buscava histórias nas cicatrizes, nos sorrisos tímidos, nas memórias que ninguém vê, mas que gritam por significado. Com o tempo, eu descobri que a fotografia seria o caminho para revelar tudo isso: o invisível, o profundo, o verdadeiro.
          Hoje, meu trabalho nasce de um propósito: traduzir sentimentos em imagem e devolver às pessoas aquilo que, muitas vezes, a vida fez elas esquecerem a própria beleza, identidade, força e essência. Eu fotografo para que você se veja como realmente é: inteira, luminosa, real.
          Acredito em conexão, em presença, em respirar o momento antes de apertar o botão. Acredito no toque, no vento, na lágrima que insiste em cair e nas risadas que explodem sem pedir licença. Cada gesto carrega verdade. Cada história merece ser honrada.
          Meu olhar é sensível, intuitivo, guiado pela leveza e pela alma. Eu não crio memórias: eu revelo memórias que já existiam, mas estavam guardadas dentro de você. Que o meu trabalho seja sempre uma experiência e não apenas um ensaio. Uma pausa no tempo. Um encontro com você mesma. Um registro que abrace, cure e eternize.
        </motion.p>

      </div>

       <motion.h2
        className="text-4xl font-display text-[#cbb8a0] mt-10 px-"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Seja bem-vinda. Vai ser uma honra contar a sua história.
      </motion.h2>

    </section>
  );
}
