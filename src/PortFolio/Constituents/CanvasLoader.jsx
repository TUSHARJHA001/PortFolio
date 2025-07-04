import { motion } from "framer-motion";

const CanvasLoader = ({ progress = 0 }) => {
  const normalizedProgress = Math.min(progress, 99.9);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#121212]/90 z-50">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Your spinner JSX remains the same */}
        <div className="relative w-20 h-20 mb-6">
          <div className="absolute inset-0 rounded-full border-[3px] border-[#2D2D2D]/80" />
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#6C63FF] border-r-[#7E76F5]"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />
          <div
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-b-[#6C63FF]/30 border-l-[#7E76F5]/30"
            style={{
              clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 ${100 - normalizedProgress}%)`,
            }}
          />
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-[#E0E0E0] font-medium text-sm mb-1">
            {progress > 0 ? "Loading 3D assets" : "Initializing..."}
          </p>
          <p className="text-[#7A72FF] font-bold text-xl">
            {progress > 0 ? `${normalizedProgress.toFixed(1)}%` : "..."}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CanvasLoader;