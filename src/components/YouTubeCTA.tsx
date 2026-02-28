import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Youtube } from "lucide-react";

export function YouTubeCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-40 bg-black text-white relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-0 w-64 h-64 bg-[#EF4444] opacity-5 blur-3xl"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tight mb-8">
              Watch Us
              <br />
              <span className="relative inline-block">
                On YouTube
                <motion.span
                  className="absolute -top-4 -right-4 w-4 h-4 bg-[#EF4444]"
                  initial={{ rotate: 0 }}
                  animate={isInView ? { rotate: 45 } : {}}
                  transition={{ delay: 0.5, type: "spring" }}
                />
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-[14px] leading-relaxed text-white/60 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Subscribe to our channel for interviews, behind-the-scenes content,
            and exclusive conversations with emerging creatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="https://www.youtube.com/@Afronated"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-[#EF4444] text-white hover:bg-white hover:text-black transition-colors text-[12px] tracking-[0.15em] uppercase relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Youtube className="w-5 h-5" />
                Subscribe Now
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </motion.div>

          {/* Stats removed brand is growing, authenticity over vanity numbers */}
        </div>
      </div>
    </section>
  );
}