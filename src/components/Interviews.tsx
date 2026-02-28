import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Youtube } from "lucide-react";

const interviews = [
  {
    id: 1,
    title: "Behind the Creative: An Interview with an Artist",
    guest: "Psamuel",
    videoId: "YnsnAwQaZhM",
    watchUrl: "https://www.youtube.com/watch?v=YnsnAwQaZhM&t=173s",
    description: "An intimate conversation about creative process and cultural identity.",
  },
  {
    id: 2,
    title: "Behind the Creative: An Interview with a Visual Creator",
    guest: "Halimah Agbaje",
    videoId: "zHtjLi-8_sc",
    watchUrl: "https://www.youtube.com/watch?v=zHtjLi-8_sc",
    description: "Exploring narrative through visual media and community engagement.",
  },
  {
    id: 3,
    title: "Behind the Creative: An Interview with an Artist",
    guest: "Lasko Blark",
    videoId: "jf2N-WFeEGQ",
    watchUrl: "https://www.youtube.com/watch?v=jf2N-WFeEGQ",
    description: "Behind the beats with emerging producers shaping the sound.",
  },
];

export function Interviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="interviews" ref={ref} className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">

        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-[#EF4444]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">Featured Content</span>
              </div>
              <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight text-black">
                Interviews
              </h2>
            </div>
            <div className="max-w-md sm:pt-8">
              <p className="text-[13px] leading-relaxed text-black/60">
                Unfiltered conversations with creators, artists, and change-makers
                shaping culture from the ground up.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-16 sm:space-y-24">
          {interviews.map((interview, index) => (
            <motion.div
              key={interview.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Thumbnail — click opens YouTube */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                
                  href={interview.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-video bg-black overflow-hidden"
                  aria-label={`Watch ${interview.title} on YouTube`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${interview.videoId}/maxresdefault.jpg`}
                    alt={interview.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://img.youtube.com/vi/${interview.videoId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#EF4444] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Youtube className="w-7 h-7 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Info */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
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
                  
                    href={interview.watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-black hover:text-[#EF4444] transition-colors group pt-4"
                  >
                    Watch on YouTube
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 mt-20 sm:mt-32">
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