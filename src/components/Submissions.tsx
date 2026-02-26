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
    type: "",
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
    await new Promise((r) => setTimeout(r, 600)); // remove when live
    toast.success("We got you! We'll be in touch soon.", {
      description: "Welcome to the collective.",
    });
    setFormData({ name: "", email: "", type: "", social: "", message: "" });
    setSubmitting(false);
  };

  const inputClass =
    "w-full bg-transparent border-b-2 border-black/20 focus:border-[#EF4444] outline-none py-3 text-[14px] transition-colors placeholder:text-black/30";

  return (
    <section ref={ref} id="submissions" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-16">
          {/* Left */}
          <motion.div
            className="col-span-12 lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:sticky lg:top-32 space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-2 h-2 bg-[#EF4444]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">
                    Get Involved
                  </span>
                </div>
                <h2 className="text-[clamp(2rem,6vw,4rem)] leading-[0.95] tracking-tight text-black">
                  Put Me On
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-[14px] leading-relaxed text-black/70">
                  Have a story to tell? Know a creative we should feature? Want to collaborate? We'd love to hear from you.
                </p>
                <div className="space-y-4">
                  {[
                    "Original music, videos, or creative projects",
                    "Interview requests or collaboration ideas",
                    "Event coverage or feature suggestions",
                    "Just want to be part of the community",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-[#EF4444] mt-2 shrink-0" />
                      <p className="text-[13px] text-black/60">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email list subscribe */}
              <div className="pt-4 border-t border-black/10">
                <p className="text-[11px] tracking-[0.15em] uppercase text-black/40 mb-4">
                  Or just stay in the loop
                </p>
                <div className="flex gap-0">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent border border-black/20 px-4 py-3 text-[13px] focus:border-[#EF4444] outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => toast.success("You're on the list!")}
                    className="bg-black text-white px-6 py-3 text-[11px] tracking-[0.15em] uppercase hover:bg-[#EF4444] transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1 space-y-2">
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
                <div className="col-span-2 sm:col-span-1 space-y-2">
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

              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1 space-y-2">
                  <label className="text-[11px] tracking-[0.15em] uppercase text-black/50">
                    Creative Type *
                  </label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Select...</option>
                    <option value="musician">Submit my story</option>
                    <option value="visual">Recommend someone to feature</option>
                    <option value="filmmaker">Collaborate with Afro-Nated</option>
                    <option value="writer">Something else</option>
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1 space-y-2">
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

              <div className="pt-4">
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
    </section>
  );
}
