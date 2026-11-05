"use client";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle, Clock, Navigation } from "lucide-react";
import { ADDRESS, CLASS_TIMING, EMAIL, EMAIL_MAILTO, FACEBOOK_URL, INSTAGRAM_URL, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, courses } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950/80 pt-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1">
                <Image src="/logo.png" alt="Tech Zone — Go Higher With New Technology" width={44} height={44} className="h-9 w-9 object-contain" />
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-extrabold text-white">TECHZONE</span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                  Learning Academy
                </span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              A modern technology learning academy — practical courses, hands-on
              practice and project-based learning, built for the next generation
              of technology learners.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1.5 text-xs font-bold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Admission Open
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: FACEBOOK_URL },
                { icon: Instagram, label: "Instagram", href: INSTAGRAM_URL },
                { icon: Mail, label: "Email", href: EMAIL_MAILTO },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition hover:bg-gradient-to-br hover:from-sky-500 hover:to-violet-600 hover:text-white"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              <a href={EMAIL_MAILTO} className="transition hover:text-sky-300">{EMAIL}</a>
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {[
                ["Home", "#home"],
                ["Apply Now", "/apply"],
                ["Courses", "#courses"],
                ["Why Techzone", "#why-techzone"],
                ["Learning Journey", "#learning"],
                ["Admission", "#admission"],
                ["Contact & Visit Us", "#contact"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition hover:text-sky-300">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-white">Our Courses</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {courses.slice(0, 8).map((c) => (
                <li key={c.id}>
                  <a href={`/courses/${c.id}`} className="transition hover:text-sky-300">{c.title}</a>
                </li>
              ))}
              <li>
                <a href="/#courses" className="font-semibold text-sky-300 transition hover:text-sky-200">
                  + {courses.length - 8} more courses →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-white">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                <span>
                  {ADDRESS}{" "}
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-sky-300 hover:text-sky-200">
                    <Navigation className="h-3.5 w-3.5" /> Open in Maps
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                <a href={PHONE_TEL} className="font-semibold text-white transition hover:text-sky-300">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-white transition hover:text-sky-300">
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                <a href={EMAIL_MAILTO} className="font-semibold text-white transition hover:text-sky-300">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                <span>Classes: {CLASS_TIMING}</span>
              </li>
            </ul>
            <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs leading-relaxed text-slate-300">
              Contact the academy on WhatsApp for details and timings, or{" "}
              <a href="/apply" className="font-bold text-sky-300 hover:text-sky-200">
                apply now with the admission form →
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
          <p>© Techzone Learning Academy. All rights reserved.</p>
          <p>Build Your Future in Technology — Learn • Practice • Build</p>
        </div>
      </div>
    </footer>
  );
}
