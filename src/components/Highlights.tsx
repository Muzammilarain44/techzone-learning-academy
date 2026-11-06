"use client";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Brain, Clock, Globe, Languages, Zap } from "lucide-react";
import { courses } from "../data/content";

const popularIds = [
  "python-data-analysis",
  "python-ai",
  "cyber-security",
  "advance-digital-marketing",
];

export default function Highlights() {
  const popular = popularIds
    .map((id) => courses.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
      {/* Row 1: AI + Languages */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Banner 1 — AI */}
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-blue-700 to-violet-700 p-8 shadow-xl sm:p-10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
          <div className="absolute -right-10 -top-10 flex h-44 w-44 items-center justify-center rounded-full bg-white/10 blur-none">
            <Bot className="h-24 w-24 text-white/80" />
          </div>
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
              <Brain className="h-4 w-4" /> Artificial Intelligence
            </span>
            <h2 className="mt-5 max-w-md text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Learn AI. Build the Future.
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-blue-100">
              Start with Python and artificial intelligence, and build complete
              web applications with full stack development.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/courses/python-ai"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5"
              >
                Python with AI <span className="font-semibold text-blue-500">· 1 Year Diploma</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/courses/full-stack-development"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Full Stack Development <span className="font-semibold text-blue-100">· 1 Year Diploma</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.article>

        {/* Banner 3 — Languages */}
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 p-8 shadow-xl sm:p-10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
          <div className="absolute -right-10 -top-10 flex h-44 w-44 items-center justify-center rounded-full bg-white/10">
            <Globe className="h-24 w-24 text-white/80" />
          </div>
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
              <Languages className="h-4 w-4" /> Languages
            </span>
            <h2 className="mt-5 max-w-md text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Speak English &amp; German. Work With the World.
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-teal-100">
              Build confidence in English and German, and open the door to
              study and work opportunities beyond Pakistan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/courses/english-language"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-teal-700 shadow-lg transition hover:-translate-y-0.5"
              >
                English Language <span className="font-semibold text-teal-500">· 3 Months per Level</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/courses/german-language"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                German Language <span className="font-semibold text-teal-100">· 6 Months</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.article>
      </div>

      {/* Row 2: Quick Skills — full width */}
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
        className="relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 p-8 shadow-xl sm:p-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute -right-8 -top-8 flex h-40 w-40 items-center justify-center rounded-full bg-white/10">
          <Zap className="h-20 w-20 text-white/80" />
        </div>
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              <Zap className="h-4 w-4" /> Quick Skills
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Learn a New Skill in 2 Months
            </h2>
            <p className="mt-3 text-base leading-relaxed text-orange-100">
              Short-term courses to get started fast — learn online selling
              with Shopify dropshipping, or master office work with Advance
              MS Office.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3">
            <a
              href="/courses/shopify-dropshipping"
              className="inline-flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-orange-700 shadow-lg transition hover:-translate-y-0.5"
            >
              Shopify Dropshipping <span className="font-semibold text-orange-500">· 2 Months</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/courses/advance-ms-office"
              className="inline-flex items-center justify-between gap-4 rounded-2xl border border-white/40 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Advance MS Office <span className="font-semibold text-orange-100">· 2 Months</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.article>

      {/* Row 3: Popular course tiles */}
      <div className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Popular Courses
            </h2>
            <p className="mt-2 text-base text-slate-300">
              Four courses to start exploring.
            </p>
          </div>
          <a
            href="#courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-300 transition hover:text-sky-200"
          >
            View All 21 Courses <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.a
                key={course.id}
                href={`/courses/${course.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass group overflow-hidden rounded-3xl transition hover:border-white/25 hover:shadow-glow"
              >
                <div
                  className={`relative flex h-28 items-center justify-center overflow-hidden bg-gradient-to-br ${course.gradient}`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                    <Icon className="h-7 w-7 text-white" />
                  </span>
                  <span className="absolute right-3 top-3 rounded-full border border-white/25 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                    {course.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold leading-snug text-white">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-sm font-bold text-sky-300">
                    <Clock className="h-4 w-4" /> Duration: {course.duration}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sky-300 transition group-hover:gap-3">
                    View Details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
