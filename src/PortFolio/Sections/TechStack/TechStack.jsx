import { useRef } from "react";
import { motion } from "framer-motion";
import { techStackCategories } from "../../Constants/index";
import TechCategory from "./TechCategory";

const TechStack = () => {
  const containerRef = useRef();

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#121212] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/80 via-[#1E1E1E]/50 to-[#6C63FF]/10 z-0" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E0E0E0] mb-3">
            My Tech Stack
          </h1>
          <p className="text-[#A0A0A0] max-w-md md:max-w-xl mx-auto text-sm sm:text-base">
            A curated collection of the tools and technologies I use, organized
            by category. Explore each to learn more about them.
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {techStackCategories.map((category) => (
            <TechCategory
              key={category.category}
              category={category}
              className="tech-category"
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/4 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#6C63FF] blur-[6px] sm:blur-[8px] opacity-70 animate-pulse" />
    </section>
  );
};

export default TechStack;
