# Techzone Learning Academy

Premium, modern, futuristic educational institute website for **Techzone Learning Academy** — rebuilt from scratch, VIP level, with an original visual identity. Not a copy of Aptech or any other institute.

Muzammil studies at Techzone Learning Academy. The institute had no proper website, so this site was built for them — designed to look truly real, polished, and full of hard work.

## Stack (verified)

- Next.js **14.2.5**
- React **18.3.1**
- TypeScript **5**
- Tailwind CSS **3.4.1**
- Framer Motion **11.11.17**
- Three.js **0.169.0** + React Three Fiber **8.17.10** (lightweight 3D hero only, lazy-loaded with `next/dynamic` + `ssr: false`, static fallback)
- lucide-react **0.454.0** — pinned exactly. Do NOT upgrade to 1.x: it removed the Facebook / Instagram / LinkedIn brand icons and breaks the build.

## Design

Mostly dark, deep navy background (`#050A1E`), electric blue + purple accents, clean white typography, glassmorphism cards, modern rounded corners.

## Homepage sections (in order)

1. Navbar — Home, Courses, Why Techzone, Learning, Admission, Contact + Apply Now
2. Hero with 3D — "Build Your Future in Technology", 3D computer workstation / AI neural-network visuals, CTAs: Explore Courses, Apply for Admission
3. Why Choose Techzone? — Practical Learning, Industry-Relevant Skills, Expert Guidance, Career Development
4. Explore Our Professional Courses — 21 real courses with search/filter, each with its own detail page at /courses/[slug]
5. How Learning Works / Learning Journey — Learn, Practice, Build Projects, Get Career Ready
6. Learning Environment / Labs — modern labs, practical classes, project-based learning
7. Student Projects showcase — placeholder project cards, clearly marked as examples
8. Admission Process — 4 simple steps + Apply CTA
9. FAQ — general questions, generic answers, no invented dates. No pricing is shown anywhere on the site, as requested.
10. Admission CTA — "Start Your Learning Journey Today"
11. Footer — contact placeholders

## No-invention rule

This site does NOT invent course durations, certificates, job guarantees, testimonials with names, statistics (e.g. "5000+ students"), faculty names, accreditations, or achievements. Pricing is not shown anywhere, as requested. Where a real detail is not confirmed, it says "Contact academy for details". Course descriptions are generic skills descriptions derived from the course name only.

## Run

```bash
npm install
npm run dev
npm run build
```

Dev server runs in this workspace only — it is not reachable from the user's phone/laptop until the project is copied to their laptop and run there.

## Still remaining

- Real photos beyond the campus shots, and real student project work
- Real testimonials (with permission)
- Deployment — see DEPLOYMENT.md (Vercel, free). The admission form is done: it sends applications on WhatsApp and by Email; there is no separate database yet, and the form page says so honestly.
