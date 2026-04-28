import { Link } from "@tanstack/react-router";

import direct2careImage from "../assets/direct2care.png";
import fumisImage from "../assets/fumis.png";
import handwerkerproImage from "../assets/handwerkerpro.jpg";
import unitedFitnessImage from "../assets/united-fitness.jpg";

const projects = [
  {
    title: "Fumis Solutions",
    client: "Fumis",
    slug: "fumis",
    image: fumisImage,
    accent: "Product design · IoT platform",
    summary: "A connected product experience shaped around clarity, system thinking, and practical daily use.",
    status: "Read case study",
  },
  {
    title: "Direct2Care",
    client: "Direct2MD",
    slug: "direct2care",
    image: direct2careImage,
    accent: "Healthcare · Patient experience",
    summary: "A healthcare flow designed to make patient actions feel calmer, faster, and easier to trust.",
    status: "Read case study",
  },
  {
    title: "United Fitness",
    client: "United Fitness Brands",
    slug: null,
    image: unitedFitnessImage,
    accent: "Wellness · Brand systems",
    summary: "A wellness brand system focused on motivation, consistency, and a more usable digital presence.",
    status: "Case study in progress",
  },
  {
    title: "Ebgroupp",
    client: "Handwerker Pro",
    slug: null,
    image: handwerkerproImage,
    accent: "SaaS · Service marketplace",
    summary: "A service marketplace experience that turns fragmented workflows into clearer product moments.",
    status: "Case study in progress",
  },
];

const caseStudyDetails = {
  fumis: {
    project: projects[0],
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
    project: projects[1],
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
        body: "I focused on clearer information grouping, patient-friendly language, and visual pacing that helps users understand what matters at each step.",
      },
      {
        title: "Outcome",
        body: "The work establishes a calmer patient experience with stronger guidance, clearer next actions, and a more usable foundation for care-related journeys.",
      },
    ],
  },
} as const;

const principles = [
  "Thoughtful strategy",
  "Purposeful design",
  "User-centered insights",
  "Products that deliver value",
];

function Header() {
  const linkClass =
    "text-sm font-semibold text-muted-foreground transition hover:text-foreground data-[status=active]:text-foreground";

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link to="/" className="text-sm font-black text-foreground" aria-label="Admir Kurtovic home">
          Admir
        </Link>
        <div className="flex items-center gap-5 sm:gap-8">
          <Link to="/work" className={linkClass} activeOptions={{ exact: true }}>
            My Work
          </Link>
          <Link to="/about" className={linkClass} activeOptions={{ exact: true }}>
            How I Think
          </Link>
          <Link to="/contact" className={linkClass} activeOptions={{ exact: true }}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-5 pb-20 pt-28 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="hand-note absolute left-[18%] top-[29%] hidden rotate-[-7deg] text-muted-foreground lg:block">
          Hi, I'm Admir
        </p>
        <p className="hand-note absolute right-[17%] top-[55%] hidden max-w-xs rotate-[4deg] text-muted-foreground lg:block">
          designing products that feel clear before they ask for effort
        </p>
        <h1 className="relative mx-auto max-w-5xl text-balance text-[3.4rem] font-bold leading-[0.95] tracking-normal text-foreground sm:text-7xl lg:text-[5.8rem]">
          <span className="absolute left-0 top-[28%] -z-10 hidden text-[0.92em] text-muted/80 sm:block">
            product design
          </span>
          I blend thoughtful strategy with product design to make experiences that just… make sense
        </h1>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_26rem] lg:items-end">
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            By blending thoughtful strategy, purposeful design, and user-centered insights, I help shape
            products that not only function seamlessly but also connect meaningfully.
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
  const content = (
    <>
      <div>
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
      <div className="overflow-hidden rounded-[1.6rem] bg-secondary p-3">
        <img
          src={project.image}
          alt={`${project.title} project preview for ${project.client}`}
          className="aspect-[16/10] w-full rounded-[1.1rem] object-cover transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
    </>
  );

  if (project.slug) {
    return (
      <Link
        to="/work/$projectId"
        params={{ projectId: project.slug }}
        className="group grid gap-6 border-t border-border py-10 md:grid-cols-[0.62fr_1fr] md:items-center md:gap-10"
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="group grid gap-6 border-t border-border py-10 md:grid-cols-[0.62fr_1fr] md:items-center md:gap-10">
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
  return (
    <footer className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 text-sm font-semibold text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© 2025 Admir Kurtovic</p>
        <div className="flex flex-wrap gap-5">
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://www.linkedin.com/in/admirkurtovic/">LinkedIn</a>
          <a href="https://dribbble.com/Admir_Kurtovic">Dribbble</a>
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
          <p className="hand-note mb-2 text-muted-foreground">Okay so… how do I do that?</p>
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

export function AboutPage() {
  return (
    <Shell>
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:pb-24 lg:pt-40">
        <div>
          <p className="section-kicker mb-3">how I think</p>
          <h1 className="text-balance text-5xl font-bold leading-none tracking-normal text-foreground sm:text-7xl">
            Design with direction and depth.
          </h1>
        </div>
        <div className="space-y-7 pt-2 text-xl leading-9 text-muted-foreground">
          <p>
            By blending thoughtful strategy, purposeful design, and user-centered insights, I help
            shape products that not only function seamlessly but also connect meaningfully.
          </p>
          <p>Together, we create experiences that engage, inspire, and deliver real value.</p>
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
          Let’s chat about shaping it into an experience that connects meaningfully and delivers real value.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="mailto:hello@admirkurtovic.com" className="btn-primary">
            hello@admirkurtovic.com
          </a>
          <a href="https://www.linkedin.com/in/admirkurtovic/" className="btn-secondary">
            LinkedIn
          </a>
          <a href="https://dribbble.com/Admir_Kurtovic" className="btn-secondary">
            Dribbble
          </a>
        </div>
      </section>
    </Shell>
  );
}
