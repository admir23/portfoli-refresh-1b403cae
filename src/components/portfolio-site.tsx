import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";

import admirLogo from "../assets/admir-kurtovic-logo.svg";
import admirPortrait from "../assets/admir-portrait.jpg";
import direct2careImage from "../assets/direct2care.png";
import fumisImage from "../assets/fumis.png";
import handwerkerproImage from "../assets/handwerkerpro.jpg";
import lawnguruImage from "../assets/lawnguru-design-system.png";
import unitedFitnessImage from "../assets/united-fitness.jpg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

const projects = [
  {
    title: "Automated Design System",
    client: "Lawn Guru",
    slug: null,
    externalUrl: "https://lawn-guru-design-system.vercel.app/",
    image: lawnguruImage,
    accent: "Design system · AI automation",
    summary:
      "A fully automated design system built with Claude: Figma tokens turned into multi-platform libraries, production-ready React components, and living documentation.",
    status: "View design system",
  },
  {
    title: "Fumis Solutions",
    client: "Fumis",
    slug: "fumissolutions",
    externalUrl: null,
    image: fumisImage,
    accent: "Product design · IoT platform",
    summary:
      "A connected product experience shaped around clarity, system thinking, and practical daily use.",
    status: "Read case study",
  },
  {
    title: "Direct2Care",
    client: "Direct2MD",
    slug: "direct2care",
    externalUrl: null,
    image: direct2careImage,
    accent: "Healthcare · Patient experience",
    summary:
      "A healthcare flow designed to make patient actions feel calmer, faster, and easier to trust.",
    status: "Read case study",
  },
  {
    title: "United Fitness",
    client: "United Fitness Brands",
    slug: null,
    externalUrl: null,
    image: unitedFitnessImage,
    accent: "Wellness · Brand systems",
    summary:
      "A wellness brand system focused on motivation, consistency, and a more usable digital presence.",
    status: "Case study in progress",
  },
  {
    title: "Ebgroupp",
    client: "Handwerker Pro",
    slug: null,
    externalUrl: null,
    image: handwerkerproImage,
    accent: "SaaS · Service marketplace",
    summary:
      "A service marketplace experience that turns fragmented workflows into clearer product moments.",
    status: "Case study in progress",
  },
];

const caseStudyDetails = {
  fumissolutions: {
    project: projects[1],
    headline: "Turning a connected product into a calmer, clearer operating experience.",
    context:
      "Fumis needed the product experience to communicate system status, guide everyday workflows, and make a technical IoT platform feel easier to understand.",
    sections: [
      {
        title: "Challenge",
        body: "The interface had to support complex product signals without making users feel like they were managing complexity. The work focused on hierarchy, state clarity, and repeatable patterns.",
      },
      {
        title: "Approach",
        body: "I shaped the experience around practical decisions users need to make: what is happening, what needs attention, and what action comes next.",
      },
      {
        title: "Outcome",
        body: "The resulting direction gives the platform a clearer visual language, stronger product storytelling, and a more confident path for future feature growth.",
      },
    ],
  },
  direct2care: {
    project: projects[2],
    headline: "Making healthcare interactions feel more direct, understandable, and trustworthy.",
    context:
      "Direct2Care needed a product experience that could reduce friction around healthcare actions while keeping the interface approachable and dependable.",
    sections: [
      {
        title: "Challenge",
        body: "Healthcare flows can quickly feel heavy. The core challenge was to simplify decision points and create a sense of momentum without losing trust or clarity.",
      },
      {
        title: "Approach",
        body: "I focused on clearer information grouping, language patients can understand, and visual pacing that helps users see what matters at each step.",
      },
      {
        title: "Outcome",
        body: "The work establishes a calmer patient experience with stronger guidance, clearer next actions, and a more usable foundation for care journeys.",
      },
    ],
  },
} as const;

export function getCaseStudyMeta(projectId: string) {
  const caseStudy = caseStudyDetails[projectId as keyof typeof caseStudyDetails];

  if (!caseStudy) {
    return null;
  }

  return {
    title: caseStudy.project.title,
    description: caseStudy.context,
  };
}

const principles = [
  "Thoughtful strategy",
  "Purposeful design",
  "User centered insights",
  "Products that deliver value",
];

type ThemeMode = "light" | "dark";

function getPreferredTheme(): ThemeMode {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme: ThemeMode =
      savedTheme === "light" || savedTheme === "dark" ? savedTheme : getPreferredTheme();
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setTheme(initialTheme);
    applyTheme(initialTheme);

    const handleSystemThemeChange = () => {
      if (!localStorage.getItem("theme")) {
        const preferredTheme = getPreferredTheme();
        applyTheme(preferredTheme);
        setTheme(preferredTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-secondary"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />
        </svg>
      )}
    </button>
  );
}

function Header() {
  const linkClass =
    "text-sm font-semibold text-muted-foreground transition hover:text-foreground data-[status=active]:text-foreground";

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link to="/" className="block" aria-label="Admir Kurtovic home">
          <img src={admirLogo} alt="Admir Kurtovic logo" className="h-9 w-9 dark:invert" />
        </Link>
        <div className="flex items-center gap-4 sm:gap-8">
          <Link
            to="/work"
            className={`${linkClass} hidden sm:inline-flex`}
            activeOptions={{ exact: true }}
          >
            My Work
          </Link>
          <Link
            to="/about"
            className={`${linkClass} hidden sm:inline-flex`}
            activeOptions={{ exact: true }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`${linkClass} hidden sm:inline-flex`}
            activeOptions={{ exact: true }}
          >
            Contact
          </Link>
          <Link
            to="/playground"
            className={`${linkClass} hidden sm:inline-flex`}
            activeOptions={{ exact: true }}
          >
            Playground
          </Link>
          <a
            href="/Admir_Kurtovic_CV_2026.pdf"
            target="_blank"
            rel="noreferrer"
            className={`${linkClass} hidden sm:inline-flex`}
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function BottomNavigation() {
  const location = useLocation();
  const moreIsActive = location.pathname === "/contact" || location.pathname === "/playground";
  const linkClass =
    "flex min-w-0 flex-1 flex-col items-center gap-1 rounded-full px-2 py-2 text-[0.7rem] font-semibold text-muted-foreground transition hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground";
  const moreButtonClass = `${linkClass} ${moreIsActive ? "bg-secondary text-foreground" : ""}`;
  const iconClass = "h-4 w-4";

  return (
    <nav
      className="fixed inset-x-3 bottom-3 z-50 rounded-full border border-accent bg-background/90 p-1 shadow-lg ring-1 ring-accent/40 backdrop-blur-md dark:border-primary/40 dark:ring-primary/20 sm:hidden"
      aria-label="Primary navigation"
    >
      <div className="flex items-center gap-1">
        <Link to="/" className={linkClass} activeOptions={{ exact: true }} aria-label="Home">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className={iconClass}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m3 10 9-7 9 7" />
            <path d="M5 10v10h14V10" />
          </svg>
          Home
        </Link>
        <Link to="/work" className={linkClass} activeOptions={{ exact: true }} aria-label="My Work">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className={iconClass}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 7h16v13H4z" />
            <path d="M9 7V4h6v3" />
          </svg>
          Work
        </Link>
        <Link to="/about" className={linkClass} activeOptions={{ exact: true }} aria-label="About">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className={iconClass}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
          </svg>
          About
        </Link>
        <Drawer>
          <DrawerTrigger className={moreButtonClass} aria-label="More navigation options">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className={iconClass}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="5" cy="12" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="19" cy="12" r="1.5" />
            </svg>
            More
          </DrawerTrigger>
          <DrawerContent className="sm:hidden">
            <DrawerHeader>
              <DrawerTitle>More</DrawerTitle>
            </DrawerHeader>
            <div className="grid gap-2 px-4 pb-6">
              <DrawerClose asChild>
                <Link
                  to="/contact"
                  className="flex items-center justify-between rounded-2xl bg-secondary px-4 py-4 text-base font-bold text-foreground"
                >
                  Contact
                  <span aria-hidden="true">→</span>
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link
                  to="/playground"
                  className="flex items-center justify-between rounded-2xl bg-secondary px-4 py-4 text-base font-bold text-foreground"
                >
                  Playground
                  <span aria-hidden="true">→</span>
                </Link>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background pb-24 text-foreground sm:pb-0">
      <Header />
      <main>{children}</main>
      <div className="hidden sm:block">
        <Footer />
      </div>
      <BottomNavigation />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-5 pb-20 pt-28 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
          <div className="relative mx-auto max-w-5xl">
            <h1 className="relative text-balance text-[3.4rem] font-bold leading-[0.95] tracking-normal text-foreground sm:text-7xl lg:text-[5.8rem]">
              <span className="absolute left-0 top-[28%] -z-10 hidden text-[0.92em] text-muted/80 sm:block">
                product design
              </span>
              {"I blend thoughtful strategy with product design to make experiences that just… make sense"
                .split(" ")
                .map((word, i) => (
                  <span
                    key={i}
                    className="hero-word inline-block"
                    style={{ animationDelay: `${i * 140}ms` }}
                  >
                    {word}
                    {i < 14 ? "\u00A0" : ""}
                  </span>
                ))}
            </h1>
          <p className="hand-note mt-5 ml-auto max-w-xs text-right">
            designing products that feel clear before they ask for effort
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_26rem] lg:items-end">
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            By blending thoughtful strategy, purposeful design, and user centered insights, I help
            shape products that not only function seamlessly but also connect meaningfully.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link to="/work" className="btn-primary">
              My Work
            </Link>
            <Link to="/about" className="btn-secondary">
              How I Think
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const revealClass = `project-card-reveal${visible ? " project-card-reveal--in" : ""}`;
  const imageFirst = index % 2 === 0;
  const tiltClass = imageFirst ? "project-tilt project-tilt--left" : "project-tilt project-tilt--right";

  const textBlock = (
    <div className={imageFirst ? "md:order-2" : "md:order-1"}>
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm font-black text-muted-foreground">0{index + 1}</p>
        <span className="rounded-full border border-border px-3 py-1 text-xs font-bold text-muted-foreground">
          {project.status}
        </span>
      </div>
      <h2 className="mt-4 max-w-xl text-balance text-4xl font-bold leading-tight tracking-normal text-foreground sm:text-5xl">
        {project.title}
      </h2>
      <p className="mt-3 text-sm font-bold text-foreground">{project.accent}</p>
      <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">{project.summary}</p>
    </div>
  );

  const imageBlock = (
    <div
      className={`overflow-hidden rounded-[1.6rem] bg-secondary p-3 ${tiltClass} ${
        imageFirst ? "md:order-1" : "md:order-2"
      }`}
    >
      <img
        src={project.image}
        alt={`${project.title} project preview for ${project.client}`}
        className="aspect-[16/10] w-full rounded-[1.1rem] object-cover transition duration-500 group-hover:scale-[1.02]"
        loading="lazy"
      />
    </div>
  );

  const content = (
    <>
      {textBlock}
      {imageBlock}
    </>
  );

  const gridClass = imageFirst
    ? "group grid gap-6 border-t border-border py-10 md:grid-cols-[1fr_0.62fr] md:items-center md:gap-10"
    : "group grid gap-6 border-t border-border py-10 md:grid-cols-[0.62fr_1fr] md:items-center md:gap-10";

  if (project.externalUrl) {
    return (
      <a
        href={project.externalUrl}
        target="_blank"
        rel="noreferrer"
        ref={ref as React.Ref<HTMLAnchorElement>}
        style={{ transitionDelay: `${index * 90}ms` }}
        className={`${gridClass} ${revealClass}`}
      >
        {content}
      </a>
    );
  }

  if (project.slug) {
    return (
      <Link
        to="/work/$projectId"
        params={{ projectId: project.slug }}
        ref={ref as React.Ref<HTMLAnchorElement>}
        style={{ transitionDelay: `${index * 90}ms` }}
        className={`${gridClass} ${revealClass}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <article
      ref={ref as React.Ref<HTMLElement>}
      style={{ transitionDelay: `${index * 90}ms` }}
      className={`${gridClass} ${revealClass}`}
    >
      {content}
    </article>
  );
}

function WorkList() {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}

function CtaSection() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between lg:py-24">
        <h2 className="max-w-3xl text-balance text-5xl font-bold leading-none tracking-normal sm:text-7xl">
          Let's create something that makes sense.
        </h2>
        <a href="mailto:hello@admirkurtovic.com" className="btn-invert md:shrink-0">
          Let's chat
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 text-sm font-semibold text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© {currentYear} Admir Kurtovic</p>
        <div className="flex flex-wrap gap-5">
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/playground">Playground</Link>
          <a href="https://www.linkedin.com/in/admirkurtovic/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <Shell>
      <Hero />
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-4">
          <p className="hand-note mb-2">Okay so… how do I do that?</p>
          <h2 className="text-5xl font-bold leading-none tracking-normal text-foreground sm:text-7xl">
            Here’s how
          </h2>
        </div>
        <WorkList />
      </section>
      <CtaSection />
    </Shell>
  );
}

export function WorkPage() {
  return (
    <Shell>
      <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pt-40">
        <p className="section-kicker mb-3">selected work</p>
        <h1 className="max-w-5xl text-balance text-5xl font-bold leading-none tracking-normal text-foreground sm:text-7xl lg:text-[5.5rem]">
          Products shaped through strategy, clarity, and craft.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
          A selection of product, brand, and experience design work for teams building useful,
          valuable digital products.
        </p>
        <div className="mt-14">
          <WorkList />
        </div>
      </section>
      <CtaSection />
    </Shell>
  );
}

export function CaseStudyPage({ projectId }: { projectId: keyof typeof caseStudyDetails }) {
  const caseStudy = caseStudyDetails[projectId];
  const relatedProjects = projects.filter((project) => project.slug !== projectId).slice(0, 2);

  return (
    <Shell>
      <article>
        <section className="relative mx-auto w-full max-w-6xl px-5 pb-10 pt-28 sm:px-8 sm:pb-12 sm:pt-32 lg:pt-40">
          <Link to="/work" className="section-kicker mb-6 inline-block">
            ← Back to work
          </Link>
          <p className="hand-note mb-3 max-w-[12rem] rotate-[-3deg] sm:absolute sm:right-8 sm:top-36 sm:max-w-[14rem] sm:rotate-[4deg] lg:right-16">
            {caseStudy.project.client} · {caseStudy.project.accent}
          </p>
          <h1 className="max-w-5xl text-balance text-[2.75rem] font-bold leading-none tracking-normal text-foreground sm:text-7xl lg:text-[5.5rem]">
            {caseStudy.headline}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground sm:mt-8 sm:text-xl sm:leading-9">
            {caseStudy.context}
          </p>
        </section>
        <section className="mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8 sm:pb-16 lg:pb-24">
          <div className="overflow-hidden rounded-[1.25rem] bg-secondary p-2 sm:rounded-[1.8rem] sm:p-3">
            <img
              src={caseStudy.project.image}
              alt={`${caseStudy.project.title} case study hero`}
              className="aspect-[4/3] w-full rounded-[0.9rem] object-cover sm:aspect-[16/9] sm:rounded-[1.25rem]"
              loading="eager"
            />
          </div>
          <div className="mt-10 grid border-t border-border sm:mt-12 lg:grid-cols-3">
            {caseStudy.sections.map((section) => (
              <section
                key={section.title}
                className="border-b border-border py-7 sm:py-8 lg:border-r lg:px-8 lg:last:border-r-0"
              >
                <h2 className="text-2xl font-bold leading-tight tracking-normal text-foreground sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground sm:mt-5 sm:text-lg">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </section>
        <section className="mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8 sm:pb-16 lg:pb-24">
          <p className="section-kicker mb-4">More work</p>
          <div className="grid border-t border-border md:grid-cols-2">
            {relatedProjects.map((project) => (
              <div
                key={project.title}
                className="border-b border-border py-8 md:px-8 md:odd:border-r"
              >
                <p className="text-sm font-bold text-muted-foreground">{project.status}</p>
                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-foreground">
                  {project.title}
                </h2>
                <p className="mt-4 text-muted-foreground">{project.summary}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
      <CtaSection />
    </Shell>
  );
}

export function AboutPage() {
  return (
    <Shell>
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:pb-24 lg:pt-40">
        <div>
          <p className="section-kicker mb-3">about me</p>
          <h1 className="text-balance text-5xl font-bold leading-none tracking-normal text-foreground sm:text-7xl">
            I design products with direction, clarity, and depth.
          </h1>
        </div>
        <div className="space-y-7 pt-2 text-xl leading-9 text-muted-foreground">
          <div className="flex items-center gap-5">
            <div className="portrait-frame portrait-frame--tilt h-24 w-24 shrink-0 sm:h-28 sm:w-28">
              <img
                src={admirPortrait}
                alt="Portrait of Admir Kurtovic"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <p className="hand-note rotate-[-2deg]">Hi, I'm Admir.</p>
          </div>
          <p>
            I’m a Senior Product Designer with experience across marketplaces, healthcare,
            accessibility platforms, AI-powered analytics, telemedicine, and SaaS products.
          </p>
          <p>
            My work spans end-to-end product design, research, design systems, testing, and
            production aware collaboration, often turning complex workflows into interfaces that
            feel clearer, faster, and easier to trust.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.linkedin.com/in/admirkurtovic/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-2"
            >
              Connect on LinkedIn
            </a>
            <a
              href="/Admir_Kurtovic_CV_2026.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary mt-2"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="grid border-t border-border lg:grid-cols-3">
          <div className="border-b border-border py-8 lg:border-r lg:px-8">
            <p className="section-kicker">Focus</p>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-normal text-foreground">
              Marketplace flows, healthcare tools, AI products, and design systems.
            </h2>
          </div>
          <div className="border-b border-border py-8 lg:border-r lg:px-8">
            <p className="section-kicker">Approach</p>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-normal text-foreground">
              Research, testing, Figma systems, and close design to development collaboration.
            </h2>
          </div>
          <div className="border-b border-border py-8 lg:px-8">
            <p className="section-kicker">Tools</p>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-normal text-foreground">
              Figma, Framer, Storybook, Miro, Lottie, HTML/CSS, and AI assisted workflows.
            </h2>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="grid gap-10 border-t border-border py-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-kicker">Recent experience</p>
            <p className="hand-note mt-4 max-w-xs rotate-[2deg]">
              designing systems that ship
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold text-muted-foreground">2025 to Present · LawnGuru</p>
              <h2 className="mt-2 text-3xl font-bold leading-tight tracking-normal text-foreground">
                Leading full product design across marketplace flows.
              </h2>
              <p className="mt-3 text-lg leading-8 text-muted-foreground">
                Owning Order History, Order Detail, My Services, and quote review flows while
                building scalable Figma components and translating key UI patterns into production
                React and HTML.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground">
                2024 to 2025 · Social Explorer
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-tight tracking-normal text-foreground">
                Designed accessibility and AI analytics platforms.
              </h2>
              <p className="mt-3 text-lg leading-8 text-muted-foreground">
                Worked on AARP’s accessibility platform for older adults and Signal Aviation, an
                AI-powered platform that helps airlines identify high-potential markets.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="grid border-t border-border md:grid-cols-2">
          {principles.map((principle, index) => (
            <div key={principle} className="border-b border-border py-8 md:px-8 md:odd:border-r">
              <p className="text-sm font-black text-muted-foreground">0{index + 1}</p>
              <h2 className="mt-8 text-4xl font-bold leading-tight tracking-normal text-foreground">
                {principle}
              </h2>
            </div>
          ))}
        </div>
      </section>
      <CtaSection />
    </Shell>
  );
}

export function ContactPage() {
  return (
    <Shell>
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 py-32 sm:px-8">
        <p className="section-kicker mb-3">contact</p>
        <h1 className="max-w-5xl text-balance text-5xl font-bold leading-none tracking-normal text-foreground sm:text-7xl lg:text-[5.5rem]">
          Have a product idea that needs more clarity and craft?
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
          Let’s chat about shaping it into an experience that connects meaningfully and delivers
          real value.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="mailto:hello@admirkurtovic.com" className="btn-primary">
            hello@admirkurtovic.com
          </a>
          <a
            href="https://www.linkedin.com/in/admirkurtovic/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
          <a
            href="/Admir_Kurtovic_CV_2026.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            View Resume
          </a>
        </div>
      </section>
    </Shell>
  );
}

export function PlaygroundPage() {
  return (
    <Shell>
      <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pt-40">
        <p className="section-kicker mb-3">playground</p>
        <h1 className="max-w-5xl text-balance text-5xl font-bold leading-none tracking-normal text-foreground sm:text-7xl lg:text-[5.5rem]">
          Side projects, useful ideas, and experiments that started with a real problem.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
          A place for smaller builds and product explorations. Some polished, some scrappy, all
          shaped around learning by making.
        </p>
        <article className="mt-14 border-t border-border py-10">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-black text-muted-foreground">01</p>
              <h2 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-normal text-foreground sm:text-5xl">
                CFS Open, an internal CrossFit competition tracker
              </h2>
              <p className="mt-4 text-sm font-bold text-foreground">
                Side project · Product design · AI assisted build
              </p>
            </div>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                This started with a friend at Community Fitness Sarajevo, where the box runs an
                internal Open style competition every year. The energy was there, the workouts were
                there, and members loved competing. But tracking scores, organizing workouts, and
                sharing results kept turning into manual work.
              </p>
              <p>
                I helped turn that messy process into a small web app for box owners and coaches: a
                place to publish workouts, manage athletes, record scores, and make the leaderboard
                easy for members to follow during the competition.
              </p>
              <p>
                The goal was not to overbuild it. It needed to feel fast, clear, and familiar for a
                local gym team running the event alongside everyday coaching. I used Claude Code to
                move quickly through the build and Figma for visual edits, layout decisions, and UI
                polish.
              </p>
              <div className="grid gap-3 pt-2 text-base font-bold text-foreground sm:grid-cols-3">
                <div className="border-t border-border pt-4">Workout setup</div>
                <div className="border-t border-border pt-4">Score tracking</div>
                <div className="border-t border-border pt-4">Shared leaderboard</div>
              </div>
              <a
                href="https://cfs-open.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-2 inline-flex"
              >
                View CFS Open
              </a>
            </div>
          </div>
        </article>
      </section>
      <CtaSection />
    </Shell>
  );
}
