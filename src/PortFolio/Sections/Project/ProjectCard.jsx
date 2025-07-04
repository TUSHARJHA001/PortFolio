import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  description,
  subdesc, 
  tags,
  image,
  iconStyle,
  href,
}) => {
  return (
    <motion.div
      className="w-full sm:w-[360px] h-full flex"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.03,
          speed: 500,
          glare: true,
          "max-glare": 0.1,
        }}
        className="flex flex-col justify-between rounded-2xl p-4 bg-[#1E1E1E] border border-[#2D2D2D] hover:border-[#6C63FF]/50 transition-all duration-300 shadow-lg w-full"
      >
        <div className="relative w-full h-52 group">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl group-hover:opacity-80 transition-opacity"
          />
          <div className="absolute inset-0 flex justify-end m-3">
            <motion.div
              className="w-10 h-10 rounded-full bg-[#121212] flex justify-center items-center cursor-pointer shadow-md hover:bg-[#6C63FF] transition-colors"
              onClick={() => window.open(href, "_blank")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub style={iconStyle} className="text-xl" />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-between mt-5 px-2">
          <div>
            <h3 className="text-[#E0E0E0] font-bold text-xl">{name}</h3>
            <p className="text-[#A0A0A0] mt-2 text-sm leading-relaxed">
              {description}
            </p>
            <p className="text-[#888888] mt-2 text-xs leading-snug whitespace-pre-wrap">
              {subdesc}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 pb-2">
            {tags.map((tag) => (
              <motion.span
                key={tag.id}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[#2D2D2D] text-[#6C63FF] border border-[#6C63FF]/20"
                whileHover={{ scale: 1.05 }}
              >
                #{tag.name}
              </motion.span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
