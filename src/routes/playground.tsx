import { createFileRoute } from "@tanstack/react-router";

import { PlaygroundPage } from "../components/portfolio-site";

const SITE_URL = "https://admirkurtovic.com";

export const Route = createFileRoute("/playground")({
  head: () => ({
    meta: [
      { title: "Playground by Admir Kurtovic" },
      {
        name: "description",
        content: "Explore design experiments, product ideas, and playful interface explorations by Admir Kurtovic.",
      },
      { property: "og:title", content: "Playground by Admir Kurtovic" },
      {
        property: "og:description",
        content: "A space for Admir Kurtovic's experiments, prototypes, and product design explorations.",
      },
      { property: "og:url", content: `${SITE_URL}/playground` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/playground` }],
  }),
  component: PlaygroundPage,
});
