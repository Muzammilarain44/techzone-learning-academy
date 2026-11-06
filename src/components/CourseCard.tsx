"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import type { Course } from "../data/content";

export default function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.a
      href={`/courses/${course.id}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -8 }}
      className="glass group block overflow-hidden rounded-3xl transition hover:border-sky-400/40 hover:shadow-glow"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={`/courses/${course.id}.jpg`}
          alt={course.title}
          width={640}
          height={427}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
          {course.featured && (
            <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
              Popular
            </span>
          )}
          <span className="rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
            {course.category}
          </span>
        </span>
      </div>
      <div className="flex items-end justify-between gap-3 p-5">
        <div className="min-w-0">
          <h3 className="min-h-[3.25rem] text-lg font-bold leading-snug text-white">
            {course.title}
          </h3>
          <p className="mt-2 flex items-center gap-2 text-sm font-bold text-sky-300">
            <Clock className="h-4 w-4 shrink-0" /> Duration: {course.duration}
          </p>
        </div>
        <span
          aria-label={`View details of ${course.title}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow-lg shadow-blue-600/40 transition group-hover:translate-x-1 group-hover:shadow-glow"
        >
          <ArrowRight className="h-5 w-5" />
        </span>
      </div>
    </motion.a>
  );
}
