import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "../components/portfolio-site";

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
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePage />;
}
