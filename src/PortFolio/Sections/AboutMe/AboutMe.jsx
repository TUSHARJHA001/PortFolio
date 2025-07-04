import { motion } from "framer-motion";
import Avatar from "./Avatar";

const AboutMe = () => {
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

  const profileBoxVariants = {
    hidden: {
      opacity: 0,
      rotateY: 90,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: [0, 0.75, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeIn}
      aria-label="About me section"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-[#121212] overflow-hidden relative px-4 py-12 md:py-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#121212]/80 via-[#1E1E1E]/50 to-[#6C63FF]/10 z-0" />

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

      <motion.div variants={fadeInUp} className="w-full max-w-7xl p-4 z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
            About <span className="text-[#6C63FF]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#6C63FF] rounded-full mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/*Profile Box Animation */}
          <motion.div
            variants={profileBoxVariants}
            initial="hidden"
            animate="show"
            whileHover="hover"
            className="lg:w-1/2 relative group"
          >
            {/*Glow Effect */}
            <motion.div
              variants={glowVariants}
              className="absolute -inset-1 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] rounded-2xl blur opacity-0"
            />

            {/*Profile Box */}
            <div className="relative bg-[#1E1E1E] rounded-2xl p-0.5 h-full overflow-hidden">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.3 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent"
              />

              <Avatar className="w-full h-auto rounded-2xl object-cover transform transition-transform duration-300 group-hover:scale-[1.01]" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white">
              Full-Stack Developer &{" "}
              <span className="text-[#6C63FF]">Problem Solver</span>
            </h3>

            <div className="space-y-4 text-[#E0E0E0]/80">
              <p className="text-sm sm:text-base">
                A 3rd-year IT student at KIET Group of Institutions with a CGPA
                of 8.3, proficient in{" "}
                <span className="text-[#6C63FF] font-medium">
                  frontend development
                </span>{" "}
                with expertise in{" "}
                <span className="text-[#6C63FF] font-medium">
                  React, JavaScript, and Tailwind CSS
                </span>
                , and backend solutions with{" "}
                <span className="text-[#6C63FF] font-medium">AppWrite</span>.
              </p>

              <p className="text-sm sm:text-base">
                With{" "}
                <span className="text-[#6C63FF] font-medium">
                  100+ LeetCode problems
                </span>{" "}
                solved, I've developed strong analytical skills and the ability
                to write optimized algorithms. This rigorous DSA practice
                translates directly to building efficient, scalable
                applications.
              </p>

              <div className="pt-4">
                <h4 className="text-[#B8B8B8] mb-3 text-sm sm:text-base">
                  Technical Skills:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "JavaScript (ES6+)",
                    "React",
                    "Tailwind CSS",
                    "Three.js",
                    "Framer Motion",
                    "Python",
                    "Java",
                    "C/C++",
                    "MongoDB",
                    "SQL",
                    "AWS",
                    "Azure",
                    "Web APIs",
                    "Git",
                    "VS Code",
                    "Figma",
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + index * 0.05,
                        ease: "backOut",
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#6C63FF",
                        color: "#121212",
                      }}
                      className="px-3 py-1.5 bg-[#1E1E1E] rounded-full text-xs sm:text-sm border border-[#2D2D2D] hover:border-[#6C63FF] transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-[#1E1E1E] p-4 rounded-lg border border-[#2D2D2D] hover:border-[#6C63FF] transition-all"
                >
                  <h4 className="text-[#6C63FF] text-sm font-medium">
                    LeetCode Solved
                  </h4>
                  <motion.p
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 15,
                      delay: 0.8,
                    }}
                    className="text-2xl text-[#B8B8B8] font-bold mt-1"
                  >
                    100+ Problems
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
