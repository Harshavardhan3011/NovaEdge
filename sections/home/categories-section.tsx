import { CategoryCard } from "@/components/category-card";
import { Container } from "@/components/container";

const topRowCategories = [
  {
    title: "Technical Programs",
    description:
      "Build strong foundations in programming, full-stack development, and real-world applications. Industry-ready skills-ah develop pannunga with hands-on projects and modern tech stacks.",
    includes: [
      "Full-stack development",
      "AI / ML",
      "Data Science",
      "Web & mobile development",
      "Cloud, databases & DevOps basics",
      "Real-time projects & coding assessments",
    ],
    ctaLabel: "Explore Programs →",
    href: "/programs/technical",
  },
  {
    title: "Aptitude & Reasoning",
    description:
      "Master quantitative aptitude, logical reasoning, and analytical thinking. Placement, exams, interviews-ku strong problem-solving skills inga develop pannalaam.",
    includes: [
      "Quantitative aptitude",
      "Logical reasoning",
      "Verbal ability",
      "Analytical thinking",
      "Company-specific test preparation",
    ],
    ctaLabel: "Start Practicing →",
    href: "/programs/aptitude",
  },
  {
    title: "Soft Skills & Communication",
    description:
      "Enhance communication, presentation, and interpersonal skills. Interview confidence improve pannitu corporate world-la standout aagunga.",
    includes: [
      "Business communication",
      "Interview preparation",
      "Public speaking & presentations",
      "Teamwork & leadership",
      "Workplace professionalism",
    ],
    ctaLabel: "Build Confidence →",
    href: "/programs/soft-skills",
  },
];

const secondRowCategories = [
  {
    title: "Online Training",
    description:
      "Learn anytime, anywhere with flexible online programs. Live + recorded sessions, mentor support, and real-world projects—all from your home.",
    includes: [
      "Live interactive classes",
      "Recorded sessions access",
      "Mentor guidance & doubt support",
      "Flexible schedule",
      "Project-based learning",
    ],
    ctaLabel: "Start Learning Online →",
    href: "/online-training",
  },
  {
    title: "Institutional Training",
    description:
      "Experience classroom-based learning with direct mentorship and structured guidance. Face-to-face training, hands-on practice, and disciplined learning environment for strong foundations.",
    includes: [
      "Classroom sessions",
      "Direct faculty interaction",
      "Lab-based practice",
      "Structured curriculum",
      "Group learning environment",
    ],
    ctaLabel: "Visit Our Institute →",
    href: "/institutional",
  },
];

const additionalPrograms = [
  {
    title: "Campus-to-Corporate Programs",
    description:
      "Programs designed to help students transition smoothly into professional work environments.",
    includes: [
      "Professional etiquette",
      "Resume & LinkedIn optimization",
      "Mock interviews (HR + Technical)",
      "Career readiness workshops",
    ],
    ctaLabel: "Prepare for Career ->",
    href: "/contact",
  },
  {
    title: "Corporate / Institutional Training",
    description:
      "Custom learning interventions for organizations and institutions based on team goals and delivery format.",
    includes: [
      "Tailored training modules",
      "Faculty development programs",
      "Skill development bootcamps",
    ],
    ctaLabel: "Discuss Training Needs ->",
    href: "/contact",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Choose Your Learning Path</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            From technical expertise to career readiness, our programs are designed to help you
            learn, grow, and succeed in today’s competitive world.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {topRowCategories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2 lg:gap-8">
          {secondRowCategories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>

        <div className="mt-14">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Additional Programs</h3>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2 lg:gap-8">
            {additionalPrograms.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-gray-50 px-6 py-12 text-center">
          <p className="mx-auto max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
            Our training blends concepts, hands-on exercises, industry use cases, and real-world
            applications to ensure complete career readiness.
          </p>
        </div>
      </Container>
    </section>
  );
}