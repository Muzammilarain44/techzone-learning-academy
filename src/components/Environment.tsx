"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, Users, FolderKanban, Wifi, CheckCircle2, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { campusPhotos, ADDRESS } from "../data/content";

const features = [
  {
    icon: Monitor,
    title: "Modern Labs & Practical Classes",
    description:
      "Learn in a practical classroom environment where every lesson is followed by real practice on a computer — not just notes on a board.",
  },
  {
    icon: Users,
    title: "Learn Together, Grow Together",
    description:
      "Study with fellow learners, ask questions freely, and help each other through projects — learning is better together.",
  },
  {
    icon: FolderKanban,
    title: "Project-Based Learning",
    description:
      "Every course builds towards real projects. You finish with work you can show — and skills you have actually practised.",
  },
  {
    icon: Wifi,
    title: "Connected, Modern Setup",
    description:
      "A modern learning setup with the tools and internet access you need to practise today's technology properly.",
  },
];

const points = [
  "Hands-on practice in every class",
  "Guided exercises and real tasks",
  "Projects you can add to your portfolio",
  "Support from instructors when you need it",
];

export default function Environment() {
  return (
    <section id="environment" className="relative py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeading
            align="left"
            label="Learning Environment"
            title="A Modern Place to"
            highlight="Learn & Build"
            description="Techzone is built for practical learning — a focused, modern environment where you practise, build and grow, lesson by lesson."
          />
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm font-medium text-slate-100 sm:text-base">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" /> {p}
              </li>
            ))}
          </ul>
          <a href="#courses" className="btn-primary mt-8">
            See What You Can Learn
          </a>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`glass rounded-3xl p-6 hover:border-sky-400/40 transition ${i % 2 === 1 ? "sm:translate-y-6" : ""}`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600">
                <f.icon className="h-6 w-6 text-white" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.description}</p>
            </motion.div>
          ))}
        </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl">Our Campus — Campus 3, Shahrah-e-Faisal</h3>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="h-4 w-4 shrink-0 text-sky-300" /> {ADDRESS}
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">
            Real photos from Techzone Learning Academy — the campus exterior and reception, as shared by the academy.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {campusPhotos.map((photo) => (
            <figure key={photo.src} className="glass overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <figcaption className="px-5 py-4 text-sm font-semibold text-slate-100">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
