import { motion } from "framer-motion";

const Button = ({ name, isBeam = false, containerClass = "" }) => {
  return (
    <motion.button
      className={`flex gap-3 items-center justify-center cursor-pointer px-6 py-3 rounded-full shadow-lg transition-all bg-[#1E1E1E] hover:bg-[#2D2D2D] ring-2 ring-[#6C63FF]/50 hover:ring-[#7E76F5] active:scale-95 text-[#E0E0E0] font-medium mx-auto ${containerClass}`}
      initial={{ scale: 1 }}
      animate={{
        scale: isBeam ? 1.2 : 1,
      }}
      transition={{
        duration: isBeam ? 1 : 0.3,
        repeat: isBeam ? Infinity : 0,
        repeatType: "reverse",
        type: "spring",
        stiffness: 300,
        damping: 10,
      }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "#2D2D2D",
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        backgroundColor: "#1E1E1E",
      }}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6C63FF]/80"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6C63FF]"></span>
        </span>
      )}
      <span className="whitespace-nowrap">{name}</span>
    </motion.button>
  );
};

export default Button;
