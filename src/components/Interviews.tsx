import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const interviews = [
  {
    id: 1,
    title: "Behind the Creative: An Interview with an Artist",
    guest: "Psamuel",
    videoId: "YnsnAwQaZhM", // Replace with actual YouTube video IDs
    description: "An intimate conversation about creative process and cultural identity.",
  },
  {
    id: 2,
    title: "Behind the Creative: An interview with Visual Creator",
    guest: "Halimah Agbaje",
    videoId: "zHtjLi-8_sc",
    description: "Exploring narrative through visual media and community engagement.",
  },
  {
    id: 3,
    title: "Behind the Creative: An interview with an Artist",
    guest: "Lasko Blark",
    videoId: "jf2N-WFeEGQ",
    description: "Behind the beats with emerging producers shaping the sound.",
  },
];

export function Interviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="interviews" ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start justify-between flex-wrap gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-2 bg-[#EF4444]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">
                  Featured Content
                </span>
              </div>
              <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight text-black">
                Interviews
              </h2>
            </div>
            <div className="max-w-md pt-8">
              <p className="text-[13px] leading-relaxed text-black/60">
                Unfiltered conversations with creators, artists, and change-makers 
                shaping culture from the ground up.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="space-y-24">
          {interviews.map((interview, index) => (
            <motion.div
              key={interview.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={`grid grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""
              }`}
            >
              {/* Video */}
              <div className="col-span-12 lg:col-span-7">
                <div className="relative aspect-video bg-black group overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${interview.videoId}`}
                    title={interview.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 border-2 border-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>

              {/* Info */}
              <div className="col-span-12 lg:col-span-5">
                <div className="space-y-4">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#EF4444]">
                    {interview.guest}
                  </div>
                  <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.1] tracking-tight text-black">
                    {interview.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-black/60">
                    {interview.description}
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${interview.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-black hover:text-[#EF4444] transition-colors group pt-4"
                  >
                    Watch on YouTube
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Red divider */}
      <div className="container mx-auto px-6 mt-32">
        <motion.div 
          className="h-[2px] bg-[#EF4444]"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ delay: 0.8, duration: 1.2 }}
        />
      </div>
    </section>
  );
}
