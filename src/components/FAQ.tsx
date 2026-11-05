"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { faqs } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description="Quick answers to the questions most learners ask before joining."
        />
        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`glass overflow-hidden rounded-2xl ${isOpen ? "border-sky-400/40" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-bold text-white sm:text-lg">{f.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-600">
                    {isOpen ? <Minus className="h-4 w-4 text-white" /> : <Plus className="h-4 w-4 text-white" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-slate-300 sm:text-base">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
