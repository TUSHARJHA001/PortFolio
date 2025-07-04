import React from "react";
import { Suspense, lazy, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "../../Constants/index";
const Button = lazy(() => import("./Button"));

const HeroButton = () => {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center pt-6 gap-4">
      <motion.div
        className="w-fit"
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowSocial(!showSocial)}
      >
        <Suspense fallback={<span>Loading...</span>}>
          <Button
            name={showSocial ? "close" : "let's connect"}
            isBeam={!showSocial}
            containerClass="sm:w-fit w-11/12 sm:min-w-96 hover:scale-105 transition-transform duration-300"
          />
        </Suspense>
      </motion.div>

      <AnimatePresence>
        {showSocial && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex gap-4 mt-2"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#E0E0E0] transition-all duration-300 ${social.bgColor} border ${social.borderColor} hover:shadow-lg hover:shadow-[#6C63FF]/20`}
                aria-label={`${social.name} link`}
              >
                {React.createElement(social.icon, { className: "w-5 h-5" })}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroButton;
