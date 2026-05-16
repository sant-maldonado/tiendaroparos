import React from "react";

const Footer = () => (
  <footer className="bg-black text-white py-12 px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      
      {/* Enlaces */}
      <div>
        <h4 className="font-semibold mb-4">Enlaces</h4>
        <ul className="space-y-2">
          {["Inicio", "Mujer", "Hombre", "Accesorios", "Contacto"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-blue-400">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Atención al Cliente */}
      <div>
        <h4 className="font-semibold mb-4">Atención al Cliente</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
          <li><a href="#" className="hover:text-blue-400">Envíos y Devoluciones</a></li>
          <li><a href="#" className="hover:text-blue-400">Términos y Condiciones</a></li>
        </ul>
      </div>

      {/* Contacto */}
      <div>
        <h4 className="font-semibold mb-4">Contacto</h4>
        <p>Email: info@moda.com</p>
        <p>Tel: +123 456 7890</p>
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <a href="#" className="hover:text-blue-400">Instagram</a>
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
      © 2026 MODA. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
