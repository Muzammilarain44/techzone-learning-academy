"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Brain, Palette, CheckCircle2, Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { ADDRESS, CLASS_TIMING, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../data/content";

const HeroScene = dynamic(() => import("./three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-64 w-64 animate-pulse rounded-full bg-gradient-to-br from-sky-500/30 to-violet-600/30 blur-2xl" />
    </div>
  ),
});

const highlights = ["Hands-on practice", "Modern tools & skills", "Project-based learning"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-500/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label">
              <Sparkles className="h-3.5 w-3.5" /> Techzone Learning Academy
            </span>
            <span className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Admission Open
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Build Your Future in <span className="gradient-text">Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            Learn practical technology skills the modern way — with hands-on classes,
            real projects and guidance at every step. From AI and web development to
            design, marketing and Python, start where you are and build skills that matter.
            Classes are 2 hours, 3 days a week, at our Karachi campus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="/apply" className="btn-primary">
              Apply Now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#courses" className="btn-secondary">
              Explore Courses <ArrowRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <MessageCircle className="h-5 w-5 text-emerald-400" /> WhatsApp {PHONE_DISPLAY}
            </a>
            <a href={PHONE_TEL} className="btn-secondary">
              <Phone className="h-5 w-5 text-sky-300" /> Call Now
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm font-medium text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> {h}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {[
              { icon: Brain, label: "AI & Machine Learning" },
              { icon: Code2, label: "Web Development" },
              { icon: Palette, label: "Graphic Design" },
            ].map((c) => (
              <span key={c.label} className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-slate-100">
                <c.icon className="h-4 w-4 text-sky-300" /> {c.label}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-6 grid gap-3 sm:grid-cols-3"
          >
            <span className="glass flex items-center gap-2 rounded-2xl px-4 py-3 text-xs font-semibold text-slate-100">
              <Clock className="h-4 w-4 shrink-0 text-sky-300" /> {CLASS_TIMING}
            </span>
            <span className="glass flex items-center gap-2 rounded-2xl px-4 py-3 text-xs font-semibold text-slate-100">
              <Phone className="h-4 w-4 shrink-0 text-sky-300" /> {PHONE_DISPLAY}
            </span>
            <span className="glass flex items-center gap-2 rounded-2xl px-4 py-3 text-xs font-semibold text-slate-100">
              <MapPin className="h-4 w-4 shrink-0 text-sky-300" /> {ADDRESS}
            </span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto h-[380px] w-full max-w-[560px] sm:h-[460px] lg:h-[540px]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sky-500/20 via-transparent to-violet-600/20 blur-2xl" />
          <div className="glass-strong relative h-full w-full overflow-hidden rounded-[2.5rem]">
            <HeroScene />
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-navy-950/70 px-4 py-3 backdrop-blur">
              <div>
                <p className="text-sm font-bold text-white">Interactive 3D Learning</p>
                <p className="text-xs text-slate-300">AI • Web • Design • Code — all in one place</p>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                Live 3D
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
