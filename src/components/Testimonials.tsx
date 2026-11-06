"use client";
import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { WHATSAPP_URL } from "../data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Students"
          highlight="Say"
          description="Real student stories are coming soon — no reviews have been added yet."
        />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto mt-14 max-w-3xl rounded-3xl p-8 text-center sm:p-10"
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600">
            <Star className="h-7 w-7 text-white" />
          </span>
          <h3 className="mt-6 text-2xl font-bold text-white">Student stories coming soon</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            We are collecting real feedback from Techzone students. If you studied at
            Techzone Learning Academy, share your experience with us on WhatsApp and
            your story may be featured here.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mx-auto mt-8"
          >
            <MessageCircle className="h-4 w-4" /> Share Your Experience
          </a>
        </motion.div>
      </div>
    </section>
  );
}
