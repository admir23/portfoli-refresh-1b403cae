import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "../components/portfolio-site";

const SITE_URL = "https://admirkurtovic.com";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Admir Kurtovic" },
      {
        name: "description",
        content: "Learn how Admir Kurtovic blends strategy, purposeful design, and user centered insights.",
      },
      { property: "og:title", content: "About Admir Kurtovic" },
      {
        property: "og:description",
        content: "Product design approach focused on meaningful, valuable digital experiences.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});
