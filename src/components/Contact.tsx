"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { ADDRESS, CLASS_TIMING, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../data/content";

const cards = [
  {
    icon: Phone,
    title: "Call Us",
    value: PHONE_DISPLAY,
    note: "Call for admission, timings and batch details.",
    href: PHONE_TEL,
    label: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: PHONE_DISPLAY,
    note: "Fastest way to apply — message us on WhatsApp.",
    href: WHATSAPP_URL,
    label: "Message on WhatsApp",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: ADDRESS,
    note: "Techzone Learning Academy, Karachi.",
    href: MAPS_URL,
    label: "Open in Google Maps",
  },
  {
    icon: Clock,
    title: "Class Timing",
    value: CLASS_TIMING,
    note: "Admission Open — contact us for your course's days and timings.",
    href: WHATSAPP_URL,
    label: "Ask on WhatsApp",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-sky-600/15 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Contact & Visit Us"
          title="Visit Techzone Learning"
          highlight="Academy"
          description="Admission Open. Call, WhatsApp or visit us at our Karachi campus — 605 Shahrah-e-Faisal, Block 6, P.E.C.H.S., Karachi 75400."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="glass flex flex-col rounded-3xl p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600">
                <c.icon className="h-6 w-6 text-white" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{c.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-100">{c.value}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">{c.note}</p>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-300 transition hover:text-sky-200"
              >
                {c.label} <Navigation className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-400">
          Questions? Message the academy on WhatsApp at{" "}
          <span className="font-semibold text-slate-200">{PHONE_DISPLAY}</span> for details and timings.
        </p>
      </div>
    </section>
  );
}
