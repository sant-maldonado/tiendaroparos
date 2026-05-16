import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <Hero />
      <Products />
      <Categories />
      <Newsletter />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
