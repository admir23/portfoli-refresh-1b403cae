import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "../components/portfolio-site";

const SITE_URL = "https://admirkurtovic.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Admir Kurtovic" },
      {
        name: "description",
        content: "Contact Admir Kurtovic to start creating impactful product experiences together.",
      },
      { property: "og:title", content: "Contact Admir Kurtovic" },
      {
        property: "og:description",
        content: "Start a conversation with Admir Kurtovic about product strategy and design.",
      },
      { property: "og:url", content: `${SITE_URL}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});
