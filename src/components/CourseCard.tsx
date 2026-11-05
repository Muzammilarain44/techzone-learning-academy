"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, BookOpen, Clock, MessageCircle } from "lucide-react";
import type { Course } from "../data/content";
import { WHATSAPP_URL } from "../data/content";

export default function CourseCard({ course, index }: { course: Course; index: number }) {
  const Icon = course.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass group flex flex-col overflow-hidden rounded-3xl transition hover:border-white/25 hover:shadow-glow"
    >
      <div className={`relative h-2 bg-gradient-to-r ${course.gradient}`} />
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${course.iconBg}`}>
            <Icon className="h-7 w-7" />
          </span>
          <span className="flex flex-col items-end gap-1.5">
            {course.featured && (
              <span className="rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                Popular
              </span>
            )}
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
              {course.category}
            </span>
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold leading-snug text-white">{course.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm font-bold text-sky-300">
          <Clock className="h-4 w-4" /> Duration: {course.duration}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{course.description}</p>

        <div className="mt-5">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-300">
            <BookOpen className="h-4 w-4" /> What you will learn
          </p>
          <ul className="mt-3 space-y-2">
            {course.learn.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Syllabus</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {course.tools.map((t) => (
              <span key={t} className="rounded-full bg-white/[0.07] border border-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-xs text-slate-400">
            Class timing: <span className="font-semibold text-slate-200">2 hours, 3 days a week</span>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href={`/apply?course=${course.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-300 transition hover:text-emerald-200"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`/courses/${course.id}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-300 transition group-hover:gap-3 group-hover:text-sky-200"
            >
              View Full Details <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
