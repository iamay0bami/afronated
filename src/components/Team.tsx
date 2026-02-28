import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

const team = [
  {
    id: 1,
    name: "Onahi Ijeh",
    role: "Founder & Creative Director",
    bio: "Storyteller, curator, and community builder.",
    image: "https://images.unsplash.com/photo-1619452220963-4da4e145aba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTg3NTM2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hoverImage: "https://images.unsplash.com/photo-1608651172105-659699bd9267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMG1hbiUyMGNyZWF0aXZlJTIwcG9ydHJhaXQlMjBkaWZmZXJlbnQlMjBwb3NlfGVufDF8fHx8MTc2OTg3NTM2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Gideon Blessing",
    role: "Content Lead",
    bio: "Producer and editor focused on visual narratives.",
    image: "https://images.unsplash.com/photo-1729075510531-bed3ee89bc6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFuJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzY5ODc1MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hoverImage: "https://images.unsplash.com/photo-1621972660772-6a0427d5e102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFuJTIwY2FzdWFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5ODc1MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Theonne Fred",
    role: "Community Manager",
    bio: "Connecting voices and building bridges.",
    image: "https://images.unsplash.com/photo-1662893965003-31ae7064ae9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBwb3J0cmFpdCUyMHN0dWRpb3xlbnwxfHx8fDE3Njk4NzUzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hoverImage: "https://images.unsplash.com/photo-1766107349536-c6de9ab38dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBjYXN1YWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk4NzUzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Phoebe Arome",
    role: "Music Curator",
    bio: "Championing emerging sounds and artists.",
    image: "https://images.unsplash.com/photo-1746104718762-fb421954cc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5ODc1MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hoverImage: "https://images.unsplash.com/photo-1766107349536-c6de9ab38dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBjYXN1YWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk4NzUzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="team" className="py-32 bg-black text-white">
      {/* Consistent content container — same max-width as all other sections */}
      <div className="afro-team-container">
        {/* Header */}
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 bg-[#EF4444]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">
              The People
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight">
            Meet the
            <br />
            Team
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {team.map((member, index) => (
            <TeamMember
              key={member.id}
              member={member}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Minimal CTA */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-[13px] text-white/40 mb-6">
            Want to join our collective?
          </p>
          <a
            href="mailto:afronated@gmail.com"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-white hover:text-[#EF4444] transition-colors group"
          >
            Get in Touch
            <span className="w-8 h-[1px] bg-white group-hover:bg-[#EF4444] group-hover:w-12 transition-all" />
          </a>
        </motion.div>
      </div>

      <style>{`
        .afro-team-container {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .afro-team-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
        @media (min-width: 1024px) {
          .afro-team-container {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

function TeamMember({ member, index, isInView }: { member: typeof team[0], index: number, isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-6 overflow-hidden">
        <div className="aspect-[3/4] relative">
          <img
            src={member.image}
            alt={member.name}
            className={`absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={member.hoverImage}
            alt={`${member.name} alternate pose`}
            className={`absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-t-2 border-l-2 border-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-[22px] tracking-tight text-white mb-1">
            {member.name}
          </h3>
          <div className="text-[11px] tracking-[0.2em] uppercase text-[#EF4444]">
            {member.role}
          </div>
        </div>
        <p className="text-[13px] leading-relaxed text-white/60">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}