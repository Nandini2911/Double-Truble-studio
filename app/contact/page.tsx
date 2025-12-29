"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<null | "ok" | "err">(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setDone(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          service: form.service,
          message: form.message.trim(),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setDone("ok");
      setForm({ name: "", email: "", company: "", service: "", message: "" });
    } catch {
      setDone("err");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative overflow-hidden w-full bg-dts-black">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,243,216,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,63,164,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_85%,rgba(216,184,115,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      {/* HERO */}
      <div className="relative min-h-[85vh] grid place-items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-4xl text-center space-y-6"
        >
          <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-400">
            Contact • Double Trouble Studio
          </p>

          <h1 className="font-heading text-white text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] leading-tight">
            Let’s discuss{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold">
              clarity, execution,
            </span>
            <br />
            and real momentum.
          </h1>

          <div className="mx-auto h-px w-32 bg-linear-to-r from-dts-neon via-dts-neon-pink to-dts-gold shadow-[0_0_20px_rgba(70,243,216,0.55)]" />

          <p className="mx-auto max-w-2xl text-[15px] sm:text-[16px] text-neutral-300/90 leading-relaxed">
            Whether you’re planning a launch, restructuring visibility, or need a
            partner who can{" "}
            <span className="text-dts-neon/90 font-medium">think + execute</span>{" "}
            — we’ll help you approach it the right way.
          </p>
        </motion.div>
      </div>

      {/* VALUE STRIP */}
      <div className="relative border-y border-white/10 py-12">
        <div className="mx-auto max-w-6xl px-4 grid gap-6 sm:grid-cols-3 text-center">
          {[
            ["Strategy-first", "No guesswork or random execution"],
            ["Senior-led", "Handled by decision-makers, not juniors"],
            ["Discreet & precise", "Especially for public figures & brands"],
          ].map(([title, desc]) => (
            <div key={title}>
              <p className="text-[13px] uppercase tracking-[0.24em] text-dts-neon/80">
                {title}
              </p>
              <p className="mt-2 text-[14px] text-neutral-300/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT GRID */}
      <div className="relative mx-auto max-w-6xl px-4 py-24">
        <div className="grid gap-14 lg:grid-cols-2 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="space-y-10"
          >
            <h2 className="font-heading text-[30px] text-white leading-tight">
              What happens after you reach out
            </h2>

            <p className="text-[15px] text-neutral-300/85 leading-relaxed">
              We don’t “sell services.” We understand intent, scale, pressure
              points, and then recommend what actually makes sense — even if that
              means saying no.
            </p>

            <ul className="space-y-4 text-[14px] text-neutral-300/80">
              <li>• Requirement reviewed by senior leadership</li>
              <li>• Clear scope, timelines & expectations</li>
              <li>• Honest feasibility & fit assessment</li>
              <li>• Zero pressure, zero overpromising</li>
            </ul>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-[13px] uppercase tracking-[0.26em] text-neutral-400">
                Ideal for
              </p>
              <p className="mt-3 text-[14px] text-neutral-300/85 leading-relaxed">
                Founders • Enterprises • Luxury & lifestyle brands • Public
                figures • Event teams • Agencies seeking execution support
              </p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-3xl border border-white/10 bg-white/4 backdrop-blur-xl p-8"
          >
            <h3 className="font-heading text-[22px] text-white">
              Start the conversation
            </h3>

            <p className="mt-2 text-[14px] text-neutral-300/80">
              The more clarity you share, the better we can guide you.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Full Name"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:border-dts-neon/60"
              />
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email Address"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:border-dts-neon/60"
              />
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Company / Brand (optional)"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:border-dts-neon/60"
              />

              {/* ✅ FIXED: select NOT WHITE + defaultValue */}
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="
                  w-full rounded-xl
                  bg-dts-black text-white
                  border border-white/10
                  px-4 py-3 text-sm
                  focus:outline-none focus:border-dts-neon/60
                "
              >
                <option value="" className="bg-dts-black text-neutral-400">
                  Service you’re enquiring for
                </option>
                <option value="Strategic Roadmap" className="bg-dts-black text-white">
                  Strategic Roadmap
                </option>
                <option value="PR & Media" className="bg-dts-black text-white">
                  PR & Media
                </option>
                <option value="Digital & Marketing" className="bg-dts-black text-white">
                  Digital & Marketing
                </option>
                <option value="AI Video & VFX" className="bg-dts-black text-white">
                  AI Video & VFX
                </option>
                <option value="Celebrity Management" className="bg-dts-black text-white">
                  Celebrity Management
                </option>
                <option value="Events & Experiences" className="bg-[#050507] text-white">
                  Events & Experiences
                </option>
                <option value="Not sure yet" className="bg-[#050507] text-white">
                  Not sure yet
                </option>
              </select>

              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Briefly describe what you’re trying to achieve"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:border-dts-neon/60"
              />

              <button
                type="submit"
                disabled={loading}
                className="dts-animated-border w-full disabled:opacity-60"
              >
                <span className="inline-flex w-full items-center justify-center py-4 text-[13px] uppercase tracking-[0.22em] font-semibold text-dts-fog">
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </span>
              </button>

              {done === "ok" ? (
                <p className="text-[12px] text-dts-neon text-center">
                  Enquiry sent. We’ll get back to you soon.
                </p>
              ) : null}

              {done === "err" ? (
                <p className="text-[12px] text-red-400 text-center">
                  Something went wrong. Please try again.
                </p>
              ) : null}

              <p className="text-[12px] text-neutral-400 text-center">
                Typical response time: 24–48 working hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="relative py-20 text-center border-t border-white/10">
        <p className="text-[14px] text-neutral-300/80">Not ready to fill a form?</p>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/contact" className="inline-flex scale-y-125 dts-animated-border">
            <span>Get in touch</span>
          </Link>
          <Link href="/contact" className="inline-flex scale-y-125 dts-animated-border">
            <span>Book a Call</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
