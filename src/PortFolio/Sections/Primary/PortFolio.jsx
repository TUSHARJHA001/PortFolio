import {
  Hero,
  AboutMe,
  Navbar,
  Project,
  Footer,
  Education,
  TechStack,
} from "../../Constants/main";
import { motion } from "framer-motion";

const PortFolio = () => {
  return (
    <div className="font-sans text-[#E0E0E0] bg-[#121212] selection:bg-[#6C63FF]/50">
      <Navbar />
      <main className="overflow-x-hidden">
        <motion.section
          id="hero"
          className="min-h-screen flex items-center justify-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
        </motion.section>
        <motion.section
          id="aboutme"
          className="min-h-screen flex items-center justify-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AboutMe />
        </motion.section>
        <motion.section 
          id="education"
          className="py-20 px-5 sm:px-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Education />
        </motion.section>
        <motion.section
          id="techstack"
          className="py-20 px-5 sm:px-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <TechStack />
        </motion.section>
        <motion.section
          id="projects"
          className="py-20 px-5 sm:px-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Project />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default PortFolio;
