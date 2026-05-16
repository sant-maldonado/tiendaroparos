import React from "react";

const categories = [
  { name: "Mujer", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop" },
  { name: "Hombre", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=400&fit=crop" },
  { name: "Accesorios", img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop" },
  { name: "Zapatos", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop" },
];

const Categories = () => (
  <section className="py-16 px-8 bg-white text-center">
    <h3 className="text-3xl font-semibold mb-8">Categorías</h3>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {categories.map((cat) => (
        <div key={cat.name} className="relative group cursor-pointer overflow-hidden rounded">
          <img src={cat.img} alt={cat.name} className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition">
            <span className="text-white text-2xl font-bold">{cat.name}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Categories;