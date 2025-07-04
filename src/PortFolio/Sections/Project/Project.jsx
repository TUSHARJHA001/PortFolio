import { ProjectCard } from "../../Constants/main";
import { motion } from "framer-motion";
import { Projects } from "../../Constants/index";

const Project = () => {
  return (
    <section
      className="flex flex-col justify-center items-center py-20 px-5 sm:px-10 bg-[#121212]"
      id="projects"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h5 className="text-lg font-semibold text-[#6C63FF] uppercase tracking-wider">
          My Work
        </h5>
        <h3 className="text-4xl font-bold text-[#E0E0E0] mt-3">
          Recent <span className="text-[#7A72FF]">Projects</span>
        </h3>
      </motion.div>

      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="mt-2 max-w-3xl text-center text-lg text-[#A0A0A0] leading-relaxed">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </p>
      </motion.div>
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl auto-rows-[minmax(0, _1fr)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        {Projects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
