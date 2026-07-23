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

const socialLinks = [
  {
    label: "Email",
    href: "mailto:shanmugamstar2000@outlook.com",
  },
  {
    label: "Call",
    href: "tel:+919994275300",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919994275300",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shanmugam-p-5273721a6",
  },
] as const;

function SocialIcon({ label }: { label: (typeof socialLinks)[number]["label"] }) {
  if (label === "Email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (label === "Call") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.64 2.63a2 2 0 0 1-.45 2.11L8 9.76a16 16 0 0 0 6.24 6.24l1.3-1.3a2 2 0 0 1 2.11-.45c.85.31 1.73.52 2.63.64A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  if (label === "WhatsApp") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path d="M20 11.5A8.5 8.5 0 0 1 7.6 19l-3.6 1 1-3.5A8.5 8.5 0 1 1 20 11.5Z" />
        <path d="M9.7 8.9c.2-.5.5-.5.7-.5h.6c.2 0 .4 0 .5.4l.6 1.4c.1.2 0 .4-.1.6l-.4.5c-.1.1-.2.3-.1.5.3.6.8 1.2 1.4 1.7.7.5 1.2.8 1.8 1 .2.1.4 0 .5-.1l.6-.7c.1-.1.3-.2.5-.1l1.3.6c.2.1.4.2.4.5v.5c0 .3-.1.6-.5.8-.4.2-1 .3-1.7.2-.7-.1-1.5-.4-2.5-.9-1-.6-1.9-1.3-2.7-2.2-.7-.9-1.1-1.8-1.2-2.5-.1-.7 0-1.3.2-1.7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A2 2 0 1 0 5.3 7a2 2 0 0 0-.05-4ZM20.44 12.58c0-3.12-1.67-4.58-3.9-4.58-1.8 0-2.6.99-3.05 1.68V8.5h-3.38c.04.79 0 10.5 0 10.5h3.38v-5.86c0-.31.02-.62.11-.84.24-.61.8-1.25 1.73-1.25 1.22 0 1.71.93 1.71 2.3V19H20.4v-6.42Z" />
    </svg>
  );
}

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
              <motion.div
                variants={staggerItem}
                className="glass rounded-2xl p-5 border border-white/5"
              >
                <p className="text-zinc-500 text-xs uppercase tracking-[0.24em] mb-4">Connect</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      whileHover={{ y: -1, scale: 1.02 }}
                      whileTap={{ scale: 0.985 }}
                      className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition-all duration-200 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                      aria-label={link.label}
                    >
                      <SocialIcon label={link.label} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  variants={staggerItem}
                  href={method.href}
                  target={method.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={method.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.01, y: -1, borderColor: "rgba(168,85,247,0.4)" }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.18 }}
                  className="glass flex items-center gap-4 rounded-2xl p-5 border border-white/5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                  aria-label={`${method.label}: ${method.value}`}
                >
                  <motion.span
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.18 }}
                    className="text-2xl shrink-0"
                    aria-hidden="true"
                  >{method.icon}</motion.span>
                  <div>
                    <p className="text-zinc-500 text-xs mb-0.5">{method.label}</p>
                    <p className="text-white text-sm font-medium break-words">
                      {method.value}
                    </p>
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
                href="/resume/Shanmugam_Paramasivam_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.985 }}
                className="flex items-center justify-between gap-4 w-full rounded-2xl px-5 py-4 border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 group"
                aria-label="Open resume PDF in a new tab"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">📄</span>
                  <div>
                    <p className="text-white text-sm font-semibold">Open Resume</p>
                    <p className="text-zinc-500 text-xs">PDF · Always up to date</p>
                  </div>
                </div>
                <motion.span
                  animate={{ y: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2.1, ease: "easeInOut" }}
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
