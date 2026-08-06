import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";

import admirLogo from "../assets/admir-kurtovic-logo.svg";
import admirPortrait from "../assets/admir-portrait.jpg";
import direct2careImage from "../assets/direct2care.png";
import fumisImage from "../assets/fumis.png";
import handwerkerproImage from "../assets/handwerkerpro.jpg";
import lawnguruImage from "../assets/lawnguru-design-system.png";
import shopChatStep1Image from "../assets/shop-chat-step-1.png";
import shopChatStep2Image from "../assets/shop-chat-step-2.png";
import shopChatStep3Image from "../assets/shop-chat-step-3.png";
import shopChatStep4Image from "../assets/shop-chat-step-4.png";
import shopChatStep5Image from "../assets/shop-chat-step-5.png";
import shopChatStep6Image from "../assets/shop-chat-step-6.png";
import shopComponentAuditImage from "../assets/shop-component-audit.png";
import shopCoverImage from "../assets/shop-cover.jpg";
import shopQuestionSetsImage from "../assets/shop-question-sets.png";
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
    title: "Conversational Booking",
    client: "LawnGuru",
    slug: "conversational-booking",
    externalUrl: null,
    image: shopCoverImage,
    accent: "Service booking · Conversational UI",
    summary:
      "Replacing a bundled Typeform with a chat-led booking flow: one question set per service, reusable chat primitives, and photo capture that never blocks the order.",
    status: "Read case study",
  },
  {
    title: "Automated Design System",
    client: "LawnGuru",
    slug: "automated-design-system",
    externalUrl: "https://lawn-guru-design-system.vercel.app/",
    image: lawnguruImage,
    accent: "Design system · AI automation",
    summary:
      "A fully automated design system built with Figma MCP and Claude Code: Figma tokens turned into multi-platform libraries, production-ready React components, and living documentation.",
    status: "Read case study",
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
  "automated-design-system": {
    project: projects[1],
    headline: "A design system that maintains itself, from Figma token to shipped component.",
    context:
      "LawnGuru needed a design system that could keep pace with product work instead of drifting behind it, so the path from Figma tokens to production components had to run without manual upkeep.",
    sections: [
      {
        title: "Challenge",
        body: "Design systems tend to decay at the handoff. Tokens move in Figma, components lag in code, and documentation slowly becomes a record of what used to be true. The real problem was never the initial design, it was the cost of keeping three sources in agreement.",
      },
      {
        title: "Approach",
        body: "I built the system as a pipeline rather than a library. Figma variables act as the single source of truth, and Figma MCP plus Claude Code automate the translation work in between, generating multi-platform token sets, React components, and documentation from the same definitions.",
      },
      {
        title: "Outcome",
        body: "One token change now propagates to 670 variant components in a single pass, along with the multi-platform token sets and the documentation, with nobody hand-editing a file. Engineers pull the generated components straight into product work instead of rebuilding one-offs, which is the real test of whether a design system is being used rather than admired.",
      },
    ],
  },
  "conversational-booking": {
    project: projects[0],
    headline: "Turning a drop-off-prone Typeform into a conversation that books the job.",
    context:
      "LawnGuru's Yard Clean Up form bundled cleanup, mulch install, and weeding into a single Typeform. The work was to break that apart into a chat flow that asks only what the chosen service needs, and to establish which components the chat actually required.",
    sections: [
      {
        title: "Challenge",
        body: "One form served several services at once, so every customer waded through questions that did not apply to their order. Photos sat at the end of the flow and were the single biggest source of drop-off, which meant the highest-value input was also the one most likely to be abandoned.",
      },
      {
        title: "Approach",
        body: "I containerised the questions into one set per service, so the chat loads only the set for what the customer added, one service at a time. Shared questions like timing, photos, and notes for the pro are asked once regardless of how many services are stacked. Photos became skippable by design, with post-booking automation prompting for them rather than blocking the order.",
      },
      {
        title: "Outcome",
        body: "A component audit across all seven services showed roughly 80% of every flow reduces to six reusable chat primitives. Only two custom components were needed: a mulch colour and type swatch selector, and a shared photo attach control with upload progress. Most orders are a single service on standard components, and stacked orders simply repeat the same primitives one service at a time.",
      },
    ],
  },
  fumissolutions: {
    project: projects[2],
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
    project: projects[3],
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

// Optional "what I chose not to automate" note, rendered full-width under the
// Challenge/Approach/Outcome grid so the decision-making gets its own weight.
const caseStudyTradeoffs: Partial<Record<keyof typeof caseStudyDetails, string>> = {
  "automated-design-system":
    "Not everything was worth automating, and deciding where to stop was most of the work. Accessibility was the first line I drew: generated output looked correct but could not be trusted on contrast ratios or semantic structure, so every colour pairing and component role is still verified by hand before it ships. Complexity was the second. Primitives with predictable structure generate reliably, but anything carrying real interaction logic or state I wrote myself, because a component that is subtly wrong costs more to find and fix than one written from scratch. The pipeline is deliberately narrow: it does the repetitive translation work at volume, and stops where judgement starts.",
};

// Optional process imagery per case study, kept separate from caseStudyDetails so
// entries without a gallery don't need an empty key.
type GalleryItem = { src: string; alt: string; caption: string };

const caseStudyGalleries: Partial<Record<keyof typeof caseStudyDetails, GalleryItem[]>> = {
  "conversational-booking": [
    {
      src: shopChatStep1Image,
      alt: "Chat screen: starting the booking and picking areas of the property",
      caption: "Step 1: the conversation opens on the service and the areas that need work.",
    },
    {
      src: shopChatStep2Image,
      alt: "Chat screen offering relevant add-on services",
      caption: "Step 2: add-ons are suggested in context rather than bundled into the form up front.",
    },
    {
      src: shopChatStep3Image,
      alt: "Chat screen asking a clarifying follow-up question",
      caption: "Step 3: a clarifying follow-up, asked only when the previous answer needs it.",
    },
    {
      src: shopChatStep4Image,
      alt: "Chat screen prompting for photos of the job",
      caption:
        "Step 4: photos. Skippable by design, since blocking here was the biggest source of drop-off.",
    },
    {
      src: shopChatStep5Image,
      alt: "Chat screen asking when the job needs doing",
      caption: "Step 5: timing, one of the questions asked once regardless of services stacked.",
    },
    {
      src: shopChatStep6Image,
      alt: "Chat screen showing the completed work order summary",
      caption: "Step 6: the work order summary the customer confirms before the job is sent out.",
    },
    {
      src: shopQuestionSetsImage,
      alt: "Containerized question sets for Yard Clean Up, mulch install, and weeding",
      caption:
        "One question set per service, so the chat loads only what the customer actually ordered. Timing, photos, and notes for the pro are asked once regardless.",
    },
    {
      src: shopComponentAuditImage,
      alt: "Audit table mapping each service to the chat components it requires",
      caption:
        "Every service mapped to the components its questions need, separating the reusable primitives from the two custom builds worth the effort.",
    },
  ],
};

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
      className="mac-button h-6 w-8 px-0"
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
  const linkClass = "mac-menu-item";

  return (
    <header className="mac-menubar fixed inset-x-0 top-0 z-40">
      <nav className="mx-auto flex h-6 w-full max-w-6xl items-center justify-between px-2">
        <div className="flex items-center">
          <Link
            to="/"
            className="mac-menu-item px-2"
            aria-label="Admir Kurtovic home"
          >
            <img src={admirLogo} alt="Admir Kurtovic" className="h-4 w-4 dark:invert" />
          </Link>
          <span className="mac-menu-item hidden font-bold sm:inline-flex" aria-hidden="true">
            Admir Kurtovic
          </span>
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
        </div>
        <div className="flex items-center gap-1 pr-1">
          <span className="hidden font-mono text-xs font-bold sm:inline">
            {new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(new Date())}{" "}
            {new Intl.DateTimeFormat("en-US", {
              hour: "numeric",
              minute: "2-digit",
            }).format(new Date())}
          </span>
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
    "mac-button flex min-w-0 flex-1 flex-col items-center gap-0.5 px-1 py-1.5 text-[0.65rem] font-bold";
  const moreButtonClass = `${linkClass} ${moreIsActive ? "bg-secondary" : ""}`;
  const iconClass = "h-4 w-4";

  return (
    <nav
      className="mac-window fixed inset-x-2 bottom-2 z-50 p-1 sm:hidden"
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
              <DrawerTitle>More…</DrawerTitle>
            </DrawerHeader>
            <div className="grid gap-2 px-4 pb-6">
              <DrawerClose asChild>
                <Link
                  to="/contact"
                  className="mac-button flex items-center justify-between px-4 py-4 text-base font-bold"
                >
                  Contact
                  <span aria-hidden="true">▸</span>
                </Link>
              </DrawerClose>
              <DrawerClose asChild>
                <Link
                  to="/playground"
                  className="mac-button flex items-center justify-between px-4 py-4 text-base font-bold"
                >
                  Playground
                  <span aria-hidden="true">▸</span>
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
    <div className="min-h-screen overflow-x-hidden bg-background pb-24 pt-6 text-foreground sm:pb-0">
      <Header />
      <main>{children}</main>
      <BottomNavigation />
    </div>
  );
}

/* The classic 32x32 caution icon rendered as a period-accurate pixel triangle. */
function CautionIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="h-12 w-12 shrink-0"
      shapeRendering="crispEdges"
    >
      <path
        d="M16 1 L31 30 L1 30 Z"
        fill="oklch(0.883 0 0)"
        stroke="oklch(0 0 0)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="14.5" y="10" width="3" height="10" fill="oklch(0 0 0)" />
      <rect x="14.5" y="23" width="3" height="3" fill="oklch(0 0 0)" />
    </svg>
  );
}

function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "hello@admirkurtovic.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <section className="px-3 pb-8 pt-8 sm:px-8 sm:pb-12 sm:pt-12">
      <div className="mac-window mx-auto w-full max-w-3xl">
        <div className="mac-titlebar">
          <span className="mac-closebox" aria-hidden="true" />
          <span className="mac-title">Welcome</span>
          <span className="mac-closebox invisible" aria-hidden="true" />
        </div>
        <div className="mac-body sm:p-6">
          <div className="flex gap-4 sm:gap-5">
            <CautionIcon />
            <div className="min-w-0">
              <p className="mb-3 flex flex-wrap items-center gap-2">
                <span className="hand-note">OPEN</span>
                <span className="text-sm font-bold">For new opportunities</span>
              </p>
              <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground sm:text-5xl">
                Admir Kurtovic
              </h1>
              <h2 className="mt-2 text-balance text-xl font-bold leading-tight text-foreground sm:mt-3 sm:text-2xl">
                Design partner who ships, concept to code.
              </h2>
              <p className="mt-3 text-sm leading-snug text-muted-foreground">{email}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col justify-end gap-2 sm:flex-row">
            <a
              href="https://www.linkedin.com/in/admirkurtovic/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              LINKEDIN
            </a>
            <button type="button" onClick={handleCopy} className="btn-secondary">
              {copied ? "COPIED" : "COPY EMAIL"}
            </button>
            <a href={`mailto:${email}`} className="btn-primary">
              LET'S TALK
            </a>
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
  // Stack the dialog windows so each sits slightly over the one before it.
  const stackStyle: React.CSSProperties = {
    marginTop: index === 0 ? 0 : "-0.5rem",
    zIndex: index + 1,
    position: "relative",
  };
  const windowClass = `mac-window block ${revealClass}`;

  const content = (
    <>
      <div className="mac-titlebar">
        <span className="mac-closebox" aria-hidden="true" />
        <span className="mac-title">{project.title}</span>
        <span className="mac-closebox invisible" aria-hidden="true" />
      </div>
      <div className="mac-body grid gap-4 sm:grid-cols-[0.95fr_1.05fr] sm:gap-5">
        <div className="mac-well overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} project preview for ${project.client}`}
            className="block aspect-[16/10] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex min-w-0 flex-col">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="hand-note">0{index + 1}</span>
            <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              {project.accent}
            </span>
          </div>
          <p className="text-sm leading-snug text-foreground">{project.summary}</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              {project.client}
            </span>
            <span className="btn-primary">{project.status}</span>
          </div>
        </div>
      </div>
    </>
  );

  // A slug takes precedence over an external URL: if a project has its own case
  // study, the card opens that, and the external link becomes a CTA on the page.
  if (project.slug) {
    return (
      <Link
        to="/work/$projectId"
        params={{ projectId: project.slug }}
        ref={ref as React.Ref<HTMLAnchorElement>}
        style={stackStyle}
        className={windowClass}
      >
        {content}
      </Link>
    );
  }

  if (project.externalUrl) {
    return (
      <a
        href={project.externalUrl}
        target="_blank"
        rel="noreferrer"
        ref={ref as React.Ref<HTMLAnchorElement>}
        style={stackStyle}
        className={windowClass}
      >
        {content}
      </a>
    );
  }

  return (
    <article ref={ref as React.Ref<HTMLElement>} style={stackStyle} className={windowClass}>
      {content}
    </article>
  );
}

// readyOnly hides projects with no destination yet (the "Case study in progress"
// cards), so the homepage shows only work a visitor can actually open.
function WorkList({ readyOnly = false }: { readyOnly?: boolean }) {
  const shown = readyOnly
    ? projects.filter((project) => project.slug || project.externalUrl)
    : projects;

  return (
    <div className="flex flex-col">
      {shown.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}

function CtaSection() {
  return (
    <section className="px-3 py-8 sm:px-8 sm:py-12">
      <div className="mac-window mx-auto w-full max-w-3xl">
        <div className="mac-titlebar">
          <span className="mac-closebox" aria-hidden="true" />
          <span className="mac-title">New Message</span>
          <span className="mac-closebox invisible" aria-hidden="true" />
        </div>
        <div className="mac-body flex flex-col gap-5 sm:flex-row sm:items-center sm:p-6">
          <CautionIcon />
          <div className="flex-1">
            <h2 className="text-balance text-xl font-bold leading-tight text-foreground sm:text-2xl">
              Let's create something that makes sense.
            </h2>
          </div>
          <a href="mailto:hello@admirkurtovic.com" className="btn-primary sm:shrink-0">
            LET'S TALK
          </a>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <Shell>
      <Hero />
      {/* Padding on the section, max-width on the inner wrapper, mirroring Hero and
          CtaSection so the work cards line up with the dialog windows above and below. */}
      <section className="px-3 pb-8 pt-2 sm:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <p className="hand-note">Okay so… how do I do that?</p>
          </div>
          <WorkList readyOnly />
        </div>
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
        <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-none text-foreground sm:text-6xl md:text-7xl">
          Products shaped through strategy, clarity, and craft.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-snug text-muted-foreground">
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
  const gallery = caseStudyGalleries[projectId] ?? [];
  const tradeoffs = caseStudyTradeoffs[projectId];
  // Only surface projects that actually lead somewhere, so no "More work" card is a dead end.
  const relatedProjects = projects
    .filter((project) => project.slug !== projectId && (project.slug || project.externalUrl))
    .slice(0, 2);

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
          <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-none text-foreground sm:text-6xl md:text-7xl">
            {caseStudy.headline}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-snug text-muted-foreground sm:mt-8">
            {caseStudy.context}
          </p>
          {caseStudy.project.externalUrl ? (
            <div className="mt-7 sm:mt-8">
              <a
                href={caseStudy.project.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                View live design system <span aria-hidden="true">→</span>
              </a>
            </div>
          ) : null}
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
                <h2 className="text-base leading-snug font-medium text-foreground">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-snug text-muted-foreground sm:mt-5">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
          {tradeoffs ? (
            <section className="mt-10 border-b border-border py-7 sm:mt-12 sm:py-8">
              <h2 className="text-base leading-snug font-medium text-foreground">
                Trade-offs
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-snug text-muted-foreground sm:mt-5">
                {tradeoffs}
              </p>
            </section>
          ) : null}
          {gallery.length > 0 ? (
            <div className="mt-12 flex flex-col gap-10 sm:mt-16 sm:gap-14">
              {gallery.map((item) => (
                <figure key={item.src}>
                  <div className="overflow-hidden rounded-[1.25rem] bg-secondary p-2 sm:rounded-[1.8rem] sm:p-3">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full rounded-[0.9rem] bg-white object-contain sm:rounded-[1.25rem]"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-4 max-w-3xl text-base leading-snug text-muted-foreground">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </section>
        <section className="mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8 sm:pb-16 lg:pb-24">
          <p className="section-kicker mb-4">More work</p>
          <div className="grid border-t border-border md:grid-cols-2">
            {relatedProjects.map((project) => {
              const cardClass =
                "block border-b border-border py-8 transition-opacity hover:opacity-70 md:px-8 md:odd:border-r";
              const cardContent = (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {project.status}
                  </p>
                  <h2 className="mt-3 text-base leading-snug font-medium text-foreground">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground">{project.summary}</p>
                </>
              );

              // Mirror ProjectCard: an internal case study wins over an external link.
              if (project.slug) {
                return (
                  <Link
                    key={project.title}
                    to="/work/$projectId"
                    params={{ projectId: project.slug }}
                    className={cardClass}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <a
                  key={project.title}
                  href={project.externalUrl ?? undefined}
                  target="_blank"
                  rel="noreferrer"
                  className={cardClass}
                >
                  {cardContent}
                </a>
              );
            })}
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
          <h1 className="text-balance text-4xl font-semibold leading-none text-foreground sm:text-6xl md:text-7xl">
            I design products with direction, clarity, and depth.
          </h1>
        </div>
        <div className="space-y-7 pt-2 text-base leading-snug text-muted-foreground">
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
            <h2 className="mt-5 text-base leading-snug font-medium text-foreground">
              Marketplace flows, healthcare tools, AI products, and design systems.
            </h2>
          </div>
          <div className="border-b border-border py-8 lg:border-r lg:px-8">
            <p className="section-kicker">Approach</p>
            <h2 className="mt-5 text-base leading-snug font-medium text-foreground">
              Research, testing, Figma systems, and close design to development collaboration.
            </h2>
          </div>
          <div className="border-b border-border py-8 lg:px-8">
            <p className="section-kicker">Tools</p>
            <h2 className="mt-5 text-base leading-snug font-medium text-foreground">
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
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">2025 to Present · LawnGuru</p>
              <h2 className="mt-2 text-base leading-snug font-medium text-foreground">
                Leading full product design across marketplace flows.
              </h2>
              <p className="mt-3 text-base leading-snug text-muted-foreground">
                Owning Order History, Order Detail, My Services, and quote review flows while
                building scalable Figma components and translating key UI patterns into production
                React and HTML.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                2024 to 2025 · Social Explorer
              </p>
              <h2 className="mt-2 text-base leading-snug font-medium text-foreground">
                Designed accessibility and AI analytics platforms.
              </h2>
              <p className="mt-3 text-base leading-snug text-muted-foreground">
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
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">0{index + 1}</p>
              <h2 className="mt-8 text-2xl font-semibold leading-snug text-foreground">
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
        <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-none text-foreground sm:text-6xl md:text-7xl">
          Have a product idea that needs more clarity and craft?
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-snug text-muted-foreground">
          Let’s chat about shaping it into an experience that connects meaningfully and delivers
          real value.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="mailto:hello@admirkurtovic.com" className="btn-primary">
            LET'S TALK
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
        <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-none text-foreground sm:text-6xl md:text-7xl">
          Side projects, useful ideas, and experiments that started with a real problem.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-snug text-muted-foreground">
          A place for smaller builds and product explorations. Some polished, some scrappy, all
          shaped around learning by making.
        </p>
        <article className="mt-14 border-t border-border py-10">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">01</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-none text-foreground md:text-6xl">
                CFS Open, an internal CrossFit competition tracker
              </h2>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-foreground">
                Side project · Product design · AI assisted build
              </p>
            </div>
            <div className="space-y-6 text-base leading-snug text-muted-foreground">
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
              <div className="grid gap-3 pt-2 text-sm font-medium text-foreground sm:grid-cols-3">
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
