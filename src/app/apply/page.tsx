import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ApplyForm from "../../components/ApplyForm";
import {
  ADDRESS,
  CLASS_TIMING,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "../../data/content";

export const metadata: Metadata = {
  title: "Apply for Admission — Techzone Learning Academy",
  description:
    "Apply for admission at Techzone Learning Academy, Karachi. Fill in the admission application form and send it on WhatsApp or by email. Admission Open. Classes are 2 hours, 3 days a week.",
};

export default function ApplyPage({
  searchParams,
}: {
  searchParams?: { course?: string };
}) {
  return (
    <main className="min-h-screen bg-navy-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[120px]" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-300 transition hover:text-sky-200"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <div className="mt-8 text-center">
            <span className="section-label">Admission Open</span>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Admission <span className="gradient-text">Application</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Fill in the form below to apply for admission at Techzone Learning
              Academy. It takes less than a minute.
            </p>
          </div>

          <div className="glass mt-8 rounded-3xl p-6 sm:p-7">
            <h2 className="text-base font-bold text-white">How applications work</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Applications are received on WhatsApp and Email — there is no
              separate database yet. When you submit this form, your details are
              prepared as a WhatsApp message (or email) for Techzone Learning
              Academy. Press Send on WhatsApp to submit them, and the academy
              team will reply and guide you through timings, batches and the
              next steps.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <span className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-semibold text-slate-100">
                <Clock className="h-4 w-4 shrink-0 text-sky-300" /> {CLASS_TIMING}
              </span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-semibold text-slate-100 transition hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-emerald-400" /> WhatsApp {PHONE_DISPLAY}
              </a>
              <span className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-semibold text-slate-100">
                <MapPin className="h-4 w-4 shrink-0 text-sky-300" /> {ADDRESS}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <ApplyForm preselectedCourse={searchParams?.course} />
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">
            Prefer to talk first?{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-sky-300 hover:text-sky-200">
              WhatsApp {PHONE_DISPLAY}
            </a>{" "}
            or{" "}
            <a href={PHONE_TEL} className="font-bold text-sky-300 hover:text-sky-200">
              Call {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
