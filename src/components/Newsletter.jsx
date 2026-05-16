import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMessage("Por favor ingresa un email válido.");
      return;
    }
    setMessage("¡Gracias por suscribirte!");
    setEmail("");
  };

  return (
    <section className="bg-gray-100 py-12 text-center">
      <h3 className="text-2xl font-semibold mb-4">Suscribite a nuestro Newsletter</h3>
      <p className="mb-6 text-gray-600">Recibí ofertas y novedades exclusivas</p>
      <form onSubmit={handleSubmit} className="flex justify-center gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu email"
          className="px-4 py-2 rounded border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Suscribirse
        </button>
      </form>
      {message && <p className="mt-4 text-blue-600">{message}</p>}
    </section>
  );
};

export default Newsletter;
