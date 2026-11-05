"use client";
import { motion } from "framer-motion";
import { ArrowRight, Search, MessageCircle, FileCheck, Rocket, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../data/content";

const steps = [
  {
    icon: Search,
    title: "Explore Courses",
    description: "Browse the courses above and choose the one that matches your goals and interests.",
  },
  {
    icon: MessageCircle,
    title: "Contact the Academy",
    description: `Message us on WhatsApp at ${PHONE_DISPLAY} for timings, batches and any questions you have.`,
  },
  {
    icon: FileCheck,
    title: "Complete Your Application",
    description: "Fill in the admission application form on this website and send it on WhatsApp or by email — the academy team will confirm the next steps.",
  },
  {
    icon: Rocket,
    title: "Start Learning",
    description: "Join your class, meet your instructors and begin your learning journey at Techzone.",
  },
];

export default function Admission() {
  return (
    <section id="admission" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Admission Open"
          title="Admission Process —"
          highlight="Simple & Clear"
          description="Admission Open — getting started is easy. Four simple steps, and you're on your way to learning real technology skills."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass relative rounded-3xl p-7"
            >
              <span className="absolute right-6 top-6 text-4xl font-extrabold text-white/10">0{i + 1}</span>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600">
                <s.icon className="h-6 w-6 text-white" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.description}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-400">
          Admission Open. Requirements are confirmed by the academy.
          <span className="text-slate-200"> Contact us on WhatsApp for details.</span>
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a href="/apply" className="btn-primary">
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-bold text-white transition hover:bg-emerald-400">
            <MessageCircle className="h-4 w-4" /> WhatsApp {PHONE_DISPLAY}
          </a>
          <a href={PHONE_TEL} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10">
            <Phone className="h-4 w-4 text-sky-300" /> Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
