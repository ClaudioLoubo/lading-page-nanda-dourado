import React from "react";
import { motion } from "framer-motion";

const images = [
  "/src/images/foto (1).jpeg",
  "/src/images/foto (2).jpeg",
  "/src/images/foto (3).jpeg",
  "/src/images/foto (4).jpeg",
  "/src/images/foto (5).jpeg",
  "/src/images/foto (6).jpeg",
  "/src/images/foto (7).jpeg",
  "/src/images/foto (8).jpeg",
  "/src/images/foto (9).jpeg",
  "/src/images/foto (10).jpeg",
  "/src/images/foto (11).jpeg",
  "/src/images/foto (12).jpeg",
  "/src/images/foto (13).jpeg",
  "/src/images/foto (14).jpeg",
  "/src/images/foto (15).jpeg",
  "/src/images/foto (16).jpeg",
  "/src/images/foto (17).jpeg",
  "/src/images/foto (18).jpeg",
  "/src/images/foto (19).jpeg",
  "/src/images/foto (20).jpeg",
  "/src/images/foto (21).jpeg",
  "/src/images/foto (22).jpeg",
  "/src/images/foto (23).jpeg",
  "/src/images/foto (24).jpeg",
  "/src/images/foto (25).jpeg",
  "/src/images/foto (26).jpeg",
  "/src/images/foto (27).jpeg",
  "/src/images/foto (28).jpeg",
  "/src/images/foto (29).jpeg",
  "/src/images/foto (30).jpeg",
  "/src/images/foto (31).jpeg",
  "/src/images/foto (32).jpeg",
  "/src/images/foto (33).jpeg",
  "/src/images/foto (34).jpeg",
  "/src/images/foto (35).jpeg",
  "/src/images/foto (36).jpeg",
  "/src/images/foto (37).jpeg",
  "/src/images/foto (38).jpeg",
  "/src/images/foto (39).jpeg",
  "/src/images/foto (40).jpeg",
  "/src/images/foto (41).jpeg",
  "/src/images/foto (42).jpeg",
  "/src/images/foto (43).jpeg",
  "/src/images/foto (44).jpeg",
  "/src/images/foto (45).jpeg",
  "/src/images/foto (46).jpeg",
  "/src/images/foto (47).jpeg",
  "/src/images/foto (48).jpeg",
  "/src/images/foto (49).jpeg",
];

const Portfolio = () => {
  // Dividindo imagens entre as colunas
  const columns = 5;
  const columnImages = Array.from({ length: columns }, (_, colIndex) =>
    images.filter((_, i) => i % columns === colIndex)
  );

  // Configuração da animação vertical alternada
  const animation = (direction) => ({
    y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
    transition: { duration: 60, repeat: Infinity, ease: "linear" },
  });

  return (
    <section id="portfolio" className="py-10 w-full bg-white h-[110vh] overflow-hidden">
      <div className="mx-auto px-10">
        <h2 className="text-[#cbb8a0] text-6xl text-center font-display mb-10">Portfólio</h2>

        <div className="flex w-full gap-4 text-center justify-center overflow-hidden">
          {columnImages.map((col, index) => (
            <motion.div
              key={index}
              animate={animation(index % 2 === 0 ? "up" : "down")}
              className={`flex flex-col gap-4 ${
              index % 2 === 0 ? 'w-1/4' : 'w-1/4'
              }`}
            >
              {col.concat(col).map((img, i) => (
                <div
                  key={i}
                  className={`overflow-hidden shadow-md ${
                    i % 50 === 0 ? "h-0.5" : i % 2 === 0 ? "h-98" : "h-98"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Portfolio ${i}`}
                    className="h-full"
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
