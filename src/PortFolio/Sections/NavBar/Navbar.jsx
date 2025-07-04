import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { navLinks } from "../../Constants/index";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(window.scrollY);
    setHasScrolled(true);
    for (const link of navLinks) {
      const sectionId = link.href.slice(1);
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setIsOpen(false);
      }, 100);
    } else {
      setIsOpen(false);
    }
  };

  const NavItems = ({ onClick }) => (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navLinks.map(({ id, href, name }) => {
        const sectionId = href.slice(1);
        return (
          <motion.li
            key={id}
            initial={
              hasScrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: id * 0.1 }}
            whileHover={{
              scale: 1.05,
              transition: { stiffness: 300, damping: 20 },
            }}
            className="font-medium max-sm:w-full max-sm:text-center"
          >
            <button
              onClick={() => {
                scrollToSection(href);
                onClick?.();
              }}
              className={`text-lg md:text-base transition-colors duration-200 py-2 px-3 rounded-md ${
                activeSection === sectionId
                  ? "text-[#7A72FF] font-semibold"
                  : "text-[#E0E0E0] hover:text-[#7A72FF]"
              }`}
              aria-label={`Scroll to ${name} section`}
            >
              {name}
            </button>
          </motion.li>
        );
      })}
    </ul>
  );

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 border-b border-[#2D2D2D] bg-[#1E1E1E]/95 backdrop-blur-md ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center p-5 mx-auto sm:px-10 px-5">
          <motion.button
            onClick={() => scrollToSection("#hero")}
            className="text-2xl font-bold text-[#E0E0E0] hover:text-[#7A72FF] transition-colors"
            whileHover={{ scale: 1.05 }}
            aria-label="Scroll to top"
          >
            Tushar
          </motion.button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#E0E0E0] font-bold text-xl hover:text-[#7A72FF] transition-colors sm:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5M3.75 9.75h16.5M3.75 14.25h16.5"
                />
              </svg>
            )}
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 bg-[#1E1E1E] backdrop-blur-lg overflow-hidden z-20 mx-auto sm:hidden block border-t border-[#2D2D2D]"
          >
            <motion.nav
              className="p-5"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <NavItems onClick={() => setIsOpen(false)} />
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
