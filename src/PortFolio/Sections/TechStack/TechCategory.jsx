import { motion } from "framer-motion";
import { TechTile } from "../../Constants/main";

const TechCategory = ({ category, className }) => {
  return (
    <div className={className}>
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E0E0E0] mb-4 sm:mb-6 md:mb-8 pl-2 border-l-4 border-[#6C63FF]"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {category.category}
      </motion.h2>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
        {category.items.map((item) => (
          <TechTile key={item.id} item={item} />
        ))}
      </div>
    </div>  
  );
};

export default TechCategory;
