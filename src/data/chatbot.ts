import {
  ADDRESS,
  CLASS_TIMING,
  EMAIL,
  MAPS_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  courses,
} from "./content";

export type BotLang = "en" | "ur";

export type BotLink = { label: string; href: string };

export type BotReply = { text: string; links?: BotLink[] };

export const GREETING: Record<BotLang, string> = {
  en: "Hi! I'm Techzone Guide, Techzone Learning Academy's AI assistant. I can guide you on careers, our 21 courses, admission, class timings and contact. What would you like to know?",
  ur: "Salam! Main Techzone Guide hun, Techzone Learning Academy ka AI assistant. Main aapko courses, career, admission, class timings aur contact ke baare mein guide kar sakta hun. Aap kya jan'na chahte hain?",
};

export const QUICK_TOPICS: { id: string; en: string; ur: string }[] = [
  { id: "career", en: "Career guidance", ur: "Career guidance" },
  { id: "courses", en: "Our courses", ur: "Hamare courses" },
  { id: "admission", en: "Admission process", ur: "Admission process" },
  { id: "timings", en: "Class timings", ur: "Class timings" },
  { id: "contact", en: "Contact & visit us", ur: "Contact & visit us" },
  { id: "apply", en: "Apply now", ur: "Apply now" },
];

const COURSE_LIST_EN = courses
  .map((c) => `• ${c.title} — ${c.duration}`)
  .join("\n");

const COURSE_LIST_UR = courses
  .map((c) => `• ${c.title} — ${c.duration}`)
  .join("\n");

function courseLinks(): BotLink[] {
  return [
    { label: "View all courses", href: "#courses" },
    { label: "Apply now", href: "/apply" },
  ];
}

function findCourse(q: string) {
  const keywords: [string[], string][] = [
    [["python", "ai", "artificial intelligence", "machine learning", "ml"], "python-ai"],
    [["data analysis", "data analyst"], "python-data-analysis"],
    [["full stack", "fullstack", "mern"], "full-stack-development"],
    [["web designing", "web design"], "web-designing"],
    [["graphic", "designing", "photoshop", "illustrator"], "advance-graphic-designing"],
    [["digital marketing", "marketing", "seo", "social media"], "advance-digital-marketing"],
    [["video editing", "video edit"], "advance-video-editing"],
    [["ui", "ux"], "advance-ui-ux-designing"],
    [["shopify", "dropshipping", "online store", "ecommerce", "e-commerce"], "shopify-dropshipping"],
    [["cyber", "hacking", "security"], "cyber-security"],
    [["devops"], "devops"],
    [["autocad", "cad"], "autocad"],
    [["asp", ".net", "dotnet"], "asp-net"],
    [["php", "mysql"], "php-mysql"],
    [["english", "ielts", "pte"], "english-language"],
    [["german"], "german-language"],
    [["ms office", "microsoft office", "office"], "advance-ms-office"],
    [["a/o level", "o level", "a level"], "a-o-level"],
    [["tcit"], "tcit"],
    [["dit"], "dit"],
    [["cit"], "cit"],
  ];
  for (const [words, id] of keywords) {
    if (words.some((w) => q.includes(w))) {
      return courses.find((c) => c.id === id);
    }
  }
  return undefined;
}

export function getBotReply(rawInput: string, lang: BotLang): BotReply {
  const q = ` ${rawInput.toLowerCase().trim()} `;

  const en = lang === "en";

  // Greeting
  if (/\b(hi|hello|hey|salam|assalam|aoa|good morning|good evening)\b/.test(q)) {
    return { text: GREETING[lang] };
  }

  // Thanks
  if (/\b(thank|thanks|shukriya|shukran)\b/.test(q)) {
    return {
      text: en
        ? "You're welcome! Anything else you'd like to know about Techzone?"
        : "Koi baat nahi! Techzone ke baare mein aur kuch jan'na ho to pooch lein.",
    };
  }

  // Fees — never invented; redirect to WhatsApp
  if (/\b(fee|fees|price|cost|charges|payment)\b/.test(q)) {
    return {
      text: en
        ? `I don't have fee details here. Please message us on WhatsApp at ${PHONE_DISPLAY} and the academy will share the fee details for your course.`
        : `Fees ki details mere paas yahan nahi hain. Apne course ki fee jan'ne ke liye WhatsApp par ${PHONE_DISPLAY} par message karein, academy aapko fee bata degi.`,
      links: [{ label: "WhatsApp us", href: WHATSAPP_URL }],
    };
  }

  // Placement / jobs guarantee — never invented
  if (/\b(placement|job guarantee|job placement|salary|package)\b/.test(q)) {
    return {
      text: en
        ? "I can't promise jobs or salaries — no placement details are published. What I can tell you is that our courses focus on practical, in-demand skills. For guidance on which course fits your career goal, message us on WhatsApp."
        : "Main job ya salary ka wada nahi kar sakta — placement ki koi published detail nahi hai. Hamare courses practical aur in-demand skills par focus karte hain. Career goal ke liye kaunsa course best hai, ye jan'ne ke liye WhatsApp par message karein.",
      links: [{ label: "WhatsApp us", href: WHATSAPP_URL }],
    };
  }

  // Branches — single campus only
  if (/\b(branch|branches|other campus|campuses|location|where are you|address|visit)\b/.test(q)) {
    return {
      text: en
        ? `We have one campus: ${ADDRESS}. Classes are ${CLASS_TIMING}. You can visit us or message us on WhatsApp at ${PHONE_DISPLAY}.`
        : `Hamara ek hi campus hai: ${ADDRESS}. Classes ${CLASS_TIMING} hoti hain. Aap visit kar sakte hain ya WhatsApp par ${PHONE_DISPLAY} par message kar sakte hain.`,
      links: [
        { label: "Open in Google Maps", href: MAPS_URL },
        { label: "WhatsApp us", href: WHATSAPP_URL },
      ],
    };
  }

  // Contact
  if (/\b(contact|phone|call|whatsapp|number|email|mail)\b/.test(q)) {
    return {
      text: en
        ? `You can reach Techzone Learning Academy on phone / WhatsApp: ${PHONE_DISPLAY}, email: ${EMAIL}, and visit us at ${ADDRESS}.`
        : `Techzone Learning Academy se rabta karein — phone / WhatsApp: ${PHONE_DISPLAY}, email: ${EMAIL}, address: ${ADDRESS}.`,
      links: [
        { label: "WhatsApp us", href: WHATSAPP_URL },
        { label: "Email us", href: `mailto:${EMAIL}` },
      ],
    };
  }

  // Admission / apply
  if (/\b(admission|admit|apply|enroll|enrol|registration|register)\b/.test(q)) {
    return {
      text: en
        ? `Admission is open. To apply: 1) Choose your course, 2) Fill the admission form, 3) We will contact you on WhatsApp. Classes are ${CLASS_TIMING}.`
        : `Admission open hai. Apply karne ke liye: 1) Apna course choose karein, 2) Admission form fill karein, 3) Hum aap se WhatsApp par rabta karenge. Classes ${CLASS_TIMING} hoti hain.`,
      links: [
        { label: "Open admission form", href: "/apply" },
        { label: "WhatsApp us", href: WHATSAPP_URL },
      ],
    };
  }

  // Timings
  if (/\b(timing|timings|time|schedule|class time|days|kab|din)\b/.test(q)) {
    return {
      text: en
        ? `Classes are ${CLASS_TIMING}. On the admission form you can choose your preferred timing — Morning, Evening, or Any.`
        : `Classes ${CLASS_TIMING} hoti hain. Admission form par aap apni pasand ki timing choose kar sakte hain — Morning, Evening ya Any.`,
      links: [{ label: "Open admission form", href: "/apply" }],
    };
  }

  // Career guidance
  if (/\b(career|job|future|scope|which course|best course|konsa course|kaunsa course)\b/.test(q)) {
    return {
      text: en
        ? "For a career in tech, students often start with Python with AI (1 Year Diploma), Full Stack Development (1 Year Diploma), or Advance Digital Marketing (6 Months). Tell me what interests you — AI, web, design, or marketing — and I'll suggest a course."
        : "Tech mein career ke liye students aksar Python with AI (1 Year Diploma), Full Stack Development (1 Year Diploma) ya Advance Digital Marketing (6 Months) se start karte hain. Mujhe batayein aapko kya pasand hai — AI, web, design ya marketing — main course suggest kar dunga.",
      links: courseLinks(),
    };
  }

  // About Techzone
  if (/\b(about|techzone|academy|institute|who are you|tum kaun|aap kaun)\b/.test(q)) {
    return {
      text: en
        ? "Techzone Learning Academy is a technology institute in Karachi — Go Higher With New Technology. Admission is open and we offer 21 professional courses, from AI and web development to design, marketing and languages."
        : "Techzone Learning Academy Karachi ka ek technology institute hai — Go Higher With New Technology. Admission open hai aur hamare paas 21 professional courses hain, AI aur web development se lekar design, marketing aur languages tak.",
      links: courseLinks(),
    };
  }

  // Specific course
  const course = findCourse(q);
  if (course) {
    return {
      text: en
        ? `${course.title} — ${course.duration}.\n${course.description}\nClasses are ${CLASS_TIMING}.`
        : `${course.title} — ${course.duration}.\n${course.description}\nClasses ${CLASS_TIMING} hoti hain.`,
      links: [
        { label: "View full course details", href: `/courses/${course.id}` },
        { label: "Apply for this course", href: `/apply?course=${course.id}` },
      ],
    };
  }

  // All courses
  if (/\b(course|courses|list|program|programme|diploma|seekhna|seekh)\b/.test(q)) {
    return {
      text: en
        ? `We offer 21 professional courses:\n${COURSE_LIST_EN}\nTap a course name on the Courses section to see its full details, or tell me a course name and I'll explain it.`
        : `Hamare paas 21 professional courses hain:\n${COURSE_LIST_UR}\nKisi course ki poori detail dekhne ke liye Courses section mein us par click karein, ya mujhe course ka naam batayein, main samjha dunga.`,
      links: courseLinks(),
    };
  }

  // Duration question
  if (/\b(duration|months|month|year|kitne|kitna time)\b/.test(q)) {
    return {
      text: en
        ? "Durations depend on the course — from 2 months (Shopify Dropshipping, Advance MS Office) to 1 Year Diplomas (Full Stack Development, Python with AI) and a 2 Year TCIT program. Tell me a course name and I'll tell you its exact duration."
        : "Duration course par depend karti hai — 2 months (Shopify Dropshipping, Advance MS Office) se lekar 1 Year Diploma (Full Stack Development, Python with AI) aur 2 Year TCIT program tak. Course ka naam batayein, main uski exact duration bata dunga.",
      links: courseLinks(),
    };
  }

  // Fallback
  return {
    text: en
      ? `I can help with our 21 courses, admission, class timings and contact. Try asking about a course, e.g. "Python with AI", "timings", or "admission". For anything else, message us on WhatsApp at ${PHONE_DISPLAY}.`
      : `Main aapki 21 courses, admission, class timings aur contact mein madad kar sakta hun. Kisi course ke baare mein poochein, jese "Python with AI", "timings" ya "admission". Kisi aur baat ke liye WhatsApp par ${PHONE_DISPLAY} par message karein.`,
    links: [
      { label: "View all courses", href: "#courses" },
      { label: "WhatsApp us", href: WHATSAPP_URL },
    ],
  };
}
