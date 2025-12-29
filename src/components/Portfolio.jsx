import React from "react";

const images = [
  "./images/foto (1).jpeg",
  "./images/foto (2).jpeg",
  "./images/foto (3).jpeg",
  "./images/foto (4).jpeg",
  "./images/foto (5).jpeg",
  "./images/foto (6).jpeg",
  "./images/foto (7).jpeg",
  "./images/foto (8).jpeg",
  "./images/foto (9).jpeg",
  "./images/foto (10).jpeg",
  "./images/foto (11).jpeg",
  "./images/foto (12).jpeg",
  "./images/foto (13).jpeg",
  "./images/foto (14).jpeg",
  "./images/foto (15).jpeg",
  "./images/foto (16).jpeg",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20">
      <h2 className="text-[#cbb8a0] text-4xl sm:text-5xl lg:text-6xl text-center font-display mb-14">
        Portfólio
      </h2>

      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            columns-1 
            sm:columns-2 
            lg:columns-4 
            gap-6
          "
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="mb-6 break-inside-avoid overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt={`Portfolio ${i}`}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
