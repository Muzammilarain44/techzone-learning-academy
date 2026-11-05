"use client";
import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Mail,
  MessageCircle,
  Send,
  User,
  Phone,
  AtSign,
  BookOpen,
  Clock,
  PencilLine,
  ArrowRight,
} from "lucide-react";
import {
  ADDRESS,
  CLASS_TIMING,
  EMAIL,
  PHONE_DISPLAY,
  courses,
} from "../data/content";

const WHATSAPP_NUMBER = "923303094425";

const timings = ["Morning", "Evening", "Any"] as const;

export default function ApplyForm({ preselectedCourse = "" }: { preselectedCourse?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [courseId, setCourseId] = useState(preselectedCourse);
  const [timing, setTiming] = useState<(typeof timings)[number]>("Any");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; course?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");
  const [emailLink, setEmailLink] = useState("");

  const course = useMemo(
    () => courses.find((c) => c.id === courseId),
    [courseId],
  );

  const buildDetails = () => {
    const lines = [
      "Hello Techzone Learning Academy,",
      "I would like to apply for admission.",
      "",
      `Full Name: ${name.trim()}`,
      `Phone / WhatsApp: ${phone.trim()}`,
      `Email: ${email.trim() || "Not provided"}`,
      `Course: ${course ? `${course.title} (${course.duration})` : "Not selected"}`,
      `Preferred Timing: ${timing}`,
      `Message / Questions: ${message.trim() || "None"}`,
      "",
      "Please confirm the next steps. Thank you.",
    ];
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: { name?: string; phone?: string; course?: string } = {};
    if (name.trim().length < 2) nextErrors.name = "Please enter your full name.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 7) nextErrors.phone = "Please enter a valid phone / WhatsApp number.";
    if (!course) nextErrors.course = "Please choose a course.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const details = buildDetails();
    setWhatsappLink(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(details)}`,
    );
    setEmailLink(
      `mailto:${EMAIL}?subject=${encodeURIComponent(
        `Admission Application - ${course ? course.title : "Techzone Learning Academy"}`,
      )}&body=${encodeURIComponent(details)}`,
    );
    setSubmitted(true);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(details)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const reset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCourseId("");
    setTiming("Any");
    setMessage("");
    setErrors({});
    setSubmitted(false);
    setWhatsappLink("");
    setEmailLink("");
  };

  if (submitted) {
    return (
      <div className="glass-strong rounded-3xl p-8 text-center sm:p-10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
          <CheckCircle2 className="h-8 w-8 text-emerald-400" />
        </span>
        <h2 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">
          Your application details are ready
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
          Your application details are ready — please press Send on WhatsApp to
          submit them to Techzone Learning Academy. A WhatsApp chat with your
          details already filled in should have opened in a new tab. If it did
          not open, use the button below.
        </p>
        <div className="mx-auto mt-6 max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left text-sm leading-relaxed text-slate-200">
          <p><span className="font-bold text-white">Name:</span> {name.trim()}</p>
          <p className="mt-1"><span className="font-bold text-white">Phone / WhatsApp:</span> {phone.trim()}</p>
          <p className="mt-1"><span className="font-bold text-white">Course:</span> {course ? `${course.title} (${course.duration})` : "—"}</p>
          <p className="mt-1"><span className="font-bold text-white">Preferred Timing:</span> {timing}</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-400"
          >
            <MessageCircle className="h-4 w-4" /> Open WhatsApp to Send
          </a>
          <a
            href={emailLink}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4 text-sky-300" /> Send by Email
          </a>
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-6 text-sm font-bold text-sky-300 transition hover:text-sky-200"
        >
          Fill Another Application →
        </button>
        <p className="mt-6 text-xs leading-relaxed text-slate-400">
          Applications are received on WhatsApp and Email — there is no separate
          database yet. The academy will reply on WhatsApp at {PHONE_DISPLAY}.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/30";
  const labelCls =
    "mb-2 flex items-center gap-2 text-sm font-bold text-white";

  return (
    <form onSubmit={handleSubmit} noValidate className="glass-strong rounded-3xl p-8 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="apply-name" className={labelCls}>
            <User className="h-4 w-4 text-sky-300" /> Full Name *
          </label>
          <input
            id="apply-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className={inputCls}
          />
          {errors.name && <p className="mt-2 text-xs font-semibold text-rose-300">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="apply-phone" className={labelCls}>
            <Phone className="h-4 w-4 text-sky-300" /> WhatsApp / Phone Number *
          </label>
          <input
            id="apply-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 0330 3094425"
            className={inputCls}
          />
          {errors.phone && <p className="mt-2 text-xs font-semibold text-rose-300">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="apply-email" className={labelCls}>
            <AtSign className="h-4 w-4 text-sky-300" /> Email (optional)
          </label>
          <input
            id="apply-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="apply-course" className={labelCls}>
            <BookOpen className="h-4 w-4 text-sky-300" /> Course *
          </label>
          <select
            id="apply-course"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            className={`${inputCls} appearance-none [&>option]:bg-navy-950`}
          >
            <option value="">Select a course</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title} — {c.duration}
              </option>
            ))}
          </select>
          {errors.course && <p className="mt-2 text-xs font-semibold text-rose-300">{errors.course}</p>}
        </div>

        <div className="sm:col-span-2">
          <span className={labelCls}>
            <Clock className="h-4 w-4 text-sky-300" /> Preferred Timing
          </span>
          <div className="flex flex-wrap gap-3">
            {timings.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTiming(t)}
                aria-pressed={timing === t}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  timing === t
                    ? "bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow-lg shadow-blue-600/30"
                    : "border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-400">
            This is your preference only. Classes are {CLASS_TIMING.toLowerCase()};
            the exact days and timings are confirmed by the academy.
          </p>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="apply-message" className={labelCls}>
            <PencilLine className="h-4 w-4 text-sky-300" /> Message / Questions (optional)
          </label>
          <textarea
            id="apply-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Any questions about the course, timings or batches?"
            rows={4}
            className={`${inputCls} resize-y`}
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-8 w-full !py-4 !text-base">
        Prepare My Application <ArrowRight className="h-5 w-5" />
      </button>
      <p className="mt-4 flex items-start gap-2 text-center text-xs leading-relaxed text-slate-400">
        <Send className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-300" />
        <span>
          On submit, your details open as a WhatsApp message to Techzone Learning
          Academy ({PHONE_DISPLAY}) — press Send there to submit. You can also
          send the same details by email to {EMAIL}. Applications are received on
          WhatsApp and Email; there is no separate database yet. Academy address:{" "}
          {ADDRESS}.
        </span>
      </p>
    </form>
  );
}
