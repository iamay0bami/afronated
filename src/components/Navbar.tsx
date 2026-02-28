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
    if (scrolled) setMenuOpen(false);
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
      {/* Content container — max 1200px, centred */}
      <div className="afro-navbar-inner">
        {/* Wordmark — far left */}
        <a
          href="#"
          className="afro-wordmark"
        >
          Afronated
        </a>

        {/* Desktop nav — hidden below 768px */}
        <nav className="afro-desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="afro-nav-link"
            >
              {link.label}
              <span className="afro-nav-underline" />
            </a>
          ))}
        </nav>

        {/* Hamburger — visible only below 768px */}
        <button
          className="afro-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.nav
          className="afro-mobile-nav"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="afro-mobile-nav-link"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}

      <style>{`
        /* ── Navbar container ── */
        .afro-navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ── Wordmark ── */
        .afro-wordmark {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.75rem;
          letter-spacing: 0.04em;
          line-height: 1;
          color: #000;
          text-decoration: none;
          flex-shrink: 0;
        }

        /* ── Desktop nav ── */
        .afro-desktop-nav {
          display: none; /* hidden on mobile by default */
          align-items: center;
          gap: 2rem;
        }
        .afro-nav-link {
          position: relative;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.55);
          text-decoration: none;
          transition: color 0.2s;
        }
        .afro-nav-link:hover { color: #000; }
        .afro-nav-underline {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #EF4444;
          transition: width 0.3s;
          display: block;
        }
        .afro-nav-link:hover .afro-nav-underline { width: 100%; }

        /* ── Hamburger ── */
        .afro-hamburger {
          display: block; /* shown on mobile */
          padding: 0.375rem;
          background: none;
          border: none;
          cursor: pointer;
          color: #000;
          line-height: 0;
        }

        /* ── Mobile dropdown ── */
        .afro-mobile-nav {
          background: #fff;
          border-top: 1px solid rgba(0,0,0,0.08);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .afro-mobile-nav-link {
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.7);
          text-decoration: none;
          transition: color 0.2s;
        }
        .afro-mobile-nav-link:hover { color: #EF4444; }

        /* ── Desktop breakpoint (768px+): show nav, hide hamburger ── */
        @media (min-width: 768px) {
          .afro-desktop-nav { display: flex; }
          .afro-hamburger   { display: none; }
          .afro-mobile-nav  { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}