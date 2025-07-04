import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { footerSocialLinks, footerLinks } from "../../Constants/index";
import Avatar from "../AboutMe/Avatar";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#121212] text-[#d4d4d4] border-t border-[#2a2a2a] px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12"
      >
        <motion.div className="flex flex-col gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#hero"
            className="flex items-center w-fit relative"
          >
            <motion.div
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-2xl bg-[#6C63FF] blur-md"
            />
            <motion.div
              initial={{ opacity: 0.7, scale: 1 }}
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute inset-0 rounded-2xl bg-[#7A72FF] blur-0"
            />
            <Avatar className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-contain relative z-10 border-2 border-[#6C63FF]/10" />
          </motion.a>
          <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
        </motion.div>
        {footerLinks.map((section, i) => (
          <motion.div key={i} className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
              {section.heading}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link, j) => (
                <li key={j}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="flex items-center text-sm hover:text-[#7A72FF] transition-colors group"
                  >
                    <span className="w-1 h-1 bg-[#6C63FF] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
        <motion.div className="space-y-4">
          <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
            Quick Contact
          </h3>
          <div className="space-y-3">
            <p className="text-sm">Have a project in mind?</p>
            <motion.a
              href="mailto:your.tusharjha55555@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-2 bg-[#6C63FF]/10 hover:bg-[#6C63FF]/20 border border-[#6C63FF]/30 rounded-lg text-sm transition-colors"
            >
              Let&apos;s Collaborate
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 border-t border-[#2a2a2a] pt-6 text-center"
      >
        <p className="text-sm text-neutral-500 mb-6">
          © {new Date().getFullYear()} Tushar Jha. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          {footerSocialLinks.map((social, index) => {
            const Icon = FaIcons[social.icon];
            return (
              <motion.a
                key={index}
                aria-label={social.label}
                href={social.href}
                className={`text-3xl text-neutral-400 ${social.color} transition-colors`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;