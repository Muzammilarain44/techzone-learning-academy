"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Play,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
} from "lucide-react";
import { ADDRESS, CLASS_TIMING, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
      {/* Background glows - static, no 3D */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-500/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/15 px-4 py-1.5 text-xs font-bold text-sky-300">
              <GraduationCap className="h-4 w-4" /> Learn &bull; Practice &bull; Grow
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
            Build Your Future with <span className="gradient-text">Technology.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            Techzone Learning Academy helps you develop in-demand skills in AI, Web
            Development, Design and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#courses" className="btn-primary">
              Explore Courses <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#learning" className="btn-secondary">
              <Play className="h-4 w-4" /> Watch Intro
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <MessageCircle className="h-5 w-5 text-emerald-400" /> WhatsApp {PHONE_DISPLAY}
            </a>
            <a href={PHONE_TEL} className="btn-secondary">
              <Phone className="h-5 w-5 text-sky-300" /> Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-slate-100"
          >
            <span className="glass flex items-center gap-2 rounded-2xl px-4 py-3">
              <Clock className="h-4 w-4 shrink-0 text-sky-300" /> {CLASS_TIMING}
            </span>
            <span className="glass flex items-center gap-2 rounded-2xl px-4 py-3">
              <MapPin className="h-4 w-4 shrink-0 text-sky-300" /> {ADDRESS}
            </span>
          </motion.div>
        </div>

        {/* Hero visual - exact robot image cropped from the reference screenshot, no 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sky-500/20 via-transparent to-violet-600/20 blur-2xl" />
          <div className="glass-strong relative overflow-hidden rounded-[2.5rem]">
            <Image
              src="/hero-robot.jpg"
              alt="AI robot learning on a laptop - Learn, Code, Innovate, Achieve"
              width={720}
              height={360}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
