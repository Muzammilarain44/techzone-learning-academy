"use client";
import { motion } from "framer-motion";

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  align = "center",
}: {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`flex max-w-3xl flex-col gap-4 ${alignCls}`}
    >
      <span className="section-label">{label}</span>
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title} {highlight ? <span className="gradient-text">{highlight}</span> : null}
      </h2>
      {description ? <p className="text-base leading-relaxed text-slate-300/90 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
