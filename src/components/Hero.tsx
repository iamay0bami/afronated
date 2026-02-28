import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      <div className="afro-container" style={{ paddingTop: "6rem", paddingBottom: "5rem" }}>
        <div className="afro-hero-grid">

          {/* Text content */}
          <motion.div
            className="afro-hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-black/60">
                  Creative Media Collective
                </span>
              </motion.div>

              <h1 className="leading-[0.88] tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span
                  className="block text-black"
                  style={{ fontSize: "clamp(3.5rem, 13vw, 10rem)", letterSpacing: "-0.01em" }}
                >
                  Afro-
                </span>
                <span
                  className="block text-black relative"
                  style={{ fontSize: "clamp(3.5rem, 13vw, 10rem)", letterSpacing: "-0.01em" }}
                >
                  Nated
                  <motion.span
                    className="absolute -right-4 top-0 w-3 h-3 bg-[#EF4444] rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                  />
                </span>
              </h1>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-md"
              >
                <p className="text-[13px] leading-relaxed text-black/70">
                  Amplifying youth voices through storytelling, music culture,
                  and community-driven creative expression.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-4"
              >
                <a
                  href="#interviews"
                  className="group inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-black hover:text-[#EF4444] transition-colors"
                >
                  Explore Content
                  <span className="w-12 h-[1px] bg-black group-hover:bg-[#EF4444] group-hover:w-16 transition-all" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop image — shown side-by-side on 1024px+ */}
          <motion.div
            className="afro-hero-image-desktop"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div
                style={{
                  position: "absolute",
                  top: "-1.5rem",
                  left: "-1.5rem",
                  right: "1.5rem",
                  bottom: "-1.5rem",
                  border: "2px solid #EF4444",
                  zIndex: 0,
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1764069415077-a5af441778d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGN1bHR1cmUlMjB1cmJhbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTUyODExMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Youth culture"
                className="relative z-10 w-full object-cover grayscale"
                style={{ height: "420px" }}
              />
            </div>
          </motion.div>

          {/* Mobile image — stacks below text on small screens */}
          <motion.div
            className="afro-hero-image-mobile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1764069415077-a5af441778d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGN1bHR1cmUlMjB1cmJhbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTUyODExMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Youth culture"
              className="w-full object-cover grayscale"
              style={{ height: "300px", objectPosition: "center top" }}
            />
          </motion.div>

        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#EF4444]"
        initial={{ width: 0 }}
        animate={{ width: "30%" }}
        transition={{ delay: 1, duration: 1 }}
      />

      <style>{`
        .afro-container {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        /* Mobile: flex column, centered text, image below */
        .afro-hero-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          align-items: stretch;
        }
        .afro-hero-text {
          text-align: center;
        }
        .afro-hero-image-desktop {
          display: none;
        }
        .afro-hero-image-mobile {
          display: block;
          width: 100%;
        }

        /* Tablet 768–1023px: text left-aligned, mobile image still shows */
        @media (min-width: 768px) and (max-width: 1023px) {
          .afro-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          .afro-hero-text {
            text-align: left;
          }
          .afro-hero-image-mobile {
            height: 380px;
          }
        }

        /* Desktop 1024px+: side-by-side grid */
        @media (min-width: 1024px) {
          .afro-container {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          .afro-hero-grid {
            display: grid;
            grid-template-columns: 7fr 5fr;
            gap: 3rem;
            align-items: center;
          }
          .afro-hero-text {
            text-align: left;
          }
          .afro-hero-image-desktop {
            display: block;
          }
          .afro-hero-image-mobile {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}