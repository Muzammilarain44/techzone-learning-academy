"use client";
import { motion } from "framer-motion";
import { FlaskConical, TrendingUp, GraduationCap, Briefcase, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  FlaskConical,
  TrendingUp,
  GraduationCap,
  Briefcase,
};

const cards = [
  {
    title: "Practical Learning",
    description:
      "Learn by doing. Classes focus on hands-on practice, not just theory — so you build real skills you can actually use.",
    icon: "FlaskConical",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Industry-Relevant Skills",
    description:
      "Courses are built around the skills used in today's technology work — modern tools, current methods and real tasks.",
    icon: "TrendingUp",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Expert Guidance",
    description:
      "Learn with guidance from instructors who explain concepts clearly, step by step, and help you when you get stuck.",
    icon: "GraduationCap",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Career Development",
    description:
      "Build projects, grow your confidence and prepare for the next step — further learning, freelancing or a technology career.",
    icon: "Briefcase",
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-techzone" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Why Techzone?"
          title="Why Choose"
          highlight="Techzone?"
          description="A modern learning academy built around one idea: real skills, learned practically, with support at every step."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = icons[card.icon];
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass group relative overflow-hidden rounded-3xl p-7 transition hover:border-sky-400/40 hover:shadow-glow"
              >
                <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${card.gradient} opacity-20 blur-2xl transition group-hover:opacity-40`} />
                <span className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} shadow-lg`}>
                  <Icon className="h-7 w-7 text-white" />
                </span>
                <h3 className="relative mt-6 text-xl font-bold text-white">{card.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-300">{card.description}</p>
                <span className="relative mt-5 block h-1 w-10 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 transition-all group-hover:w-16" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
