import { motion, useScroll } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsubscribe;
  }, [scrollY]);

  const navLinks = [
    { label: "About", href: "#manifesto" },
    { label: "Watch", href: "#interviews" },
    { label: "Submit", href: "#submissions" },
    { label: "Team", href: "#team" },
    { label: "Partner", href: "#partnerships" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-sm border-b border-black/8" : "bg-transparent"
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Wordmark logo */}
        <a
          href="#"
          className={`transition-colors duration-300`}
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", letterSpacing: "0.02em", lineHeight: 1 }}
        >
          <span className={scrolled ? "text-black" : "text-black"}>
            Afro-Nated
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[10px] tracking-[0.2em] uppercase text-black/60 hover:text-black transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#EF4444] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-black/10 px-6 py-8 flex flex-col gap-5"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[12px] tracking-[0.2em] uppercase text-black/70 hover:text-[#EF4444] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
