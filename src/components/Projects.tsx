"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { exampleProjects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Student Work"
          title="Student Projects"
          highlight="Showcase"
          description="The kind of practical work students build while learning. These are example projects — placeholders showing the type of work each course leads to."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exampleProjects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass group overflow-hidden rounded-3xl transition hover:border-violet-400/40 hover:shadow-glow-purple"
            >
              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-navy-800 via-navy-700 to-violet-600/40">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                  <FolderGit2 className="h-8 w-8 text-sky-300" />
                </span>
              </div>
              <div className="p-6">
                <span className="rounded-full bg-violet-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-violet-300">
                  {p.category}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.description}</p>
                <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-amber-300">
                  <ArrowUpRight className="h-4 w-4" /> {p.tag} — real student work coming soon
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
