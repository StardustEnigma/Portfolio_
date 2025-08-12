import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const linkHover = {
  whileHover: { scale: 1.12, color: "#00f5ff" },
  whileTap: { scale: 0.96 },
  transition: { type: "spring", stiffness: 280 },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // ✅ Close menu automatically when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          fixed top-6 left-1/2 -translate-x-1/2 z-50
          w-[95%] max-w-6xl
          flex items-center justify-between
          px-6 sm:px-10 md:px-12 py-3
          bg-[rgba(20,40,65,0.85)]
          backdrop-blur-2xl
          border border-cyan-400/60
          rounded-full
          shadow-[0_0_25px_rgba(0,255,255,0.4)]
          hover:shadow-[0_0_45px_rgba(0,255,255,0.8)]
          transition-all duration-300
        "
      >
        {/* Logo */}
        <motion.div
          {...linkHover}
          className="
            text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-widest
            bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400
            bg-clip-text text-transparent
            uppercase
            select-none cursor-pointer
          "
        >
          <Link to="/">ATHARVA</Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 lg:gap-14 text-white text-lg lg:text-xl font-semibold">
          {links.map((link, i) => (
            <motion.div
              key={i}
              {...linkHover}
              className="relative pb-1 group cursor-pointer"
            >
              <Link to={link.url} className="text-white">
                {link.name}
              </Link>
              <span
                className="
                  absolute left-0 -bottom-1 h-[3px]
                  bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400
                  w-0 group-hover:w-full transition-all duration-300 rounded
                "
              />
            </motion.div>
          ))}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="flex md:hidden items-center focus:outline-none p-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-cyan-300"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22 }}
            className="
              fixed top-[68px] left-1/2 -translate-x-1/2 z-40
              bg-[rgba(15,25,40,0.95)]
              border border-cyan-400/60
              shadow-[0_0_25px_rgba(0,255,255,0.4)]
              backdrop-blur-xl
              rounded-3xl
              w-[95%] max-w-sm p-6 flex flex-col items-center gap-6
              md:hidden
            "
          >
            {links.map((link, i) => (
              <motion.div key={i} {...linkHover} className="w-full">
                <Link
                  to={link.url}
                  className="text-white text-lg font-bold w-full text-center py-2 rounded-xl hover:bg-cyan-500/20 transition block"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
