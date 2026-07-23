"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/PageShell";
import { FadeIn, BlurIn, StaggerContainer, staggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

const contactMethods = [
  {
    icon: "✉️",
    label: "Email",
    value: "shanmugamstar2000@outlook.com",
    href: "mailto:shanmugamstar2000@outlook.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 9994275300",
    href: "tel:+919994275300",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/shanmugam-p-5273721a6",
    href: "https://linkedin.com/in/shanmugam-p-5273721a6",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
    href: "https://maps.google.com/?q=Chennai,Tamil+Nadu,India",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500 focus:bg-white/[0.07] transition-all duration-200";

  return (
    <PageShell>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <BlurIn delay={0}>
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">Contact</p>
          </BlurIn>
          <BlurIn delay={0.08}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
              Let&apos;s Build Something
            </h1>
          </BlurIn>
          <FadeIn delay={0.18}>
            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Have a Shopify project in mind? I&apos;d love to hear about it. Drop me a message and I&apos;ll get back to you within 24 hours.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          {/* Form */}
          <FadeIn>
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-12 border border-purple-500/20 text-center"
              >
                <span className="text-5xl mb-4 block" aria-hidden="true">🎉</span>
                <h2 className="text-white text-2xl font-bold mb-2">Message Sent!</h2>
                <p className="text-zinc-400">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-8 border border-white/5 space-y-5"
                noValidate
                aria-label="Contact form"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-zinc-400 text-sm mb-2">
                      Name <span className="text-purple-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-zinc-400 text-sm mb-2">
                      Email <span className="text-purple-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-zinc-400 text-sm mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled className="bg-[#0d0d0d]">
                      What can I help with?
                    </option>
                    <option value="shopify-store" className="bg-[#0d0d0d]">
                      New Shopify Store
                    </option>
                    <option value="headless" className="bg-[#0d0d0d]">
                      Headless / Next.js Project
                    </option>
                    <option value="shopify-app" className="bg-[#0d0d0d]">
                      Custom Shopify App
                    </option>
                    <option value="audit" className="bg-[#0d0d0d]">
                      Store Audit / Optimisation
                    </option>
                    <option value="other" className="bg-[#0d0d0d]">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-zinc-400 text-sm mb-2">
                    Message <span className="text-purple-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Error message */}
                {status === "error" && errorMsg && (
                  <p
                    role="alert"
                    className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                  >
                    {errorMsg}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full justify-center"
                  disabled={status === "submitting"}
                  ariaLabel="Send message"
                >
                  {status === "submitting" ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </Button>
              </form>
            )}
          </FadeIn>

          {/* Sidebar */}
          <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  variants={staggerItem}
                  href={method.href}
                  target={method.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={method.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.02, y: -2, borderColor: "rgba(168,85,247,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="glass flex items-center gap-4 rounded-2xl p-5 border border-white/5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                  aria-label={`${method.label}: ${method.value}`}
                >
                  <motion.span
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl shrink-0"
                    aria-hidden="true"
                  >{method.icon}</motion.span>
                  <div>
                    <p className="text-zinc-500 text-xs mb-0.5">{method.label}</p>
                    <p className="text-white text-sm font-medium">{method.value}</p>
                  </div>
                </motion.a>
              ))}

              <motion.div
                variants={staggerItem}
                className="glass rounded-2xl p-6 border border-purple-500/15"
              >
                <h3 className="text-white font-semibold mb-2">Availability</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-green-400 text-sm font-medium">Available for work</span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Open to freelance contracts, part-time consulting and full-time opportunities.
                  Typical response time: &lt;24 hours.
                </p>
              </motion.div>

              {/* Resume download */}
              <motion.a
                variants={staggerItem}
                href="/resume/Shanmugam_Paramasivam_Resume.pdf"
                download="Shanmugam_Paramasivam_Resume.pdf"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-between gap-4 w-full rounded-2xl px-5 py-4 border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 group"
                aria-label="Download resume PDF"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">📄</span>
                  <div>
                    <p className="text-white text-sm font-semibold">Download Resume</p>
                    <p className="text-zinc-500 text-xs">PDF · Always up to date</p>
                  </div>
                </div>
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                  className="text-purple-400 group-hover:text-white text-lg transition-colors"
                  aria-hidden="true"
                >
                  ↓
                </motion.span>
              </motion.a>
          </StaggerContainer>
        </div>
      </div>
    </PageShell>
  );
}
