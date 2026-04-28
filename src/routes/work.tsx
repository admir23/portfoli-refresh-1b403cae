import { createFileRoute } from "@tanstack/react-router";

import { WorkPage } from "../components/portfolio-site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work by Admir Kurtovic" },
      {
        name: "description",
        content: "Selected product design case studies by Admir Kurtovic.",
      },
      { property: "og:title", content: "Work by Admir Kurtovic" },
      {
        property: "og:description",
        content: "Explore Fumis Solutions, Direct2Care, United Fitness, and Handwerker Pro.",
      },
    ],
  }),
  component: WorkPage,
});