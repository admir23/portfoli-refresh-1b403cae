import { Link } from "@tanstack/react-router";

import direct2careImage from "../assets/direct2care.png";
import fumisImage from "../assets/fumis.png";
import handwerkerproImage from "../assets/handwerkerpro.jpg";
import unitedFitnessImage from "../assets/united-fitness.jpg";

const projects = [
  {
    title: "Fumis Solutions",
    client: "Fumis",
    image: fumisImage,
    accent: "Product design · IoT platform",
  },
  {
    title: "Direct2Care",
    client: "Direct2MD",
    image: direct2careImage,
    accent: "Healthcare · Patient experience",
  },
  {
    title: "United Fitness",
    client: "United Fitness Brands",
    image: unitedFitnessImage,
    accent: "Wellness · Brand systems",
  },
  {
    title: "Ebgroupp",
    client: "Handwerker Pro",
    image: handwerkerproImage,
    accent: "SaaS · Service marketplace",
  },
];

const principles = [
  "Thoughtful strategy",
  "Purposeful design",
  "User-centered insights",
  "Products that deliver value",
];

function Header() {
  const linkClass =
    "rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground";

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Admir Kurtovic home">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-foreground text-sm font-black text-background shadow-[var(--shadow-glow)]">
            A
          </span>
          <span className="hidden text-sm font-bold tracking-tight text-foreground sm:block">
            Admir Kurtovic
          </span>
        </Link>
        <div className="flex items-center gap-1 rounded-lg border border-border/70 bg-card/70 p-1 shadow-[var(--shadow-soft)]">
          <Link to="/work" className={linkClass} activeOptions={{ exact: true }}>
            Work
          </Link>
          <Link to="/about" className={linkClass} activeOptions={{ exact: true }}>
            About
          </Link>
          <Link
            to="/contact"
            className="rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background transition hover:opacity-90"
            activeOptions={{ exact: true }}
          >
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
    <section className="relative isolate border-b border-border/70">
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
      <div className="absolute right-[-18rem] top-[-16rem] -z-10 h-[36rem] w-[36rem] rounded-full bg-[image:var(--gradient-ribbon)] opacity-80 blur-3xl" />
      <div className="absolute left-1/2 top-0 -z-10 h-full w-px bg-border/70" />
      <div className="mx-auto grid min-h-[calc(100vh-74px)] w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 font-serif text-xl italic text-muted-foreground sm:text-2xl">
            Hello, my name is Admir and I'm
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            Crafting <span className="text-gradient">impactful products</span> that shape the
            future.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            By blending thoughtful strategy, purposeful design, and user-centered insights, I help
            shape products that not only function seamlessly but also connect meaningfully. Together,
            we create experiences that engage, inspire, and deliver real value.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/work" className="btn-primary">
              View work <span aria-hidden="true">→</span>
            </Link>
            <a href="mailto:hello@admirkurtovic.com" className="btn-secondary">
              Let's chat
            </a>
          </div>
        </div>
        <div className="relative min-h-[28rem] lg:min-h-[34rem]">
          <div className="absolute inset-x-4 top-4 h-72 rotate-[-10deg] rounded-[2rem] bg-[image:var(--gradient-ribbon)] opacity-90 shadow-[var(--shadow-glow)] sm:h-96" />
          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-md rounded-2xl border border-border/70 bg-card/80 p-4 shadow-[var(--shadow-card)] backdrop-blur-xl">
            <img
              src={fumisImage}
              alt="Fumis Solutions product interface mockup"
              className="aspect-[4/3] w-full rounded-xl object-cover"
              loading="eager"
            />
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-foreground">Fumis Solutions</p>
                <p className="text-sm text-muted-foreground">Featured case study</p>
              </div>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                Product
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }: { project: (typeof projects)[number]; featured?: boolean }) {
  return (
    <a
      href={project.href}
      className={`group block overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${featured ? "lg:first:col-span-2" : ""}`}
    >
      <div className="overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={`${project.title} project preview for ${project.client}`}
          className="aspect-[16/11] w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex items-end justify-between gap-4 p-5 sm:p-6">
        <div>
          <p className="text-sm font-semibold text-primary">{project.accent}</p>
          <h2 className="mt-2 text-2xl font-black tracking-normal text-foreground">
            {project.title}
          </h2>
          <p className="mt-1 text-muted-foreground">{project.client}</p>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-xl text-foreground transition group-hover:bg-primary group-hover:text-primary-foreground">
          ↗
        </span>
      </div>
    </a>
  );
}

function WorkGrid({ featured = false }: { featured?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} featured={featured} />
      ))}
    </div>
  );
}

function CtaSection() {
  return (
    <section className="border-t border-border/70 bg-[image:var(--gradient-cta)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8 lg:py-24">
        <h2 className="max-w-2xl text-balance text-4xl font-black leading-tight tracking-normal text-foreground sm:text-5xl">
          Let's start creating <span className="text-gradient">together</span>
        </h2>
        <a href="mailto:hello@admirkurtovic.com" className="btn-primary md:shrink-0">
          Let's chat <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2025 All rights reserved</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://www.linkedin.com/in/admirkurtovic/">Linkedin</a>
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
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="mt-3 max-w-3xl text-balance text-4xl font-black leading-tight tracking-normal text-foreground sm:text-5xl">
              Products shaped through strategy, clarity, and craft.
            </h2>
          </div>
          <Link to="/work" className="btn-secondary md:shrink-0">
            All work
          </Link>
        </div>
        <WorkGrid featured />
      </section>
      <CtaSection />
    </Shell>
  );
}

export function WorkPage() {
  return (
    <Shell>
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="section-kicker">Work</p>
        <h1 className="mt-4 max-w-4xl text-balance text-5xl font-black leading-tight tracking-normal text-foreground sm:text-6xl">
          Case studies for products that connect meaningfully.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          A selection of product, brand, and experience design work for teams building useful,
          valuable digital products.
        </p>
        <div className="mt-12">
          <WorkGrid />
        </div>
      </section>
      <CtaSection />
    </Shell>
  );
}

export function AboutPage() {
  return (
    <Shell>
      <section className="relative border-b border-border/70 bg-[image:var(--gradient-hero)]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div>
            <p className="section-kicker">About</p>
            <h1 className="mt-4 text-balance text-5xl font-black leading-tight tracking-normal text-foreground sm:text-6xl">
              Designing products with direction and depth.
            </h1>
          </div>
          <div className="space-y-7 text-lg leading-8 text-muted-foreground">
            <p>
              By blending thoughtful strategy, purposeful design, and user-centered insights, I help
              shape products that not only function seamlessly but also connect meaningfully.
            </p>
            <p>
              Together, we create experiences that engage, inspire, and deliver real value.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <div key={principle} className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-black text-primary">0{index + 1}</p>
              <h2 className="mt-8 text-2xl font-black tracking-normal text-foreground">{principle}</h2>
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
      <section className="relative min-h-[calc(100vh-74px)] border-b border-border/70 bg-[image:var(--gradient-hero)]">
        <div className="absolute right-[-12rem] top-[-8rem] h-80 w-80 rounded-full bg-[image:var(--gradient-ribbon)] opacity-70 blur-3xl" />
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="section-kicker">Contact</p>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl font-black leading-tight tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            Let's start creating <span className="text-gradient">together</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Have a product idea, redesign, or digital experience that needs more clarity and craft?
            Let’s chat.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:hello@admirkurtovic.com" className="btn-primary">
              hello@admirkurtovic.com
            </a>
            <a href="https://www.linkedin.com/in/admirkurtovic/" className="btn-secondary">
              Linkedin
            </a>
            <a href="https://dribbble.com/Admir_Kurtovic" className="btn-secondary">
              Dribbble
            </a>
          </div>
        </div>
      </section>
    </Shell>
  );
}