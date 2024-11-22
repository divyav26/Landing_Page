import { useState } from "react";
import { motion } from "framer-motion";
import { PenTool, Home, Monitor, ShoppingBag } from "react-feather";

const services = [
  {
    icon: <PenTool className="h-12 w-12 text-wood-medium" />,
    title: "Custom Furniture",
    description:
      "Bespoke furniture tailored to your unique style and space requirements.",
  },
  {
    icon: <Home className="h-12 w-12 text-wood-medium" />,
    title: "Home Renovations",
    description:
      "Transform your living spaces with our expert carpentry and renovation services.",
  },
  {
    icon: <Monitor className="h-12 w-12 text-wood-medium" />,
    title: "Commercial Projects",
    description:
      "High-quality carpentry solutions for offices, restaurants, and retail spaces.",
  },
  {
    icon: <ShoppingBag className="h-12 w-12 text-wood-medium" />,
    title: "Repairs & Restoration",
    description:
      "Bring your cherished wooden pieces back to life with our restoration expertise.",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-16 bg-wood-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-wood-dark">
          Our Craftsmanship
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="flex items-center justify-center mb-4"
                animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-center text-wood-dark">
                {service.title}
              </h3>
              <p className="text-gray-500 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
