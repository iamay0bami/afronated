import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="manifesto" className="py-20 sm:py-32 bg-black text-white">
      <div className="afro-manifesto-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          <motion.div
            className="lg:col-span-3"
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

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Increased spacing throughout for that airy Figma feel */}
            <div className="afro-manifesto-content">
              <p
                className="afro-manifesto-headline"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                We exist at the intersection of culture, creativity,
                and community.
              </p>

              <div className="afro-manifesto-body">
                <p className="afro-manifesto-paragraph">
                  Afronated is more than content — it's a movement. We create space
                  for emerging voices to tell their stories, share their craft, and
                  connect with a global audience that values authenticity.
                </p>
                <p className="afro-manifesto-paragraph">
                  From interviews with rising artists to deep dives into music
                  culture, our platform celebrates the unfiltered, the bold,
                  and the unapologetically real.
                </p>
              </div>

              <div className="afro-manifesto-stats">
                {[
                  { label: "Founded", value: "2023" },
                  { label: "Platform", value: "YouTube" },
                  { label: "Focus", value: "Youth Culture" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-2">{item.label}</div>
                    <div className="text-[20px]">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .afro-manifesto-container {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 1024px) {
          .afro-manifesto-container {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 4rem;
            padding-right: 4rem;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .afro-manifesto-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        /* Content spacing — tighter on mobile, airy on desktop */
        .afro-manifesto-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .afro-manifesto-headline {
          font-size: clamp(1.6rem, 4vw, 3rem);
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: #fff;
          margin-bottom: 0;
        }

        .afro-manifesto-body {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 42rem;
        }

        .afro-manifesto-paragraph {
          font-size: 14px;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
        }

        .afro-manifesto-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        /* Desktop: increase all spacing significantly */
        @media (min-width: 1024px) {
          .afro-manifesto-content {
            gap: 3rem;
          }
          .afro-manifesto-headline {
            line-height: 1.25;
          }
          .afro-manifesto-body {
            gap: 2rem;
          }
          .afro-manifesto-paragraph {
            font-size: 15px;
            line-height: 1.9;
          }
          .afro-manifesto-stats {
            gap: 3rem;
            padding-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
}