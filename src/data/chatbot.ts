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

// Class timing in Urdu script (CLASS_TIMING in content.ts is the English version).
const CLASS_TIMING_UR = "2 گھنٹے فی کلاس، ہفتے میں 3 دن";

// Course durations in Urdu script.
const DURATION_UR: Record<string, string> = {
  "1 Year Diploma": "1 سالہ ڈپلومہ",
  "6 Months": "6 ماہ",
  "2 Months": "2 ماہ",
  "5 Months": "5 ماہ",
  "3 Months per Level": "ہر لیول 3 ماہ",
  "2 Years": "2 سال",
};

// Course descriptions translated into Urdu script (titles stay in English,
// as they are the official course names).
const COURSE_DESCRIPTION_UR: Record<string, string> = {
  "full-stack-development":
    "مکمل اور جدید ویب ایپلیکیشن بنانے کا 1 سالہ ڈپلومہ — صارف کو نظر آنے والے صفحات سے لے کر پیچھے موجود سرورز اور ڈیٹا بیس تک۔",
  "python-ai":
    "اے آئی میں 1 سالہ ڈپلومہ — اے آئی کے لیے پائتھن اور مشین لرننگ سے لے کر ڈیپ لرننگ، این ایل پی اور کمپیوٹر ویژن تک، عملی پروجیکٹس اور کیس اسٹڈیز کے ساتھ۔",
  "advance-graphic-designing":
    "بصری ڈیزائن بنیادی باتوں سے لے کر پیشہ ورانہ پورٹ فولیو تک سیکھیں — لوگو، ویکٹر اور مکمل برانڈ ڈیزائن۔",
  "advance-digital-marketing":
    "سیکھیں کہ کاروبار آن لائن کیسے بڑھتے ہیں — سوشل میڈیا اور ایس ای او سے لے کر گوگل ایڈز، یوٹیوب اور فری لانسنگ تک۔",
  "web-designing":
    "خوبصورت اور ریسپانسیو ویب سائٹس ڈیزائن اور بنائیں — ایچ ٹی ایم ایل اور سی ایس ایس سے لے کر ری ایکٹ، یو آئی / یو ایکس اور فائنل پروجیکٹ تک۔",
  "shopify-dropshipping":
    "عملی طریقے سے آن لائن اسٹور شروع کرنا سیکھیں — اسٹور بنانا، پروڈکٹ تلاش کرنا، ڈراپ شپنگ اور میٹا بزنس۔",
  "advance-video-editing":
    "کچی فوٹیج کو شاندار ویڈیو میں بدلیں — ایڈیٹنگ، اینیمیشن، آواز اور ایڈوب ٹولز کے ساتھ تخلیقی اسٹوڈیو کا کام۔",
  "advance-ui-ux-designing":
    "ایسی ایپس اور ویب سائٹس ڈیزائن کریں جو لوگوں کو پسند آئیں — وائر فریم، یو آئی ڈیزائن، موک اپ اور پورٹ فولیو پروجیکٹس۔",
  "asp-net":
    "سی شارپ اور ASP.NET MVC کے ساتھ اصلی ویب ایپلیکیشن بنائیں — ڈیٹا مینجمنٹ، پروگرامنگ اور ایک مکمل پروجیکٹ۔",
  "php-mysql":
    "پی ایچ پی کور، لاراویل اور مائی ایس کیو ایل کے ساتھ سرور سائیڈ ویب ڈویلپمنٹ سیکھیں — اور آخر میں ایک کام کرنے والا پروجیکٹ بنائیں۔",
  "english-language":
    "انگلش قدم بہ قدم سیکھیں — بیگنر سے ایڈوانس تک، ہر لیول 3 ماہ — اور آئی ای ایل ٹی ایس اور پی ٹی ای کی تیاری بھی۔",
  tcit: "2 سالہ پروگرام جس میں انٹرمیڈیٹ کے ساتھ آئی ٹی کی مہارتیں شامل ہیں — کمپیوٹر سائنس، پری انجینئرنگ یا کامرس میں سے منتخب کریں، ہر ایک میں آئی ٹی پر مبنی سال اور ایک پروجیکٹ۔",
  "advance-ms-office":
    "حقیقی کام میں استعمال ہونے والے آفس ٹولز میں مہارت حاصل کریں — صرف 2 ماہ میں ایڈوانس ورڈ، ایکسل اور پاور پوائنٹ۔",
  cit: "ایک مکمل کمپیوٹر کورس — ایم ایس آفس، ڈیزائن، ویب کی بنیادی باتیں، ورڈ پریس اور سوشل میڈیا مارکیٹنگ۔",
  "a-o-level":
    "اے / او لیول کی بھرپور تیاری — انٹرمیڈیٹ، کمپیوٹر اور ریاضی، رہنمائی کے ساتھ مشق۔",
  "python-data-analysis":
    "ڈیٹا کو فیصلوں میں بدلیں — پائتھن، ایس کیو ایل، ڈیٹا صاف کرنا، ویژوئلائزیشن، پاور بی آئی، شماریات اور مشین لرننگ۔",
  dit: "ایک عملی آئی ٹی ڈپلومہ جس میں کمپیوٹر کی بنیادی باتیں، ایم ایس آفس، ڈیزائن، انٹرنیٹ اور ای میل شامل ہیں — پروجیکٹس کے ساتھ۔",
  autocad:
    "آٹو کیڈ کے ساتھ تکنیکی ڈرائنگ سیکھیں — بنیادی ڈرائنگ، 2D ڈرافٹنگ، 3D ماڈلنگ اور آئسومیٹرک ڈرائنگ۔",
  "german-language":
    "جرمن زبان بنیادی باتوں سے سیکھیں — گرامر، الفاظ، بولنا، سننا، پڑھنا اور لکھنا۔",
  devops:
    "سیکھیں کہ جدید سافٹ ویئر کیسے بنایا، بھیجا اور چلایا جاتا ہے — لینکس، گٹ، سی آئی / سی ڈی، ڈاکر اور کوبرنیٹس۔",
  "cyber-security":
    "سسٹم اور ڈیٹا کی حفاظت سیکھیں — نیٹ ورک سیکیورٹی، ایتھیکل ہیکنگ، ویب سیکیورٹی اور کمزوریوں کی جانچ۔",
};

export const GREETING: Record<BotLang, string> = {
  en: "Hello! I am Techzone Agent, Techzone Learning Academy's AI assistant. I can guide you about careers, our 21 courses, admission, class timings and contact. What would you like to know?",
  ur: "ہیلو! میں ٹیک زون کا ایجنٹ ہوں، ٹیک زون لرننگ اکیڈمی کا اے آئی اسسٹنٹ۔ میں آپ کو کیریئر، ہمارے 21 کورسز، داخلہ، کلاس کے اوقات اور رابطے کے بارے میں رہنمائی دے سکتا ہوں۔ آپ کیا جاننا چاہتے ہیں؟",
};

export const QUICK_TOPICS: { id: string; en: string; ur: string }[] = [
  { id: "career", en: "Career guidance", ur: "کیریئر رہنمائی" },
  { id: "courses", en: "Our courses", ur: "ہمارے کورسز" },
  { id: "admission", en: "Admission process", ur: "داخلہ کا طریقہ" },
  { id: "timings", en: "Class timings", ur: "کلاس کے اوقات" },
  { id: "contact", en: "Contact & visit us", ur: "رابطہ کریں" },
  { id: "apply", en: "Apply now", ur: "ابھی اپلائی کریں" },
];

const COURSE_LIST_EN = courses
  .map((c) => `• ${c.title} — ${c.duration}`)
  .join("\n");

const COURSE_LIST_UR = courses
  .map((c) => `• ${c.title} — ${DURATION_UR[c.duration] ?? c.duration}`)
  .join("\n");

function courseLinks(lang: BotLang): BotLink[] {
  return lang === "en"
    ? [
        { label: "View all courses", href: "#courses" },
        { label: "Apply now", href: "/apply" },
      ]
    : [
        { label: "تمام کورسز دیکھیں", href: "#courses" },
        { label: "ابھی اپلائی کریں", href: "/apply" },
      ];
}

function findCourse(q: string) {
  const keywords: [string[], string][] = [
    [["python", "ai", "artificial intelligence", "machine learning", "ml", "پائتھن"], "python-ai"],
    [["data analysis", "data analyst"], "python-data-analysis"],
    [["full stack", "fullstack", "mern"], "full-stack-development"],
    [["web designing", "web design"], "web-designing"],
    [["graphic", "designing", "photoshop", "illustrator", "گرافک"], "advance-graphic-designing"],
    [["digital marketing", "marketing", "seo", "social media", "مارکیٹنگ"], "advance-digital-marketing"],
    [["video editing", "video edit", "ویڈیو"], "advance-video-editing"],
    [["ui", "ux"], "advance-ui-ux-designing"],
    [["shopify", "dropshipping", "online store", "ecommerce", "e-commerce", "شاپیفائی"], "shopify-dropshipping"],
    [["cyber", "hacking", "security", "سائبر"], "cyber-security"],
    [["devops"], "devops"],
    [["autocad", "cad"], "autocad"],
    [["asp", ".net", "dotnet"], "asp-net"],
    [["php", "mysql"], "php-mysql"],
    [["english", "ielts", "pte", "انگلش"], "english-language"],
    [["german", "جرمن"], "german-language"],
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

  // Urdu-script keywords (word boundaries do not work for Urdu script,
  // so these are plain substring checks).
  const hasUrdu = (words: string[]) => words.some((w) => q.includes(w));

  // Greeting
  if (
    /\b(hi|hello|hey|salam|assalam|aoa|good morning|good evening)\b/.test(q) ||
    hasUrdu(["سلام", "ہیلو", "السلام علیکم", "صبح بخیر", "شام بخیر"])
  ) {
    return { text: GREETING[lang] };
  }

  // Thanks
  if (
    /\b(thank|thanks|shukriya|shukran)\b/.test(q) ||
    hasUrdu(["شکریہ", "بہت شکریہ"])
  ) {
    return {
      text: en
        ? "You're welcome! Anything else you'd like to know about Techzone?"
        : "خوش آمدید! ٹیک زون کے بارے میں مزید کچھ جاننا ہو تو پوچھیں۔",
    };
  }

  // Fees — never invented; redirect to WhatsApp
  if (
    /\b(fee|fees|price|cost|charges|payment)\b/.test(q) ||
    hasUrdu(["فیس", "قیمت", "خرچہ"])
  ) {
    return {
      text: en
        ? `I don't have fee details here. Please message us on WhatsApp at ${PHONE_DISPLAY} and the academy will share the fee details for your course.`
        : `میرے پاس یہاں فیس کی تفصیل نہیں ہے۔ اپنے کورس کی فیس جاننے کے لیے واٹس ایپ پر ${PHONE_DISPLAY} پر پیغام بھیجیں، اکیڈمی آپ کو فیس کی تفصیل بتا دے گی۔`,
      links: [
        {
          label: en ? "WhatsApp us" : "واٹس ایپ پر رابطہ کریں",
          href: WHATSAPP_URL,
        },
      ],
    };
  }

  // Placement / jobs guarantee — never invented
  if (
    /\b(placement|job guarantee|job placement|salary|package)\b/.test(q) ||
    hasUrdu(["پلیسمنٹ", "ملازمت", "نوکری", "تنخواہ", "جاب"])
  ) {
    return {
      text: en
        ? "I can't promise jobs or salaries — no placement details are published. What I can tell you is that our courses focus on practical, in-demand skills. For guidance on which course fits your career goal, message us on WhatsApp."
        : "میں ملازمت یا تنخواہ کا وعدہ نہیں کر سکتا — پلیسمنٹ کی کوئی شائع شدہ تفصیل نہیں ہے۔ ہمارے کورسز عملی اور مانگ والے ہنر پر توجہ دیتے ہیں۔ آپ کے کیریئر کے مقصد کے لیے کون سا کورس موزوں ہے، یہ جاننے کے لیے واٹس ایپ پر پیغام بھیجیں۔",
      links: [
        {
          label: en ? "WhatsApp us" : "واٹس ایپ پر رابطہ کریں",
          href: WHATSAPP_URL,
        },
      ],
    };
  }

  // Branches — single campus only
  if (
    /\b(branch|branches|other campus|campuses|location|where are you|address|visit)\b/.test(q) ||
    hasUrdu(["برانچ", "کیمپس", "پتہ", "ایڈریس", "کہاں", "وزٹ"])
  ) {
    return {
      text: en
        ? `We have one campus: ${ADDRESS}. Classes are ${CLASS_TIMING}. You can visit us or message us on WhatsApp at ${PHONE_DISPLAY}.`
        : `ہمارا صرف ایک کیمپس ہے: ${ADDRESS}۔ کلاسیں ${CLASS_TIMING_UR} ہوتی ہیں۔ آپ وزٹ کر سکتے ہیں یا واٹس ایپ پر ${PHONE_DISPLAY} پر پیغام بھیج سکتے ہیں۔`,
      links: [
        {
          label: en ? "Open in Google Maps" : "گوگل میپس میں کھولیں",
          href: MAPS_URL,
        },
        {
          label: en ? "WhatsApp us" : "واٹس ایپ پر رابطہ کریں",
          href: WHATSAPP_URL,
        },
      ],
    };
  }

  // Contact
  if (
    /\b(contact|phone|call|whatsapp|number|email|mail)\b/.test(q) ||
    hasUrdu(["رابطہ", "فون", "کال", "واٹس ایپ", "نمبر", "ای میل"])
  ) {
    return {
      text: en
        ? `You can reach Techzone Learning Academy on phone / WhatsApp: ${PHONE_DISPLAY}, email: ${EMAIL}, and visit us at ${ADDRESS}.`
        : `آپ ٹیک زون لرننگ اکیڈمی سے فون / واٹس ایپ: ${PHONE_DISPLAY}، ای میل: ${EMAIL} پر رابطہ کر سکتے ہیں، اور ہمارا پتہ ہے: ${ADDRESS}۔`,
      links: [
        {
          label: en ? "WhatsApp us" : "واٹس ایپ پر رابطہ کریں",
          href: WHATSAPP_URL,
        },
        { label: en ? "Email us" : "ای میل کریں", href: `mailto:${EMAIL}` },
      ],
    };
  }

  // Admission / apply
  if (
    /\b(admission|admit|apply|enroll|enrol|registration|register)\b/.test(q) ||
    hasUrdu(["داخلہ", "اپلائی", "اندراج", "رجسٹریشن"])
  ) {
    return {
      text: en
        ? `Admission is open. To apply: 1) Choose your course, 2) Fill the admission form, 3) We will contact you on WhatsApp. Classes are ${CLASS_TIMING}.`
        : `داخلہ کھلا ہے۔ اپلائی کرنے کے لیے: 1) اپنا کورس منتخب کریں، 2) داخلہ فارم پُر کریں، 3) ہم واٹس ایپ پر آپ سے رابطہ کریں گے۔ کلاسیں ${CLASS_TIMING_UR} ہوتی ہیں۔`,
      links: [
        {
          label: en ? "Open admission form" : "داخلہ فارم کھولیں",
          href: "/apply",
        },
        {
          label: en ? "WhatsApp us" : "واٹس ایپ پر رابطہ کریں",
          href: WHATSAPP_URL,
        },
      ],
    };
  }

  // Timings
  if (
    /\b(timing|timings|time|schedule|class time|days|kab|din)\b/.test(q) ||
    hasUrdu(["اوقات", "وقت", "شیڈول", "دن", "کب"])
  ) {
    return {
      text: en
        ? `Classes are ${CLASS_TIMING}. On the admission form you can choose your preferred timing — Morning, Evening, or Any.`
        : `کلاسیں ${CLASS_TIMING_UR} ہوتی ہیں۔ داخلہ فارم پر آپ اپنی پسند کا وقت منتخب کر سکتے ہیں — صبح، شام یا کوئی بھی۔`,
      links: [
        {
          label: en ? "Open admission form" : "داخلہ فارم کھولیں",
          href: "/apply",
        },
      ],
    };
  }

  // Career guidance
  if (
    /\b(career|job|future|scope|which course|best course|konsa course|kaunsa course)\b/.test(q) ||
    hasUrdu(["کیریئر", "مستقبل", "کون سا کورس", "بہترین کورس"])
  ) {
    return {
      text: en
        ? "For a career in tech, students often start with Python with AI (1 Year Diploma), Full Stack Development (1 Year Diploma), or Advance Digital Marketing (6 Months). Tell me what interests you — AI, web, design, or marketing — and I'll suggest a course."
        : "ٹیک میں کیریئر کے لیے طلبہ اکثر Python with AI (1 سالہ ڈپلومہ)، Full Stack Development (1 سالہ ڈپلومہ) یا Advance Digital Marketing (6 ماہ) سے شروع کرتے ہیں۔ مجھے بتائیں کہ آپ کو کیا پسند ہے — اے آئی، ویب، ڈیزائن یا مارکیٹنگ — میں آپ کو کورس تجویز کروں گا۔",
      links: courseLinks(lang),
    };
  }

  // About Techzone
  if (
    /\b(about|techzone|academy|institute|who are you|tum kaun|aap kaun)\b/.test(q) ||
    hasUrdu(["بارے میں", "ٹیک زون", "اکیڈمی", "ادارہ", "آپ کون", "تم کون"])
  ) {
    return {
      text: en
        ? "Techzone Learning Academy is a technology institute in Karachi — Go Higher With New Technology. Admission is open and we offer 21 professional courses, from AI and web development to design, marketing and languages."
        : "ٹیک زون لرننگ اکیڈمی کراچی کا ایک ٹیکنالوجی ادارہ ہے — Go Higher With New Technology۔ داخلہ کھلا ہے اور ہمارے پاس 21 پیشہ ورانہ کورسز ہیں، اے آئی اور ویب ڈویلپمنٹ سے لے کر ڈیزائن، مارکیٹنگ اور زبانوں تک۔",
      links: courseLinks(lang),
    };
  }

  // Specific course
  const course = findCourse(q);
  if (course) {
    const durationUr = DURATION_UR[course.duration] ?? course.duration;
    const descriptionUr =
      COURSE_DESCRIPTION_UR[course.id] ?? course.description;
    return {
      text: en
        ? `${course.title} — ${course.duration}.\n${course.description}\nClasses are ${CLASS_TIMING}.`
        : `${course.title} — ${durationUr}.\n${descriptionUr}\nکلاسیں ${CLASS_TIMING_UR} ہوتی ہیں۔`,
      links: [
        {
          label: en ? "View full course details" : "کورس کی مکمل تفصیل دیکھیں",
          href: `/courses/${course.id}`,
        },
        {
          label: en ? "Apply for this course" : "اس کورس کے لیے اپلائی کریں",
          href: `/apply?course=${course.id}`,
        },
      ],
    };
  }

  // All courses
  if (
    /\b(course|courses|list|program|programme|diploma|seekhna|seekh)\b/.test(q) ||
    hasUrdu(["کورس", "کورسز", "فہرست", "پروگرام", "ڈپلومہ", "سیکھنا"])
  ) {
    return {
      text: en
        ? `We offer 21 professional courses:\n${COURSE_LIST_EN}\nTap a course name on the Courses section to see its full details, or tell me a course name and I'll explain it.`
        : `ہمارے پاس 21 پیشہ ورانہ کورسز ہیں:\n${COURSE_LIST_UR}\nکسی کورس کی مکمل تفصیل دیکھنے کے لیے کورسز والے حصے میں اس پر کلک کریں، یا مجھے کورس کا نام بتائیں، میں آپ کو سمجھا دوں گا۔`,
      links: courseLinks(lang),
    };
  }

  // Duration question
  if (
    /\b(duration|months|month|year|kitne|kitna time)\b/.test(q) ||
    hasUrdu(["دورانیہ", "مدت", "مہینے", "سال", "کتنا وقت"])
  ) {
    return {
      text: en
        ? "Durations depend on the course — from 2 months (Shopify Dropshipping, Advance MS Office) to 1 Year Diplomas (Full Stack Development, Python with AI) and a 2 Year TCIT program. Tell me a course name and I'll tell you its exact duration."
        : "مدت کورس پر منحصر ہے — 2 ماہ (Shopify Dropshipping، Advance MS Office) سے لے کر 1 سالہ ڈپلومہ (Full Stack Development، Python with AI) اور 2 سالہ TCIT پروگرام تک۔ کورس کا نام بتائیں، میں آپ کو اس کی صحیح مدت بتاؤں گا۔",
      links: courseLinks(lang),
    };
  }

  // Fallback
  return {
    text: en
      ? `I can help with our 21 courses, admission, class timings and contact. Try asking about a course, e.g. "Python with AI", "timings", or "admission". For anything else, message us on WhatsApp at ${PHONE_DISPLAY}.`
      : `میں آپ کے 21 کورسز، داخلہ، کلاس کے اوقات اور رابطے میں مدد کر سکتا ہوں۔ کسی کورس کے بارے میں پوچھیں، جیسے "Python with AI"، "اوقات" یا "داخلہ"۔ کسی اور بات کے لیے واٹس ایپ پر ${PHONE_DISPLAY} پر پیغام بھیجیں۔`,
    links: [
      {
        label: en ? "View all courses" : "تمام کورسز دیکھیں",
        href: "#courses",
      },
      {
        label: en ? "WhatsApp us" : "واٹس ایپ پر رابطہ کریں",
        href: WHATSAPP_URL,
      },
    ],
  };
}
