import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Layers,
  MessageCircle,
  Phone,
  Sparkles,
  Wrench,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import {
  ADDRESS,
  CLASS_TIMING,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  courseOutcomes,
  courses,
} from "../../../data/content";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = courses.find((c) => c.id === params.slug);
  if (!course) return { title: "Course Not Found — Techzone Learning Academy" };
  return {
    title: `${course.title} — ${course.duration} | Techzone Learning Academy`,
    description: `${course.title} at Techzone Learning Academy, Karachi. Duration: ${course.duration}. Classes are ${CLASS_TIMING.toLowerCase()}. Admission Open. Call or WhatsApp ${PHONE_DISPLAY}.`,
  };
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.id === params.slug);
  if (!course) notFound();
  const Icon = course.icon;
  const outcome = courseOutcomes[course.id] ?? "Finish with practical work and projects built during the course.";
  const related = courses
    .filter((c) => c.id !== course.id && (c.category === course.category || c.featured))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-navy-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden pb-14 pt-32 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[120px]" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            href="/#courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-300 transition hover:text-sky-200"
          >
            <ArrowLeft className="h-4 w-4" /> All Courses
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300">
                  Admission Open
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {course.category}
                </span>
                {course.featured && (
                  <span className="rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Popular
                  </span>
                )}
              </div>
              <div className="mt-6 flex items-start gap-5">
                <span className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${course.gradient} shadow-lg`}>
                  <Icon className="h-10 w-10 text-white" />
                </span>
                <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {course.title}
                </h1>
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{course.description}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
                Go Higher With New Technology — practical, project-based learning at Techzone Learning Academy, {ADDRESS}.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="glass rounded-2xl px-4 py-4">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-300">
                    <Clock className="h-4 w-4" /> Duration
                  </p>
                  <p className="mt-2 text-base font-bold text-white">{course.duration}</p>
                </div>
                <div className="glass rounded-2xl px-4 py-4">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-300">
                    <BookOpen className="h-4 w-4" /> Class Timing
                  </p>
                  <p className="mt-2 text-base font-bold text-white">{CLASS_TIMING}</p>
                </div>
                <div className="glass rounded-2xl px-4 py-4">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-300">
                    <Sparkles className="h-4 w-4" /> Admission
                  </p>
                  <p className="mt-2 text-base font-bold text-white">Open Now</p>
                </div>
              </div>
            </div>

            <aside className="glass-strong h-fit rounded-3xl p-7 lg:sticky lg:top-28">
              <h2 className="text-lg font-bold text-white">Apply for this course</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Message the academy on WhatsApp or call — the team will guide you through timings, batches and the next steps.
              </p>
              <a
                href={`/apply?course=${course.id}`}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5"
              >
                <ArrowRight className="h-4 w-4" /> Apply Now — Fill the Form
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
              >
                <MessageCircle className="h-4 w-4" /> Apply on WhatsApp
              </a>
              <a
                href={PHONE_TEL}
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-sky-300" /> Call {PHONE_DISPLAY}
              </a>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> Duration: {course.duration}</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> {CLASS_TIMING}</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> Admission Open</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> {ADDRESS}</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div className="glass rounded-3xl p-8">
            <h2 className="flex items-center gap-2 text-xl font-bold text-white">
              <GraduationCap className="h-5 w-5 text-sky-300" /> What You Will Learn
            </h2>
            <ul className="mt-5 space-y-3">
              {course.learn.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-3xl p-8">
            <h2 className="flex items-center gap-2 text-xl font-bold text-white">
              <Sparkles className="h-5 w-5 text-sky-300" /> Project &amp; Portfolio Outcome
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-200 sm:text-base">{outcome}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Learning at Techzone is practical and project-based — you practise in class, work on exercises and build projects, so skills are learned by doing.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="glass rounded-3xl p-8">
            <h2 className="flex items-center gap-2 text-xl font-bold text-white">
              <Layers className="h-5 w-5 text-sky-300" /> Full Syllabus — Everything Covered
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              The complete syllabus for {course.title} ({course.duration}).
            </p>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {course.tools.map((topic, i) => (
                <li key={topic} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-100">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-600 text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                  {topic}
                </li>
              ))}
            </ol>
          </div>

          <div className="glass mt-8 rounded-3xl p-8">
            <h2 className="flex items-center gap-2 text-xl font-bold text-white">
              <Wrench className="h-5 w-5 text-sky-300" /> Tools &amp; Software Covered
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {course.tools.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm font-medium text-slate-100">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative py-14">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Related Courses</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((c) => {
                const RIcon = c.icon;
                return (
                  <Link
                    key={c.id}
                    href={`/courses/${c.id}`}
                    className="glass group rounded-3xl p-7 transition hover:border-white/25"
                  >
                    <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.iconBg}`}>
                      <RIcon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-white">{c.title}</h3>
                    <p className="mt-2 text-sm font-bold text-sky-300">Duration: {c.duration}</p>
                    <p className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-sky-300 transition group-hover:gap-3">
                      View Full Details <ArrowRight className="h-4 w-4" />
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
