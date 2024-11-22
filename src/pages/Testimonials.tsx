import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "react-feather";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "The custom kitchen cabinets are absolutely stunning. The attention to detail and craftsmanship is unparalleled!",
    avatar: "https://placehold.co/80x80?text=SJ&font=roboto",
  },
  {
    name: "Michael Chen",
    role: "Restaurant Owner",
    content:
      "Our restaurant's new wooden tables and bar have completely transformed the space. Customers love the rustic charm!",
    avatar: "https://placehold.co/80x80?text=MC&font=roboto",
  },
  {
    name: "Emily Rodriguez",
    role: "Interior Designer",
    content:
      "Working with this carpentry team has been a dream. They bring my design visions to life with exceptional skill.",
    avatar: "https://placehold.co/80x80?text=ER&font=roboto",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="py-16 bg-wood-medium">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-wood-light">
          Happy Clients
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="bg-wood-light p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
                    <p className="text-wood-dark mb-4 text-lg italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-xl text-wood-dark">
                          {testimonial.name}
                        </h3>
                        <p className="text-wood-medium">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-wood-dark text-wood-light p-2 rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-wood-dark text-wood-light p-2 rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-wood-light" : "bg-wood-dark"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
