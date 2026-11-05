"use client";
import { useMemo, useState } from "react";
import { Search, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import CourseCard from "./CourseCard";
import { categories, courses, CLASS_TIMING, PHONE_DISPLAY, PHONE_TEL } from "../data/content";

export default function Courses() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      const inCategory =
        category === "All" ||
        (category === "Popular" ? !!c.featured : c.category === category);
      const inQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.tools.some((t) => t.toLowerCase().includes(q));
      return inCategory && inQuery;
    });
  }, [category, query]);

  return (
    <section id="courses" className="relative py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Our Courses"
          title="Explore Our Professional"
          highlight="Courses"
          description={`21 real courses from Techzone Learning Academy — development, design, AI & data, marketing, IT, languages and more. Classes are ${CLASS_TIMING.toLowerCase()}. Pick your path and apply on WhatsApp.`}
        />

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? courses.length
                  : cat === "Popular"
                    ? courses.filter((c) => c.featured).length
                    : courses.filter((c) => c.category === cat).length;
              const active = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow-lg shadow-blue-600/30"
                      : "border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
          <label className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a course — e.g. Python, AutoCAD, German…"
              className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
          </label>
          <p className="text-sm text-slate-400">
            Showing <span className="font-bold text-white">{filtered.length}</span> of{" "}
            <span className="font-bold text-white">{courses.length}</span> courses
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-10 text-center text-slate-300">
            No course matches that search. Try another keyword, or message the academy on WhatsApp.
          </p>
        )}
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-400">
          Questions about timings or batches?{" "}
          <a href={PHONE_TEL} className="font-semibold text-sky-300 hover:text-sky-200">
            Call {PHONE_DISPLAY}
          </a>{" "}
          or message on WhatsApp for details.
        </p>
      </div>
    </section>
  );
}
