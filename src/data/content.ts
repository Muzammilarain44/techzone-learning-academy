import {
  Brain,
  Code2,
  Palette,
  Megaphone,
  FileCode2,
  MonitorSmartphone,
  Clapperboard,
  LayoutDashboard,
  Database,
  Languages,
  GraduationCap,
  Briefcase,
  PenTool,
  Globe,
  ShieldCheck,
  Cloud,
  ShoppingBag,
  DraftingCompass,
  FileSpreadsheet,
  BookOpen,
  Server,
  type LucideIcon,
} from "lucide-react";

export const PHONE_DISPLAY = "+92 330 3094425";
export const PHONE_TEL = "tel:+923303094425";
export const WHATSAPP_URL = "https://wa.me/923303094425";
export const ADDRESS = "605 Shahrah-e-Faisal, Block 6, P.E.C.H.S., Karachi 75400";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=605+Shahrah-e-Faisal+Block+6+PECHS+Karachi";
export const CLASS_TIMING = "2 hours per class, 3 days a week";
export const TAGLINE = "Go Higher With New Technology";
export const INSTAGRAM_URL = "https://www.instagram.com/techzonelearning/";
export const FACEBOOK_URL = "https://www.facebook.com/Techzonelearn";
export const EMAIL = "techzone.learning@gmail.com";
export const EMAIL_MAILTO = "mailto:techzone.learning@gmail.com";

export type Course = {
  id: string;
  title: string;
  short: string;
  description: string;
  duration: string;
  category: string;
  featured?: boolean;
  learn: string[];
  tools: string[];
  icon: LucideIcon;
  gradient: string;
  iconBg: string;
};

export const categories = [
  "All",
  "Popular",
  "Development",
  "Design",
  "AI & Data",
  "Marketing & Business",
  "IT & Office",
  "Languages & Academic",
  "DevOps & Security",
] as const;

export const courses: Course[] = [
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    short: "Full Stack Development",
    description:
      "A 1-year diploma to build complete, modern web applications — from the pages users see to the servers and databases behind them.",
    duration: "1 Year Diploma",
    category: "Development",
    featured: true,
    learn: [
      "Modern web pages with HTML, CSS, Bootstrap and Advanced JavaScript",
      "Front-end apps with ReactJS, Redux and Next.js",
      "Back-end with Node.js, Express and MongoDB",
      "Mobile apps with React Native and TypeScript",
    ],
    tools: ["HTML", "CSS", "Bootstrap", "Advanced JavaScript", "ReactJS", "Redux", "ECMAScript", "TypeScript", "Next.js", "React Native", "Node.js", "Express", "MongoDB"],
    icon: Code2,
    gradient: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-500/15 text-violet-300",
  },
  {
    id: "python-ai",
    title: "Python with Artificial Intelligence",
    short: "Python with AI",
    description:
      "A 1-year diploma in AI — from Python for AI and machine learning to deep learning, NLP and computer vision, with hands-on projects and case studies.",
    duration: "1 Year Diploma",
    category: "AI & Data",
    featured: true,
    learn: [
      "Machine learning: supervised, unsupervised and reinforcement learning",
      "Deep learning, neural networks, CNNs and RNNs",
      "NLP: text classification, NER, sentiment analysis and translation",
      "Computer vision, GANs, transfer learning and model deployment",
    ],
    tools: ["Intro to AI", "Python for AI", "Machine Learning", "Deep Learning", "Neural Networks", "CNNs", "RNNs", "NLP", "Text Classification", "NER", "Sentiment Analysis", "Language Translation", "Computer Vision", "Image Classification", "Object Detection", "Image Segmentation", "GANs", "Transfer Learning", "Model Deployment", "AI Ethics", "AI Applications (Healthcare, Finance)", "Hands-on Projects"],
    icon: Brain,
    gradient: "from-sky-500 to-blue-600",
    iconBg: "bg-sky-500/15 text-sky-300",
  },
  {
    id: "advance-graphic-designing",
    title: "Advance Graphic Designing",
    short: "Advance Graphic Designing",
    description:
      "Learn visual design from the basics to professional portfolio work — logos, vectors and complete brand designs.",
    duration: "6 Months",
    category: "Design",
    featured: true,
    learn: [
      "Design basics, vector work and logo design",
      "Adobe Illustrator, Photoshop and Adobe XD",
      "Figma and Framer for modern design workflows",
      "Portfolio projects to showcase your work",
    ],
    tools: ["Basics", "Introduction", "Vector", "Logos", "Adobe Illustrator", "Adobe Photoshop", "Adobe XD", "Figma", "Framer", "Portfolio Projects"],
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
    iconBg: "bg-pink-500/15 text-pink-300",
  },
  {
    id: "advance-digital-marketing",
    title: "Advance Digital Marketing",
    short: "Advance Digital Marketing",
    description:
      "Learn how businesses grow online — from social media and SEO to Google Ads, YouTube and freelancing.",
    duration: "6 Months",
    category: "Marketing & Business",
    featured: true,
    learn: [
      "Social media marketing, post designing and content writing with AI",
      "SEO, WordPress and Google Ads",
      "Affiliate marketing and YouTube marketing",
      "Introduction to freelancing and real projects",
    ],
    tools: ["Post Designing", "WordPress", "SEO", "Content Writing with AI", "Social Media Marketing", "Google Ads", "Affiliate Marketing", "YouTube Marketing", "Introduction to Freelancing", "Projects"],
    icon: Megaphone,
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-500/15 text-emerald-300",
  },
  {
    id: "web-designing",
    title: "Web Designing",
    short: "Web Designing",
    description:
      "Design and build beautiful, responsive websites — from HTML and CSS to React, UI/UX and a final project.",
    duration: "6 Months",
    category: "Development",
    featured: true,
    learn: [
      "HTML/CSS and JavaScript for interactive pages",
      "Responsive layouts with Bootstrap and React",
      "UI/UX basics for clean, user-friendly design",
      "A complete project to finish the course",
    ],
    tools: ["HTML/CSS", "JavaScript", "React", "UI/UX", "Bootstrap", "Project"],
    icon: LayoutDashboard,
    gradient: "from-cyan-500 to-sky-600",
    iconBg: "bg-cyan-500/15 text-cyan-300",
  },
  {
    id: "shopify-dropshipping",
    title: "Shopify Dropshipping",
    short: "Shopify Dropshipping",
    description:
      "Learn to start an online store the practical way — store creation, product hunting, dropshipping and Meta Business.",
    duration: "2 Months",
    category: "Marketing & Business",
    featured: true,
    learn: [
      "Shopify store creation and customisation",
      "Product hunting and e-commerce markets",
      "Post and web banner design for your store",
      "Dropshipping and Meta Business",
    ],
    tools: ["Introduction", "Shopify Store Creation", "Post/Web Banner Design", "E-commerce Market", "Product Hunting", "Dropshipping", "Customization", "Meta Business"],
    icon: ShoppingBag,
    gradient: "from-lime-500 to-emerald-500",
    iconBg: "bg-lime-500/15 text-lime-300",
  },
  {
    id: "advance-video-editing",
    title: "Advance Video Editing",
    short: "Advance Video Editing",
    description:
      "Turn raw footage into polished videos — editing, animation, sound and creative studio work with Adobe tools.",
    duration: "6 Months",
    category: "Design",
    learn: [
      "Video editing and composing, 2D animation",
      "Adobe Premiere Pro and After Effects",
      "Adobe Audition for sound",
      "Creative studio work and a final project",
    ],
    tools: ["Basics", "Introduction", "2D Animation", "Editing & Composing", "Adobe Premiere Pro", "Adobe After Effects", "Adobe Audition", "Creative Studio", "Project"],
    icon: Clapperboard,
    gradient: "from-red-500 to-rose-600",
    iconBg: "bg-red-500/15 text-red-300",
  },
  {
    id: "advance-ui-ux-designing",
    title: "Advance UI/UX Designing",
    short: "Advance UI/UX Designing",
    description:
      "Design apps and websites people love to use — wireframes, UI design, mockups and portfolio projects.",
    duration: "5 Months",
    category: "Design",
    learn: [
      "UI/UX basics, wireframes and mockups",
      "UI design in Figma and Adobe Photoshop",
      "HTML and CSS for designers",
      "Portfolio projects to showcase your work",
    ],
    tools: ["Basics", "Introduction", "Wireframe", "Figma", "UI Design", "Adobe Photoshop", "Mockup", "HTML", "CSS", "Portfolio Projects"],
    icon: PenTool,
    gradient: "from-fuchsia-500 to-purple-600",
    iconBg: "bg-fuchsia-500/15 text-fuchsia-300",
  },
  {
    id: "asp-net",
    title: "Asp.Net",
    short: "Asp.Net",
    description:
      "Build real web applications with C# and ASP.NET MVC — data management, programming and a complete project.",
    duration: "6 Months",
    category: "Development",
    learn: [
      "Programming in C#",
      "Data management",
      "MVC web applications",
      "A complete project",
    ],
    tools: ["Data Management", "Programming in C#", "MVC Web Application", "Project"],
    icon: Server,
    gradient: "from-blue-500 to-indigo-600",
    iconBg: "bg-blue-500/15 text-blue-300",
  },
  {
    id: "php-mysql",
    title: "PHP / MySQL",
    short: "PHP / MySQL",
    description:
      "Learn server-side web development with PHP Core, Laravel and MySQL — and finish with a working project.",
    duration: "6 Months",
    category: "Development",
    learn: [
      "PHP Core and PHP Laravel",
      "MySQL databases",
      "Building dynamic, database-driven websites",
      "A complete project",
    ],
    tools: ["MySQL", "PHP Laravel", "PHP Core", "Project"],
    icon: Database,
    gradient: "from-indigo-500 to-violet-600",
    iconBg: "bg-indigo-500/15 text-indigo-300",
  },
  {
    id: "english-language",
    title: "English Language",
    short: "English Language",
    description:
      "Build English step by step — Beginner to Advance, 3 months per level — plus IELTS and PTE preparation.",
    duration: "3 Months per Level",
    category: "Languages & Academic",
    learn: [
      "Beginner, Pre-Intermediate, Intermediate and Advance levels",
      "Speaking, listening, reading and writing",
      "IELTS preparation",
      "PTE preparation",
    ],
    tools: ["Beginner — 3 Months", "Pre-Intermediate — 3 Months", "Intermediate — 3 Months", "Advance — 3 Months", "IELTS Preparation", "PTE Preparation"],
    icon: Languages,
    gradient: "from-teal-500 to-cyan-600",
    iconBg: "bg-teal-500/15 text-teal-300",
  },
  {
    id: "tcit",
    title: "TCIT — Techzone College of Information Technology",
    short: "TCIT",
    description:
      "A 2-year programme combining Intermediate with IT skills — choose Computer Science, Pre-Engineering or Commerce, each with IT-focused years and a project.",
    duration: "2 Years",
    category: "IT & Office",
    learn: [
      "Inter + IT Skills in all three streams",
      "Computer Science: Data Analysis, AI, C# (1st Year) and Web Development (2nd Year)",
      "Pre-Engineering: Python Programming (1st Year) and Digital Marketing, Shopify (2nd Year)",
      "Commerce: Graphic Designing (1st Year) and Digital Marketing, Shopify (2nd Year)",
    ],
    tools: ["Computer Science", "Pre-Engineering", "Commerce", "Inter + IT Skills", "Data Analysis", "AI", "C#", "Web Development", "Python Programming", "Digital Marketing", "Shopify", "Graphic Designing", "Project"],
    icon: GraduationCap,
    gradient: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-500/15 text-amber-300",
  },
  {
    id: "advance-ms-office",
    title: "Advance MS Office",
    short: "Advance MS Office",
    description:
      "Master the office tools used in real work — advanced Word, Excel and PowerPoint in just 2 months.",
    duration: "2 Months",
    category: "IT & Office",
    learn: [
      "Advance MS Word",
      "Advance MS Excel",
      "Advance PowerPoint",
    ],
    tools: ["Advance MS Word", "Advance MS Excel", "Advance PowerPoint"],
    icon: FileSpreadsheet,
    gradient: "from-sky-500 to-cyan-600",
    iconBg: "bg-sky-500/15 text-sky-300",
  },
  {
    id: "cit",
    title: "CIT",
    short: "CIT",
    description:
      "A complete computer course — MS Office, design, web basics, WordPress and social media marketing.",
    duration: "6 Months",
    category: "IT & Office",
    learn: [
      "MS Office and computer fundamentals",
      "Adobe Illustrator and Photoshop basics",
      "HTML/CSS and WordPress",
      "Social media marketing",
    ],
    tools: ["MS Office", "Adobe Illustrator", "Adobe Photoshop", "HTML/CSS", "WordPress", "Social Media Marketing"],
    icon: MonitorSmartphone,
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-500/15 text-cyan-300",
  },
  {
    id: "a-o-level",
    title: "A/O Level (Preparation)",
    short: "A/O Level Preparation",
    description:
      "Focused preparation for A/O Level — Intermediate, Computer and Mathematics, with guided practice.",
    duration: "6 Months",
    category: "Languages & Academic",
    learn: [
      "Intermediate preparation",
      "Computer",
      "Mathematics",
    ],
    tools: ["Intermediate", "Computer", "Mathematics"],
    icon: BookOpen,
    gradient: "from-slate-400 to-slate-600",
    iconBg: "bg-slate-400/15 text-slate-300",
  },
  {
    id: "python-data-analysis",
    title: "Python with Data Analysis",
    short: "Python with Data Analysis",
    description:
      "Turn data into decisions — Python, SQL, cleaning, visualisation, Power BI, statistics and machine learning.",
    duration: "6 Months",
    category: "AI & Data",
    learn: [
      "Python programming and data cleaning/preprocessing",
      "Data analysis, wrangling and SQL",
      "Data visualisation and Power BI",
      "Machine learning, advanced statistics and data mining",
    ],
    tools: ["Python Programming", "Data Cleaning and Preprocessing", "Data Analysis", "SQL", "Data Wrangling", "Data Visualization", "Machine Learning", "Power BI", "Advanced Statistics", "Data Mining"],
    icon: FileCode2,
    gradient: "from-amber-500 to-yellow-500",
    iconBg: "bg-amber-500/15 text-amber-300",
  },
  {
    id: "dit",
    title: "DIT",
    short: "DIT",
    description:
      "A practical IT diploma covering computer basics, MS Office, design, internet and email — with projects.",
    duration: "6 Months",
    category: "IT & Office",
    learn: [
      "Computer basics, MS Office and the internet",
      "Graphic designing basics and email",
      "Everyday digital skills",
      "Projects",
    ],
    tools: ["Introduction", "Computer Basics", "MS Office", "Graphic Designing", "Internet", "Email", "Projects"],
    icon: Briefcase,
    gradient: "from-emerald-500 to-green-600",
    iconBg: "bg-emerald-500/15 text-emerald-300",
  },
  {
    id: "autocad",
    title: "AutoCAD",
    short: "AutoCAD",
    description:
      "Learn technical drawing with AutoCAD — basic drawings, 2D drafting, 3D modelling and isometric drawing.",
    duration: "6 Months",
    category: "Design",
    learn: [
      "Basic drawings and 2D drafting",
      "3D modelling",
      "Isometric drawing",
      "Projects",
    ],
    tools: ["Introduction", "Basic Drawings", "2D Drafting", "3D Modeling", "Isometric Drawing", "Projects"],
    icon: DraftingCompass,
    gradient: "from-orange-500 to-red-500",
    iconBg: "bg-orange-500/15 text-orange-300",
  },
  {
    id: "german-language",
    title: "German Language",
    short: "German Language",
    description:
      "Learn German from the basics — grammar, vocabulary, speaking, listening, reading and writing.",
    duration: "6 Months",
    category: "Languages & Academic",
    learn: [
      "Basic grammar and vocabulary",
      "Speaking and listening",
      "Reading and writing",
    ],
    tools: ["Introduction", "Basic Grammar", "Vocabulary", "Speaking", "Listening", "Reading", "Writing"],
    icon: Globe,
    gradient: "from-yellow-500 to-amber-600",
    iconBg: "bg-yellow-500/15 text-yellow-300",
  },
  {
    id: "devops",
    title: "DevOps",
    short: "DevOps",
    description:
      "Learn how modern software is built, shipped and run — Linux, Git, CI/CD, Docker and Kubernetes.",
    duration: "6 Months",
    category: "DevOps & Security",
    learn: [
      "Linux basics and Git & GitHub",
      "CI/CD pipelines",
      "Docker and Kubernetes",
      "Projects",
    ],
    tools: ["Introduction", "Linux Basics", "Git & GitHub", "CI/CD", "Docker", "Kubernetes", "Projects"],
    icon: Cloud,
    gradient: "from-violet-500 to-indigo-600",
    iconBg: "bg-violet-500/15 text-violet-300",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    short: "Cyber Security",
    description:
      "Learn to protect systems and data — network security, ethical hacking, web security and vulnerability assessment.",
    duration: "6 Months",
    category: "DevOps & Security",
    learn: [
      "Network security and ethical hacking",
      "Web security",
      "Vulnerability assessment",
      "Projects",
    ],
    tools: ["Introduction", "Network Security", "Ethical Hacking", "Web Security", "Vulnerability Assessment", "Projects"],
    icon: ShieldCheck,
    gradient: "from-red-500 to-orange-500",
    iconBg: "bg-red-500/15 text-red-300",
  },
];


export const courseOutcomes: Record<string, string> = {
  "full-stack-development": "Finish with a complete full-stack web application — front-end, back-end and database — built as your final project.",
  "python-ai": "Finish with hands-on AI projects and case studies covering machine learning, deep learning, NLP and computer vision.",
  "advance-graphic-designing": "Finish with a portfolio of design work — logos, vectors and brand designs — ready to show to clients or employers.",
  "advance-digital-marketing": "Finish with real marketing projects — posts, campaigns and a freelancing-ready skill set.",
  "web-designing": "Finish with a complete responsive website project built from design to deployment.",
  "shopify-dropshipping": "Finish with a working Shopify store — created, customised and ready for product hunting and dropshipping.",
  "advance-video-editing": "Finish with a polished edited video project made with professional Adobe tools.",
  "advance-ui-ux-designing": "Finish with a portfolio of UI/UX work — wireframes, mockups and complete app/website designs.",
  "asp-net": "Finish with a complete MVC web application built in C# and ASP.NET.",
  "php-mysql": "Finish with a working database-driven website built with PHP and MySQL.",
  "english-language": "Finish each level with stronger speaking, listening, reading and writing — and IELTS/PTE preparation for those who need it.",
  "tcit": "Finish with Intermediate plus IT skills and a project in your chosen stream — Computer Science, Pre-Engineering or Commerce.",
  "advance-ms-office": "Finish confident in advanced Word, Excel and PowerPoint for real office work.",
  "cit": "Finish with a broad, practical IT skill set — office tools, design basics, web basics and social media marketing.",
  "a-o-level": "Finish prepared for A/O Level with focused practice in Intermediate, Computer and Mathematics.",
  "python-data-analysis": "Finish with data analysis projects — cleaned data, visualisations, dashboards and machine learning work.",
  "dit": "Finish with everyday IT skills and practical projects covering computers, office tools, design, internet and email.",
  "autocad": "Finish with technical drawings and 3D modelling projects made in AutoCAD.",
  "german-language": "Finish able to speak, listen, read and write German at a practical, everyday level.",
  "devops": "Finish with DevOps projects — Linux, Git, CI/CD, Docker and Kubernetes in practice.",
  "cyber-security": "Finish with practical cyber security projects — network security, ethical hacking and vulnerability assessment.",
};

export const campusPhotos = [
  {
    src: "/campus-exterior-1.jpg",
    alt: "Techzone Learning Academy, Campus 3, Shahrah-e-Faisal — exterior",
    caption: "Campus 3, Shahrah-e-Faisal — exterior",
  },
  {
    src: "/campus-exterior-2.jpg",
    alt: "Techzone Learning Academy entrance, Campus 3, Shahrah-e-Faisal — exterior",
    caption: "Campus 3, Shahrah-e-Faisal — entrance",
  },
  {
    src: "/campus-interior.jpg",
    alt: "Techzone Learning Academy campus reception / interior",
    caption: "Campus reception / interior",
  },
];

export const whyChoose = [
  {
    title: "Practical Learning",
    description:
      "Learn by doing. Classes focus on hands-on practice, not just theory — so you build real skills you can actually use.",
    icon: "FlaskConical",
  },
  {
    title: "Industry-Relevant Skills",
    description:
      "Courses are built around the skills used in today's technology work — modern tools, current methods and real tasks.",
    icon: "TrendingUp",
  },
  {
    title: "Expert Guidance",
    description:
      "Learn with guidance from instructors who explain concepts clearly, step by step, and help you when you get stuck.",
    icon: "GraduationCap",
  },
  {
    title: "Career Development",
    description:
      "Build projects, grow your confidence and prepare for the next step — further learning, freelancing or a technology career.",
    icon: "Briefcase",
  },
];

export const learningSteps = [
  {
    step: "01",
    title: "Learn",
    description:
      "Start with clear, step-by-step lessons that explain each concept in simple, practical language.",
  },
  {
    step: "02",
    title: "Practice",
    description:
      "Apply what you learn straight away with guided exercises and hands-on practice in class.",
  },
  {
    step: "03",
    title: "Build Projects",
    description:
      "Turn your skills into real work — build projects you can show, discuss and keep improving.",
  },
  {
    step: "04",
    title: "Get Career Ready",
    description:
      "Prepare for what's next: polish your work, build confidence and plan your next step in technology.",
  },
];

export const faqs = [
  {
    q: "Is admission open?",
    a: "Yes — Admission Open. Contact the academy on WhatsApp at +92 330 3094425 to apply and confirm the latest batch details.",
  },
  {
    q: "How long are classes, and how many days a week?",
    a: "Classes are 2 hours per class, 3 days a week. The exact days and timings for your course are confirmed by the academy when you apply — message +92 330 3094425 on WhatsApp.",
  },
  {
    q: "How can I contact the academy?",
    a: "Call or WhatsApp +92 330 3094425, email techzone.learning@gmail.com, or visit 605 Shahrah-e-Faisal, Block 6, P.E.C.H.S., Karachi 75400. You can also follow Techzone on Instagram and Facebook.",
  },
  {
    q: "Where is Techzone Learning Academy located?",
    a: "605 Shahrah-e-Faisal, Block 6, P.E.C.H.S., Karachi 75400. You can open the location in Google Maps from the Contact / Visit Us section below.",
  },
  {
    q: "How do I apply for admission?",
    a: "Fill in the admission application form on this website (Apply Now) and send it on WhatsApp or by email — or contact the academy directly on WhatsApp at +92 330 3094425. The academy team will guide you through timings, batches and the next steps.",
  },
  {
    q: "Do I need previous experience to join a course?",
    a: "No. Beginner-friendly courses such as CIT, DIT and Advance MS Office are designed for learners starting from the basics. For other courses, the academy can advise which starting point fits your current level — contact the academy on WhatsApp at +92 330 3094425.",
  },
  {
    q: "Are classes practical or theory-based?",
    a: "Learning at Techzone is practical and project-based. Students practise in class, work on exercises and build projects, so skills are learned by doing — not only by reading or listening.",
  },
  {
    q: "Will I get a certificate after completing a course?",
    a: "Certificate and completion details depend on the course and are confirmed by the academy at the time of admission. Please contact the academy on WhatsApp at +92 330 3094425 for details.",
  },
];

export const exampleProjects = [
  {
    title: "AI Assistant — Example Project",
    category: "Artificial Intelligence",
    description:
      "A simple AI-powered assistant built as a practice project, showing how data and models can answer questions.",
    tag: "Example project",
  },
  {
    title: "Portfolio Website — Example Project",
    category: "Web Development",
    description:
      "A clean, responsive personal website built with modern web tools — a classic first project for new developers.",
    tag: "Example project",
  },
  {
    title: "Brand Identity Kit — Example Project",
    category: "Graphic Design",
    description:
      "A logo, colour palette and social media designs created as a branding practice project.",
    tag: "Example project",
  },
  {
    title: "Digital Campaign Plan — Example Project",
    category: "Digital Marketing",
    description:
      "A complete plan for a small online campaign: audience, content ideas, posts and how to measure results.",
    tag: "Example project",
  },
  {
    title: "Python Mini App — Example Project",
    category: "Python Programming",
    description:
      "A small Python program built from scratch — solving a real everyday problem with code.",
    tag: "Example project",
  },
  {
    title: "IT Skills Showcase — Example Project",
    category: "Computer & IT",
    description:
      "A practical showcase of everyday IT skills — documents, presentations, spreadsheets and safe online use.",
    tag: "Example project",
  },
];
