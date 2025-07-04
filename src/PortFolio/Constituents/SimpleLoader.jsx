import { motion } from "framer-motion";

const SimpleLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center bg-[#121212]/90 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <motion.div
          className="h-16 w-16 rounded-full border-t-4 border-b-4 border-[#6C63FF]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 h-2 w-2 -mt-1 -ml-1 bg-[#7E76F5] rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default SimpleLoader;
