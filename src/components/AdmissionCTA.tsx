"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../data/content";

export default function AdmissionCTA() {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-600 via-blue-700 to-violet-700 px-6 py-14 text-center shadow-2xl shadow-blue-900/50 sm:px-12 lg:py-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          </div>
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <Sparkles className="h-3.5 w-3.5" /> Admission Open — Apply Now
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Start Your Learning Journey Today
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
              Choose a course, talk to the academy, and take your first step into
              technology. Your future in tech starts with one decision — today.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href="/apply" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-blue-700 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl">
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                <MessageCircle className="h-4 w-4" /> WhatsApp {PHONE_DISPLAY}
              </a>
              <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
              </a>
              <a href="#courses" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                Explore Courses
              </a>
            </div>
            <p className="mt-6 text-xs text-blue-100/80">
              Classes are 2 hours, 3 days a week. Timings and batch details — contact the academy on WhatsApp.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
