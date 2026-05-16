import React from "react";

const products = [
  { name: "Vestido Blanco", price: "$7.500", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop" },
  { name: "Camisa Denim", price: "$6.200", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop" },
  { name: "Pantalón Elegante", price: "$8.900", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop" },
  { name: "Zapatillas Urbanas", price: "$5.500", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" },
];

const Products = () => (
  <section className="py-16 px-8 text-center">
    <h3 className="text-3xl font-semibold mb-8">Productos Destacados</h3>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <div key={p.name} className="bg-white shadow rounded p-4 hover:scale-105 transition">
          <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded mb-4" />
          <h4 className="font-medium">{p.name}</h4>
          <p className="text-gray-600">{p.price}</p>
          <button className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Ver Más
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Products;