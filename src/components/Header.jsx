import React from "react";

const Header = () => {
  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Mujer", href: "#mujer" },
    { name: "Hombre", href: "#hombre" },
    { name: "Accesorios", href: "#accesorios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold">MODA</h1>
      <nav className="flex gap-6">
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className="hover:text-blue-600">
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;