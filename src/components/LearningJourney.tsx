"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { learningSteps } from "../data/content";

export default function LearningJourney() {
  return (
    <section id="learning" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="How Learning Works"
          title="Your Learning"
          highlight="Journey"
          description="A simple, clear path from your first lesson to real, finished work you can be proud of."
        />
        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent lg:block" />
          {learningSteps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass relative rounded-3xl p-7 text-center"
            >
              <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-600 text-xl font-extrabold text-white shadow-lg shadow-blue-600/30 ring-4 ring-navy-950">
                {s.step}
              </span>
              <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
