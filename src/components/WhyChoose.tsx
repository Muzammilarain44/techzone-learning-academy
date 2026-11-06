"use client";
import { motion } from "framer-motion";
import { Laptop, Cpu, Users, TrendingUp, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  Laptop,
  Cpu,
  Users,
  TrendingUp,
};

const cards = [
  {
    title: "Practical Learning",
    description: "Get hands-on experience with real-world projects.",
    icon: "Laptop",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Industry-Relevant Skills",
    description: "Learn skills that employers are looking for.",
    icon: "Cpu",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Expert Guidance",
    description: "Learn from experienced professionals.",
    icon: "Users",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Career Development",
    description: "Build a stronger career with in-demand skills.",
    icon: "TrendingUp",
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
          description="Learn practical skills and prepare for the digital future."
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
