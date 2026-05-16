import React from "react";

const Hero = () => (
  <section 
    className="bg-cover bg-center text-white text-center py-32 relative"
    style={{backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop')"}}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="relative z-10">
      <h2 className="text-5xl font-bold mb-4">Nueva Colección</h2>
      <p className="text-lg mb-6">Descubre las últimas tendencias</p>
      <div className="flex justify-center gap-4">
        <button className="bg-black px-6 py-2 rounded hover:bg-gray-800">Comprar Mujer</button>
        <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">Comprar Hombre</button>
      </div>
    </div>
  </section>
);

export default Hero;