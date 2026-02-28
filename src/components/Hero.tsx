import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left side */}
          <motion.div
            className="lg:col-span-7"
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

          {/* Right side image — hidden on mobile */}
          <motion.div
            className="hidden lg:block lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-full h-full border-2 border-[#EF4444] z-0" />
              <img
                src="https://images.unsplash.com/photo-1764069415077-a5af441778d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGN1bHR1cmUlMjB1cmJhbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTUyODExMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Youth culture"
                className="relative z-10 w-full h-[500px] object-cover grayscale"
              />
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#EF4444]"
        initial={{ width: 0 }}
        animate={{ width: "30%" }}
        transition={{ delay: 1, duration: 1 }}
      />
    </section>
  );
}