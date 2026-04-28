import { createFileRoute } from "@tanstack/react-router";

import { PlaygroundPage } from "../components/portfolio-site";

export const Route = createFileRoute("/playground")({
  head: () => ({
    meta: [
      { title: "Playground — Admir Kurtovic" },
      {
        name: "description",
        content: "Explore design experiments, product ideas, and playful interface explorations by Admir Kurtovic.",
      },
      { property: "og:title", content: "Playground — Admir Kurtovic" },
      {
        property: "og:description",
        content: "A space for Admir Kurtovic's experiments, prototypes, and product design explorations.",
      },
    ],
  }),
  component: PlaygroundPage,
});