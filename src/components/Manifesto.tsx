import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-16">
          {/* Left - Label */}
          <motion.div 
            className="col-span-12 lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-[#EF4444]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                  Our Purpose
                </span>
              </div>
              <div className="w-16 h-[1px] bg-[#EF4444]" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-12">
              <p className="text-[clamp(1.5rem,4vw,3rem)] leading-[1.3] tracking-tight">
                We exist at the intersection of culture, creativity, 
                and community.
              </p>

              <div className="space-y-6 max-w-2xl">
                <p className="text-[14px] leading-relaxed text-white/70">
                  Afro-Nated is more than content—it's a movement. We create space 
                  for emerging voices to tell their stories, share their craft, and 
                  connect with a global audience that values authenticity.
                </p>

                <p className="text-[14px] leading-relaxed text-white/70">
                  From interviews with rising creatives to deep dives into music 
                  culture, our platform celebrates the unfiltered, the bold, 
                  and the unapologetically real.
                </p>
              </div>

              <div className="pt-8 flex flex-wrap gap-8">
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-2">
                    Founded
                  </div>
                  <div className="text-[20px]">2023</div>
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-2">
                    Platform
                  </div>
                  <div className="text-[20px]">YouTube</div>
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-2">
                    Focus
                  </div>
                  <div className="text-[20px]">Youth Culture</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
