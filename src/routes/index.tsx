import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "../components/portfolio-site";

const SITE_URL = "https://admirkurtovic.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Admir Kurtovic, Product Designer" },
      {
        name: "description",
        content:
          "Portfolio of Admir Kurtovic, crafting useful products through strategy, purposeful design, and user centered insights.",
      },
      { property: "og:title", content: "Admir Kurtovic, Product Designer" },
      {
        property: "og:description",
        content:
          "Explore selected product design work by Admir Kurtovic, from Fumis Solutions to Direct2Care.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Admir Kurtovic",
          jobTitle: "Product Designer",
          url: SITE_URL,
          sameAs: [
            "https://www.linkedin.com/in/admirkurtovic/",
            "https://dribbble.com/admirkurtovic",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePage />;
}
