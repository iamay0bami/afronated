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

  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
  }, [scrolled]);

  const navLinks = [
    { label: "About",   href: "#manifesto" },
    { label: "Watch",   href: "#interviews" },
    { label: "Submit",  href: "#submissions" },
    { label: "Team",    href: "#team" },
    { label: "Partner", href: "#partnerships" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/96 backdrop-blur-sm border-b border-black/8 shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Wordmark text logo, click scrolls to top */}
        <a
          href="#"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.75rem",
            letterSpacing: "0.04em",
            lineHeight: 1,
            color: "#000",
            textDecoration: "none",
          }}
        >
          Afronated
        </a>

        {/* Desktop nav hidden on mobile (below md) */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[10px] tracking-[0.25em] uppercase text-black/55 hover:text-black transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#EF4444] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Hamburger visible only on mobile (below md) */}
        <button
          className="md:hidden p-1.5 text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown only renders on small screens */}
      {menuOpen && (
        <motion.nav
          className="md:hidden bg-white border-t border-black/8 px-6 py-6 flex flex-col gap-5"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[13px] tracking-[0.2em] uppercase text-black/70 hover:text-[#EF4444] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}