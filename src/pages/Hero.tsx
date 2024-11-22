import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.webp";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  console.log(scrollY);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-wood-light">
        <motion.h1
          className="text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Crafting Dreams in Wood
        </motion.h1>
        <motion.p
          className="text-2xl mb-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Expert Carpentry Services for Your Home and Business
        </motion.p>
        <motion.button
          className="bg-wood-light text-white text-wood-dark py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Free Quote
        </motion.button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-wood-dark to-transparent" />
    </div>
  );
}
