import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto py-16 md:py-24 px-4 sm:px-6 text-center"
    >
      {/* Título */}
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl text-[#cbb8a0] font-display mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Sobre Mim
      </motion.h2>

      {/* Conteúdo */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Imagem */}
        <motion.img
          src="./images/foto-nanda-05.jpg"
          alt="Sobre Mim"
          className="w-full max-w-md mx-auto shadow-md"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Texto */}
        <motion.p
          className="text-base sm:text-lg font-display text-left sm:text-justify text-gray-600 leading-relaxed"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Eu sempre fui fascinada pelo que existe por trás de um olhar. Antes mesmo
          de segurar uma câmera, eu já buscava histórias nas cicatrizes, nos sorrisos
          tímidos, nas memórias que ninguém vê, mas que gritam por significado. Com
          o tempo, eu descobri que a fotografia seria o caminho para revelar tudo
          isso: o invisível, o profundo, o verdadeiro.
          <br /><br />
          Hoje, meu trabalho nasce de um propósito: traduzir sentimentos em imagem e
          devolver às pessoas aquilo que, muitas vezes, a vida fez elas esquecerem a
          própria beleza, identidade, força e essência. Eu fotografo para que você
          se veja como realmente é: inteira, luminosa, real.
          <br /><br />
          Acredito em conexão, em presença, em respirar o momento antes de apertar o
          botão. Cada gesto carrega verdade. Cada história merece ser honrada.
        </motion.p>
      </div>

      {/* Frase final */}
      <motion.h3
        className="text-2xl sm:text-3xl lg:text-4xl font-display text-[#cbb8a0] mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Seja bem-vinda. Vai ser uma honra contar a sua história.
      </motion.h3>
    </section>
  );
}
