"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "../data/content";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Why Techzone", href: "/#why-techzone" },
  { label: "Learning", href: "/#learning" },
  { label: "Admission", href: "/#admission" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-navy-950/85 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-lg shadow-blue-600/40">
            <Image src="/logo.png" alt="Tech Zone — Go Higher With New Technology" width={44} height={44} className="h-9 w-9 object-contain" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-white">
              TECHZONE
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
              Learning Academy
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1.5 text-xs font-bold text-emerald-300">
            Admission Open
          </span>
          <a href={PHONE_TEL} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10">
            <Phone className="h-4 w-4 text-sky-300" /> {PHONE_DISPLAY}
          </a>
          <a href="/apply" className="btn-primary !px-5 !py-2.5">
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="mx-5 mt-3 rounded-2xl glass-strong p-3 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-100 hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
          <a href="/apply" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
          <a href={PHONE_TEL} onClick={() => setOpen(false)} className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-white">
            <Phone className="h-4 w-4 text-sky-300" /> {PHONE_DISPLAY} • Admission Open
          </a>
        </nav>
      )}
    </header>
  );
}
