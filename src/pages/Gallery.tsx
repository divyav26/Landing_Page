import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import g1 from "../assets/gallery1.webp";
import g2 from "../assets/g2.avif";
import g3 from "../assets/g3.webp";
import g4 from "../assets/g4.jfif";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";

const projects = [
  {
    id: 1,
    title: "Custom Kitchen Cabinets",
    image: g1,
  },
  {
    id: 2,
    title: "Rustic Dining Table",
    image: g2,
  },
  {
    id: 3,
    title: "Modern Office Desks",
    image: g3,
  },
  {
    id: 4,
    title: "Restored Antique Wardrobe",
    image: g4,
  },
  {
    id: 5,
    title: "Bespoke Bookshelf",
    image: g5,
  },
  {
    id: 6,
    title: "Handcrafted Wooden Toys",
    image: g6,
  },
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="py-16 bg-wood-pattern text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-wood-light">
          Our Masterpieces
        </h2>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="cursor-pointer"
            >
              <motion.div
                className="relative h-64 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-wood-light">
                  {project.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`project-${selectedId}`}
              className="relative bg-wood-light p-4 rounded-lg max-w-3xl w-full mx-4"
            >
              {/* Close Icon */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-2 right-2 text-black bg-white px-2 py-1 rounded-md shadow-lg hover:bg-gray-200 transition duration-300 z-10"
              >
                ✕
              </button>

              {/* Selected Image */}
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img
                  src={projects.find((p) => p.id === selectedId)?.image}
                  alt={projects.find((p) => p.id === selectedId)?.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
