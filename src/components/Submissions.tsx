import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";

export function Submissions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    intent: "",
    social: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // ─── CONNECT FORMSPREE: replace YOUR_FORM_ID ───
    // const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    // ─────────────────────────────────────────────
    await new Promise((r) => setTimeout(r, 600));
    toast.success("We got you! We'll be in touch soon.", {
      description: "Welcome to the collective.",
    });
    setFormData({ name: "", email: "", intent: "", social: "", message: "" });
    setSubmitting(false);
  };

  const inputClass =
    "w-full bg-transparent border-b-2 border-black/20 focus:border-[#EF4444] outline-none py-3 text-[14px] transition-colors placeholder:text-black/30";

  return (
    <section ref={ref} id="submissions" className="afro-submissions-section">
      <div className="afro-submissions-container">

        {/* Section label + heading — sits above the two-column grid */}
        <motion.div
          className="afro-submissions-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-2 bg-[#EF4444]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">
              Get Involved
            </span>
          </div>
          <h2
            className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight text-black"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Put Me On
          </h2>
        </motion.div>

        {/* Two-column layout: write-up left, form right */}
        <div className="afro-submissions-grid">

          {/* Left — description & bullet points */}
          <motion.div
            className="afro-submissions-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="space-y-6">
                <p className="text-[14px] leading-relaxed text-black/70">
                  Are you an artist or musician? Know someone we should feature?
                  Want to collaborate? We'd love to hear from you.
                </p>
                <div className="space-y-4">
                  {[
                    "Submit your music or creative projects",
                    "Request an interview or feature",
                    "Collaboration ideas",
                    "Just want to be part of the community",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-[#EF4444] mt-2 shrink-0" />
                      <p className="text-[13px] text-black/60">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[13px] text-black/50 pt-2">
                Or email us directly at{" "}
                <a
                  href="mailto:afronated@gmail.com"
                  className="text-[#EF4444] hover:underline"
                >
                  afronated@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="afro-submissions-right"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] tracking-[0.15em] uppercase text-black/50">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] tracking-[0.15em] uppercase text-black/50">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] tracking-[0.15em] uppercase text-black/50">
                    I want to... *
                  </label>
                  <select
                    required
                    value={formData.intent}
                    onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Select...</option>
                    <option value="submit-story">Submit my story</option>
                    <option value="recommend">Recommend someone to feature</option>
                    <option value="collaborate">Collaborate with Afronated</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] tracking-[0.15em] uppercase text-black/50">
                    Social Handle
                  </label>
                  <input
                    type="text"
                    value={formData.social}
                    onChange={(e) => setFormData({ ...formData, social: e.target.value })}
                    className={inputClass}
                    placeholder="@yourhandle"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] tracking-[0.15em] uppercase text-black/50">
                  Tell Us More *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className={`${inputClass} resize-none`}
                  placeholder="Your vision, links to your work, what you'd like to collaborate on..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative px-10 py-4 bg-black text-white text-[11px] tracking-[0.2em] uppercase overflow-hidden disabled:opacity-50 transition-opacity"
                >
                  <span className="relative z-10">
                    {submitting ? "Sending..." : "Submit"}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-[#EF4444]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        /*  Generous vertical padding — "airy" feel matching other sections  */
        .afro-submissions-section {
          padding-top: 80px;
          padding-bottom: 80px;
          background: #fff;
        }
        @media (min-width: 1024px) {
          .afro-submissions-section {
            padding-top: 120px;
            padding-bottom: 120px;
          }
        }

        /*  Container — identical to Hero / Manifesto / Interviews  */
        .afro-submissions-container {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .afro-submissions-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
        @media (min-width: 1024px) {
          .afro-submissions-container {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        /*  Section heading above the grid  */
        .afro-submissions-header {
          margin-bottom: 3rem;
        }
        @media (min-width: 1024px) {
          .afro-submissions-header {
            margin-bottom: 4rem;
          }
        }

        /*  Mobile: single column  */
        .afro-submissions-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .afro-submissions-left,
        .afro-submissions-right {
          width: 100%;
        }

        /*  Desktop 1024px+: two columns, write-up 5fr | form 7fr  */
        @media (min-width: 1024px) {
          .afro-submissions-grid {
            display: grid;
            grid-template-columns: 5fr 7fr;
            gap: 5rem;
            align-items: start;
          }
        }
      `}</style>
    </section>
  );
}