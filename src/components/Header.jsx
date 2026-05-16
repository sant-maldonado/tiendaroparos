import React from "react";

const Header = () => (
  <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
    <h1 className="text-2xl font-bold">MODA</h1>
    <nav className="flex gap-6">
      {["Inicio", "Mujer", "Hombre", "Accesorios", "Contacto"].map((item) => (
        <a key={item} href="#" className="hover:text-blue-600">
          {item}
        </a>
      ))}
    </nav>
  </header>
);

export default Header;
