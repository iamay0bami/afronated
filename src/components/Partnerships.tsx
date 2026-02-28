import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";

export function Partnerships() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    type: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // ─── CONNECT FORMSPREE: uncomment & replace YOUR_FORM_ID ───
    // const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    // ───────────────────────────────────────────────────────────
    await new Promise((r) => setTimeout(r, 600));
    toast.success("We'll be in touch soon!", {
      description: "Our team will review your inquiry.",
    });
    setFormData({ name: "", email: "", org: "", type: "", message: "" });
    setSubmitting(false);
  };

  const inputClass =
    "w-full bg-transparent border-b-2 border-black/20 focus:border-[#EF4444] outline-none py-3 text-[14px] transition-colors placeholder:text-black/30";

  return (
    <section ref={ref} id="partnerships" className="afro-partnerships-section">
      <div className="afro-partnerships-container">
        <div className="max-w-4xl mx-auto">

          {/* ── Header ── */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="w-2 h-2 bg-[#EF4444]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">
                Work With Us
              </span>
            </div>
            <h2
              className="text-[clamp(2rem,6vw,4rem)] leading-[0.95] tracking-tight text-black mb-8"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Partnerships &<br />Sponsorships
            </h2>
            <p className="text-[14px] leading-relaxed text-black/60 max-w-2xl mx-auto">
              Collaborate with Afronated to reach an engaged community of
              creative youth and culture enthusiasts.
            </p>
          </motion.div>

          {/* ── Partnership types grid ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              {
                title: "Brand Partnerships",
                desc: "Authentic integration opportunities that align with our community values and creative vision.",
              },
              {
                title: "Event Coverage",
                desc: "Professional documentation and storytelling for festivals, showcases, and cultural events.",
              },
              {
                title: "Content Creation",
                desc: "Custom video production, interviews, and editorial content tailored to your objectives.",
              },
              {
                title: "Community Access",
                desc: "Direct engagement with our audience through sponsored content and collaborative campaigns.",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-4">
                <div className="w-12 h-[2px] bg-[#EF4444]" />
                <h3 className="text-[20px] tracking-tight text-black">{item.title}</h3>
                <p className="text-[13px] leading-relaxed text-black/60">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Contact CTA — with extra breathing room  */}
          <motion.div
            className="afro-partnerships-cta"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-[13px] text-black/50 mb-5">
              For partnership inquiries and media kit
            </p>
            <a
              href="mailto:afronated@gmail.com"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-black hover:text-[#EF4444] transition-colors group"
            >
              afronated@gmail.com
              <span className="w-8 h-[1px] bg-black group-hover:bg-[#EF4444] group-hover:w-12 transition-all" />
            </a>
          </motion.div>

          {/*  Inquiry form — visually separated with bold header  */}
          <motion.div
            className="afro-partnerships-form-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Divider + heading — clear visual break from the contact block above */}
            <div className="afro-partnerships-form-header">
              <div className="afro-partnerships-divider" />
              <div className="afro-partnerships-form-title-row">
                <h3
                  className="afro-partnerships-form-title"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Send an Inquiry
                </h3>
                <p className="text-[13px] text-black/50 mt-2">
                  Tell us about your brand or project and we'll follow up with our media kit.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] tracking-[0.15em] uppercase text-black/50">Name *</label>
                  <input type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass} placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] tracking-[0.15em] uppercase text-black/50">Email *</label>
                  <input type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass} placeholder="you@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] tracking-[0.15em] uppercase text-black/50">Organisation</label>
                  <input type="text" value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    className={inputClass} placeholder="Brand / Company" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] tracking-[0.15em] uppercase text-black/50">Type *</label>
                  <select required value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className={inputClass}>
                    <option value="">Select...</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="brand-partnership">Brand Partnership</option>
                    <option value="event">Event Coverage</option>
                    <option value="content">Content Creation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] tracking-[0.15em] uppercase text-black/50">Message *</label>
                <textarea required value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5} className={`${inputClass} resize-none`}
                  placeholder="Tell us about your brand and how you'd like to work together..." />
              </div>
              <button type="submit" disabled={submitting}
                className="group relative px-10 py-4 bg-black text-white text-[11px] tracking-[0.2em] uppercase overflow-hidden disabled:opacity-50">
                <span className="relative z-10">{submitting ? "Sending..." : "Send Inquiry"}</span>
                <motion.div className="absolute inset-0 bg-[#EF4444]"
                  initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <style>{`
        /*  Section padding  */
        .afro-partnerships-section {
          padding-top: 80px;
          padding-bottom: 80px;
          background: #fff;
        }
        @media (min-width: 1024px) {
          .afro-partnerships-section {
            padding-top: 120px;
            padding-bottom: 120px;
          }
        }

        /*  Container — matches Hero / Manifesto / Interviews / Submissions  */
        .afro-partnerships-container {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .afro-partnerships-container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
        @media (min-width: 1024px) {
          .afro-partnerships-container {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        /*  Contact CTA block: generous padding above and below  */
        .afro-partnerships-cta {
          text-align: center;
          padding-top: 3.5rem;
          padding-bottom: 3.5rem;
          border-top: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        @media (min-width: 1024px) {
          .afro-partnerships-cta {
            padding-top: 4.5rem;
            padding-bottom: 4.5rem;
          }
        }

        /*  Inquiry form wrapper — clear visual separation  */
        .afro-partnerships-form-wrapper {
          margin-top: 5rem;
        }
        @media (min-width: 1024px) {
          .afro-partnerships-form-wrapper {
            margin-top: 6rem;
          }
        }

        /*  Form header: accent bar + big Bebas title  */
        .afro-partnerships-form-header {
          margin-bottom: 3rem;
        }

        /* Red accent bar — thin, full-width, strong visual anchor */
        .afro-partnerships-divider {
          width: 100%;
          height: 2px;
          background: #EF4444;
          margin-bottom: 2rem;
        }

        .afro-partnerships-form-title-row {
          /* left-aligned, distinct from centred body copy above */
        }

        .afro-partnerships-form-title {
          /* Large Bebas Neue title — hard to miss */
          font-size: clamp(2rem, 5vw, 3rem);
          line-height: 1;
          letter-spacing: 0.02em;
          color: #000;
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
}