import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "../components/portfolio-site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Admir Kurtovic" },
      {
        name: "description",
        content: "Learn how Admir Kurtovic blends strategy, purposeful design, and user-centered insights.",
      },
      { property: "og:title", content: "About — Admir Kurtovic" },
      {
        property: "og:description",
        content: "Product design approach focused on meaningful, valuable digital experiences.",
      },
    ],
  }),
  component: AboutPage,
});