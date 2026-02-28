import { motion } from "motion/react";
import { Youtube, Instagram, Twitter } from "lucide-react";

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
              <h3
                className="leading-[0.9] tracking-tight mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2rem,5vw,3.5rem)",
                }}
              >
                Afro-
                <br />
                <span className="relative inline-block">
                  Nated
                  <span className="absolute -right-3 top-0 w-2 h-2 bg-[#EF4444] rounded-full" />
                </span>
              </h3>
              <p className="text-[13px] leading-relaxed text-white/50 max-w-xs">
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
              {/*
                Link directly to the .html files in /public.
                Vite serves these as static assets, so /privacy.html always resolves correctly.
                Using /privacy (without extension) requires server-side rewrites which Vercel
                doesn't do by default for static files — hence the 404.
              */}
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
    </footer>
  );
}