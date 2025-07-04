import { motion } from "framer-motion";

const EducationCard = ({
  degree,
  branch,
  marks,
  name,
  year,
  image,
  description,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col md:flex-row w-full h-full bg-[#121212]/30 backdrop-blur-lg rounded-xl overflow-hidden border border-[#ffffff]/10"
    >
      <div className="w-full md:w-2/5 h-48 md:h-full relative">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img
          src={image}
          alt={`${name} campus`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="w-full md:w-3/5 p-4 sm:p-6 flex flex-col h-full">
        <div className="flex-grow overflow-y-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white/90 mb-2">
            {name}
          </h3>
          <div className="text-gray-300/80 text-sm space-y-1 mb-3">
            <p>
              <span className="text-[#7E76F5]/90 font-medium">Degree:</span>{" "}
              {degree}
            </p>
            <p>
              <span className="text-[#7E76F5]/90 font-medium">Branch:</span>{" "}
              {branch}
            </p>
            <p>
              <span className="text-[#7E76F5]/90 font-medium">Marks:</span>{" "}
              {marks}
            </p>
            <p>
              <span className="text-[#7E76F5]/90 font-medium">Year:</span>{" "}
              {year}
            </p>
          </div>

          <div className="mt-4 p-3 bg-[#ffffff]/5 rounded-lg border border-[#ffffff]/10">
            <p className="text-gray-300/80 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>
       </div>
    </motion.div>
  );
};

export default EducationCard;
