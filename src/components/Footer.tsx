import { motion } from "motion/react";
import { Youtube, Instagram, Twitter } from "lucide-react";

// White logo for dark footer background
const LOGO_WHITE = "data:image/png;base64,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";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Left - Branding */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Stylized logo replaces the Bebas Neue text block */}
              <div className="afro-footer-logo-wrap">
                <img
                  src={LOGO_WHITE}
                  alt="Afronated"
                  className="afro-footer-logo"
                />
              </div>
              <p className="text-[13px] leading-relaxed text-white/50 max-w-xs mt-6">
                A creative media collective amplifying youth voices through
                storytelling and culture.
              </p>
            </motion.div>
          </div>

          {/* Middle - Links */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
                Quick Links
              </div>
              <nav className="space-y-3">
                <a href="#interviews" className="block text-[13px] text-white/70 hover:text-[#EF4444] transition-colors">Interviews</a>
                <a href="#submissions" className="block text-[13px] text-white/70 hover:text-[#EF4444] transition-colors">Submit Work</a>
                <a href="#team" className="block text-[13px] text-white/70 hover:text-[#EF4444] transition-colors">Team</a>
                <a href="#partnerships" className="block text-[13px] text-white/70 hover:text-[#EF4444] transition-colors">Partnerships</a>
              </nav>
            </motion.div>
          </div>

          {/* Right - Social */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">
                Connect
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.youtube.com/@Afronated" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#EF4444] hover:text-[#EF4444] transition-colors" aria-label="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="https://instagram.com/afro.nated" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#EF4444] hover:text-[#EF4444] transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://tiktok.com/@afronated" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#EF4444] hover:text-[#EF4444] transition-colors" aria-label="TikTok">
                  <TikTokIcon className="w-4 h-4" />
                </a>
                <a href="https://x.com/AfroNated" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#EF4444] hover:text-[#EF4444] transition-colors" aria-label="Twitter / X">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-8 space-y-2">
                <a href="mailto:afronated@gmail.com"
                  className="block text-[13px] text-white/50 hover:text-[#EF4444] transition-colors">
                  afronated@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white/30">
            <div>© {currentYear} Afronated. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="/privacy.html" className="hover:text-[#EF4444] transition-colors">Privacy</a>
              <a href="/terms.html" className="hover:text-[#EF4444] transition-colors">Terms</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-[#EF4444] opacity-5 blur-3xl pointer-events-none"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />

      <style>{`
        /* Footer logo wrapper — replaces old Bebas Neue Afro-/Nated text block */
        .afro-footer-logo-wrap {
          display: inline-block;
        }

        .afro-footer-logo {
          /* The white PNG renders crisp on the black footer bg.
             Width matches the old clamp(2rem,5vw,3.5rem) two-line heading footprint. */
          height: auto;
          width: clamp(160px, 30vw, 240px);
          object-fit: contain;
          display: block;
        }
      `}</style>
    </footer>
  );
}