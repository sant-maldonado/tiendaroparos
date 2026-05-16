import React from "react";

const testimonials = [
  {
    name: "Lucía R.",
    text: "La ropa es de excelente calidad y el envío fue rapidísimo. Muy recomendados!",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Carlos M.",
    text: "Me encantó la atención y la variedad de productos. Volveré a comprar seguro.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => (
  <section className="py-16 px-8 bg-white text-center">
    <h3 className="text-3xl font-semibold mb-8">Lo que dicen nuestros clientes</h3>
    <div className="flex flex-col md:flex-row gap-8 justify-center">
      {testimonials.map((t) => (
        <div
          key={t.name}
          className="bg-gray-50 shadow rounded p-6 max-w-sm hover:scale-105 transition"
        >
          <img
            src={t.img}
            alt={t.name}
            className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="italic text-gray-700 mb-2">"{t.text}"</p>
          <h4 className="font-medium">{t.name}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;