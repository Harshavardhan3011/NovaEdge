export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export type CardItem = {
  title: string;
  description: string;
  href: string;
};

export type ProgramCardItem = CardItem & {
  duration: string;
  category: string;
};

export type DetailedCourse = {
  name: string;
  duration: string;
  description: string;
  mode: "Online" | "Offline" | "Online / Offline";
  level: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  batchTimer: string;
  rating: number;
  skillsCovered: string[];
  projectsIncluded: string;
  hasCertificate: boolean;
  image: string;
  language: string;
  offerTag: string;
  enrollHref: string;
};

export type ProgramTrack = {
  slug: "technical" | "soft-skills" | "aptitude";
  title: string;
  subtitle: string;
  courses: DetailedCourse[];
};

export type ValueCard = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  message: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export const navigation: NavGroup[] = [
  { label: "Home", href: "/" },
  {
    label: "Our Programs",
    children: [
      { label: "Technical", href: "/programs/technical" },
      { label: "Soft Skills", href: "/programs/soft-skills" },
      { label: "Aptitude", href: "/programs/aptitude" },
    ],
  },
  { label: "Online Training", href: "/online-training" },
  { label: "Institutional", href: "/institutional" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

export const courseCategories: Array<CardItem & { icon: string }> = [
  {
    icon: "technical",
    title: "Technical",
    description:
      "Hands-on engineering pathways for web development, software fundamentals, and modern product teams.",
    href: "/programs/technical",
  },
  {
    icon: "aptitude",
    title: "Aptitude",
    description:
      "Structured problem-solving practice for competitive exams, interviews, and hiring assessments.",
    href: "/programs/aptitude",
  },
  {
    icon: "soft-skills",
    title: "Soft Skills",
    description:
      "Communication, presentation, teamwork, and interview confidence designed for professional growth.",
    href: "/programs/soft-skills",
  },
];

export const whyChooseUsFeatures: Array<FeatureItem & { icon: string }> = [
  {
    icon: "mentors",
    title: "Mentors from industry",
    description:
      "Experienced instructors bring current hiring expectations, practical examples, and real project feedback.",
  },
  {
    icon: "projects",
    title: "Project-led learning",
    description:
      "Every program includes assignments, labs, and portfolio work that builds confidence through practice.",
  },
  {
    icon: "support",
    title: "Placement support",
    description:
      "Interview preparation, resume reviews, and readiness checks help learners move from course to career.",
  },
  {
    icon: "flexible",
    title: "Flexible delivery",
    description:
      "Online, classroom, and institutional formats make it easy to launch the right program in the right setting.",
  },
];

export const featuredCourses: ProgramCardItem[] = [
  {
    category: "Technical",
    title: "Full Stack Web Development",
    duration: "16 weeks",
    description:
      "Build production-ready interfaces, APIs, and deployment workflows with guided capstone projects.",
    href: "/programs/technical",
  },
  {
    category: "Aptitude",
    title: "Analytical Reasoning Bootcamp",
    duration: "8 weeks",
    description:
      "Sharpen quantitative reasoning, logical deduction, and timed test-taking performance.",
    href: "/programs/aptitude",
  },
  {
    category: "Soft Skills",
    title: "Interview & Communication Mastery",
    duration: "6 weeks",
    description:
      "Present yourself clearly in interviews, client calls, and team settings with practical drills.",
    href: "/programs/soft-skills",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    role: "Software Engineer",
    message:
      "The technical track felt practical from day one. I left with a portfolio, stronger fundamentals, and a better interview process.",
  },
  {
    name: "Nisha Rao",
    role: "Campus Program Lead",
    message:
      "Their institutional workshops were structured, responsive, and easy to align with our academic calendar.",
  },
  {
    name: "Imran Khan",
    role: "Final-year student",
    message:
      "The communication sessions made a visible difference in my confidence during mock interviews and presentations.",
  },
];

export const stats: StatItem[] = [
  { value: "5,000+", label: "Learners trained" },
  { value: "120+", label: "Programs delivered" },
  { value: "92%", label: "Placement readiness" },
  { value: "30+", label: "Institution partners" },
];

export const programSections: Array<{
  id: string;
  title: string;
  description: string;
  programs: ProgramCardItem[];
}> = [
  {
    id: "technical",
    title: "Technical Programs",
    description:
      "Role-focused technical tracks for beginners, graduates, and teams that need modern engineering skills.",
    programs: [
      {
        category: "Technical",
        title: "Advanced JavaScript",
        duration: "6 weeks",
        description:
          "Master modern JavaScript, asynchronous patterns, and code organization with guided exercises.",
        href: "/contact",
      },
      {
        category: "Technical",
        title: "React and Next.js Mastery",
        duration: "8 weeks",
        description:
          "Build fast app-router experiences, reusable components, and polished production UI systems.",
        href: "/contact",
      },
      {
        category: "Technical",
        title: "Data Structures and Algorithms",
        duration: "10 weeks",
        description:
          "Strengthen problem solving with repeatable patterns, time complexity, and interview-grade practice.",
        href: "/contact",
      },
      {
        category: "Technical",
        title: "Python for Automation",
        duration: "6 weeks",
        description:
          "Automate workflows, reports, and routine tasks using practical Python projects.",
        href: "/contact",
      },
    ],
  },
  {
    id: "soft-skills",
    title: "Soft Skills Programs",
    description:
      "Communication and workplace-readiness modules designed to improve confidence and team impact.",
    programs: [
      {
        category: "Soft Skills",
        title: "Communication Excellence",
        duration: "4 weeks",
        description:
          "Develop crisp speaking habits, active listening, and structured business communication.",
        href: "/contact",
      },
      {
        category: "Soft Skills",
        title: "Presentation Skills",
        duration: "3 weeks",
        description:
          "Create clear, visually balanced presentations and deliver them with confidence.",
        href: "/contact",
      },
      {
        category: "Soft Skills",
        title: "Leadership Foundations",
        duration: "4 weeks",
        description:
          "Learn collaboration, decision-making, and team coordination habits that scale with responsibility.",
        href: "/contact",
      },
    ],
  },
  {
    id: "aptitude",
    title: "Aptitude Programs",
    description:
      "Assessments, competitive preparation, and interview drills that improve speed, accuracy, and calm execution.",
    programs: [
      {
        category: "Aptitude",
        title: "Quantitative Reasoning",
        duration: "5 weeks",
        description:
          "Tackle arithmetic, percentage, ratio, and data interpretation with exam-style practice.",
        href: "/contact",
      },
      {
        category: "Aptitude",
        title: "Logical Reasoning",
        duration: "5 weeks",
        description:
          "Solve pattern recognition, syllogisms, and sequencing problems with a repeatable approach.",
        href: "/contact",
      },
      {
        category: "Aptitude",
        title: "Verbal Ability",
        duration: "4 weeks",
        description:
          "Improve reading comprehension, vocabulary, grammar, and precision under time constraints.",
        href: "/contact",
      },
    ],
  },
];

export const founderHighlights: ValueCard[] = [
  {
    title: "Built for measurable progress",
    description:
      "Nova Edge Academy was founded to close the gap between academic theory and employable skill.",
  },
  {
    title: "Designed around real learners",
    description:
      "Programs are intentionally structured for students who need clarity, feedback, and consistent momentum.",
  },
];

export const visionMission: ValueCard[] = [
  {
    title: "Vision",
    description:
      "To be the most dependable training partner for career-ready learning across technical and professional disciplines.",
  },
  {
    title: "Mission",
    description:
      "To deliver practical, accessible training experiences that turn effort into confidence, performance, and outcomes.",
  },
];

export const onlineTrainingFeatures: FeatureItem[] = [
  {
    title: "Live instructor sessions",
    description:
      "Interactive classes keep learners engaged with direct feedback, examples, and question time.",
  },
  {
    title: "Recorded revision support",
    description:
      "Learners can revisit concepts, sharpen weak areas, and keep pace with their own schedule.",
  },
  {
    title: "Progress checkpoints",
    description:
      "Milestone reviews help learners and coordinators see momentum early and adjust quickly.",
  },
];

export const institutionalBenefits: FeatureItem[] = [
  {
    title: "Custom program design",
    description:
      "We align content to academic calendars, learner profiles, and institutional goals.",
  },
  {
    title: "Reporting and coordination",
    description:
      "Attendance, progress, and feedback are organized to support smooth administration.",
  },
  {
    title: "Scalable delivery models",
    description:
      "Choose onsite workshops, hybrid bootcamps, or online sessions depending on the cohort.",
  },
];

export const contactDetails = [
  "+91 98765 43210",
  "hello@novaedgeacademy.in",
  "Bengaluru, Karnataka, India",
];

export const programTracks: ProgramTrack[] = [
  {
    slug: "technical",
    title: "Technical Programs",
    subtitle:
      "Build job-ready engineering fundamentals with practical labs, guided projects, and interview-focused outcomes.",
    courses: [
      {
        name: "React and Next.js Mastery",
        duration: "8 weeks",
        description:
          "Learn component architecture, app-router patterns, API integration, and production deployment workflows.",
        mode: "Online / Offline",
        level: "Intermediate",
        price: "INR 22,000",
        batchTimer: "Next batch starts in 3 days",
        rating: 5,
        skillsCovered: ["React", "Next.js", "State Management", "API Integration"],
        projectsIncluded: "3 production-style portfolio projects",
        hasCertificate: true,
        image: "/hero-illustration.svg",
        language: "English",
        offerTag: "20% OFF",
        enrollHref: "/contact",
      },
      {
        name: "Advanced JavaScript",
        duration: "6 weeks",
        description:
          "Strengthen modern JavaScript fundamentals with asynchronous patterns, clean architecture, and debugging practice.",
        mode: "Online",
        level: "Beginner",
        price: "INR 14,500",
        batchTimer: "Next batch starts in 5 days",
        rating: 4,
        skillsCovered: ["ES6+", "Async JS", "DOM", "Code Quality"],
        projectsIncluded: "2 hands-on mini projects",
        hasCertificate: true,
        image: "/about-illustration.svg",
        language: "English",
        offerTag: "15% OFF",
        enrollHref: "/contact",
      },
    ],
  },
  {
    slug: "soft-skills",
    title: "Soft Skills Programs",
    subtitle:
      "Develop communication confidence, structured thinking, and leadership behaviors for interviews and workplace growth.",
    courses: [
      {
        name: "Communication Excellence",
        duration: "4 weeks",
        description:
          "Master public speaking, structured conversation, and professional writing through drills and feedback.",
        mode: "Online / Offline",
        level: "Beginner",
        price: "INR 9,800",
        batchTimer: "Next batch starts in 4 days",
        rating: 5,
        skillsCovered: ["Speaking", "Writing", "Listening", "Professional Etiquette"],
        projectsIncluded: "Live presentation and communication lab",
        hasCertificate: true,
        image: "/contact-illustration.svg",
        language: "English",
        offerTag: "10% OFF",
        enrollHref: "/contact",
      },
      {
        name: "Interview and Leadership Mastery",
        duration: "5 weeks",
        description:
          "Prepare for interviews and team ownership with mock sessions, leadership scenarios, and coaching.",
        mode: "Offline",
        level: "Intermediate",
        price: "INR 12,500",
        batchTimer: "Next batch starts in 6 days",
        rating: 4,
        skillsCovered: ["Interview Skills", "Leadership", "Decision Making", "Collaboration"],
        projectsIncluded: "Mock interview and leadership challenge",
        hasCertificate: true,
        image: "/founder-illustration.svg",
        language: "English",
        offerTag: "12% OFF",
        enrollHref: "/contact",
      },
    ],
  },
  {
    slug: "aptitude",
    title: "Aptitude Programs",
    subtitle:
      "Improve accuracy and speed for placement tests and competitive assessments with structured practice systems.",
    courses: [
      {
        name: "Quantitative Reasoning Pro",
        duration: "5 weeks",
        description:
          "Build strong numerical reasoning through timed practice, formula frameworks, and strategy sessions.",
        mode: "Online / Offline",
        level: "Beginner",
        price: "INR 11,200",
        batchTimer: "Next batch starts in 2 days",
        rating: 5,
        skillsCovered: ["Arithmetic", "Data Interpretation", "Speed Math", "Problem Solving"],
        projectsIncluded: "Weekly test simulation packs",
        hasCertificate: true,
        image: "/hero-illustration.svg",
        language: "English",
        offerTag: "18% OFF",
        enrollHref: "/contact",
      },
      {
        name: "Logical and Verbal Aptitude",
        duration: "5 weeks",
        description:
          "Strengthen logic, critical reading, and verbal accuracy using interview and exam-style question sets.",
        mode: "Online",
        level: "Intermediate",
        price: "INR 10,900",
        batchTimer: "Next batch starts in 7 days",
        rating: 4,
        skillsCovered: ["Logical Reasoning", "Verbal Ability", "Critical Thinking", "Time Management"],
        projectsIncluded: "Full-length aptitude mock tests",
        hasCertificate: true,
        image: "/about-illustration.svg",
        language: "English",
        offerTag: "16% OFF",
        enrollHref: "/contact",
      },
    ],
  },
];

export function getProgramTrackBySlug(slug: ProgramTrack["slug"]) {
  return programTracks.find((track) => track.slug === slug);
}