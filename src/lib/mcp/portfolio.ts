/**
 * Import-safe portfolio content for the MCP tools.
 * No env reads, no I/O, no image imports.
 */

export const profile = {
  name: "Admir Kurtovic",
  role: "Senior Product Designer",
  location: "Sarajevo, Bosnia and Herzegovina",
  website: "https://admirkurtovic.com",
  email: "hello@admirkurtovic.com",
  linkedin: "https://www.linkedin.com/in/admirkurtovic/",
  cv: "https://admirkurtovic.com/Admir_Kurtovic_CV_2026.pdf",
  tagline: "Design partner who ships, concept to code.",
  summary:
    "Research driven product design for startups and enterprises. Product strategy, purposeful design, user-centered insights, and measurable outcomes.",
};

export type PortfolioProject = {
  title: string;
  client: string;
  focus: string;
  summary: string;
  url: string;
  status: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Automated Design System",
    client: "Lawn Guru",
    focus: "Design system · AI automation",
    summary:
      "A fully automated design system built with Claude: Figma tokens turned into multi-platform JSON token libraries, production-ready React component variants, strict TypeScript props, and living documentation deployed to Vercel.",
    url: "https://lawn-guru-design-system.vercel.app/",
    status: "Live",
  },
  {
    title: "Fumis Solutions",
    client: "Fumis",
    focus: "Product design · IoT platform",
    summary:
      "A connected product experience shaped around clarity, system thinking, and practical daily use.",
    url: "https://admirkurtovic.com/work/fumissolutions",
    status: "Case study",
  },
  {
    title: "Direct2Care",
    client: "Direct2MD",
    focus: "Healthcare · Patient experience",
    summary:
      "A healthcare flow designed to make patient actions feel calmer, faster, and easier to trust.",
    url: "https://admirkurtovic.com/work/direct2care",
    status: "Case study",
  },
  {
    title: "United Fitness",
    client: "United Fitness Brands",
    focus: "Wellness · Brand systems",
    summary:
      "A wellness brand system focused on motivation, consistency, and a more usable digital presence.",
    url: "https://admirkurtovic.com/work",
    status: "Case study in progress",
  },
  {
    title: "Ebgroupp",
    client: "Handwerker Pro",
    focus: "SaaS · Service marketplace",
    summary:
      "A service marketplace experience that turns fragmented workflows into clearer product moments.",
    url: "https://admirkurtovic.com/work",
    status: "Case study in progress",
  },
];
