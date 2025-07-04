import { education } from "../../Constants/main";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Carousel } from "../../Constants/main";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const Education = () => {
  const [carouselReady, setCarouselReady] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarouselReady(true);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeIn}
      aria-label="Education section"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-[#121212] overflow-hidden relative px-4 py-12 md:py-16"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#121212]/80 via-[#1E1E1E]/50 to-[#6C63FF]/10 z-0" />

      <motion.div variants={fadeInUp} className="w-full max-w-7xl p-4 z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
            My Educational Journey
          </h2>
          <p className="text-[#B8B8B8] max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            From foundational schooling to specialized higher education, my
            academic path reflects consistent growth and achievement.
          </p>
        </div>

        <motion.div
          variants={fadeInUp}
          className="w-full flex items-center justify-center"
        >
          <motion.div
            variants={fadeInUp}
            className="w-full h-[500px] sm:h-[550px] md:h-[600px] rounded-xl md:rounded-2xl border border-[#2D2D2D] shadow-lg transition-all duration-300 hover:border-[#7E76F5] hover:shadow-[0_0_20px_-5px_rgba(108,99,255,0.3)] bg-transparent overflow-hidden"
          >
            {loading ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-2 border:bg-[#6C63FF] mb-4"></div>
                  <p className="text-[#E0E0E0]">Loading education data...</p>
                </div>
              </div>
            ) : carouselReady ? (
              <Carousel
                slides={education}
                options={{
                  loop: true,
                  speed: 5000,
                  duration: 150,
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#E0E0E0]">
                Initializing carousel...
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-8 right-1/4 w-3 h-3 rounded-full bg-[#6C63FF] blur-[10px] animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
        className="absolute bottom-16 left-1/4 w-4 h-4 rounded-full bg-[#7E76F5] blur-[12px] animate-pulse"
      />
    </motion.section>
  );
};

export default Education;
