import { createFileRoute, notFound } from "@tanstack/react-router";

import { CaseStudyPage, getCaseStudyMeta } from "../components/portfolio-site";

const SITE_URL = "https://admirkurtovic.com";

export const Route = createFileRoute("/work_/$projectId")({
  loader: ({ params }) => {
    const meta = getCaseStudyMeta(params.projectId);

    if (!meta) {
      throw notFound();
    }

    return meta;
  },
  head: ({ params, loaderData }) => {
    const title = loaderData?.title ?? "Case Study";
    const description = loaderData?.description ?? "Product design case study by Admir Kurtovic.";
    const url = `${SITE_URL}/work/${params.projectId}`;

    return {
      meta: [
        { title: `${title} by Admir Kurtovic` },
        { name: "description", content: description },
        { property: "og:title", content: `${title} by Admir Kurtovic` },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: title,
            headline: title,
            description,
            url,
            author: {
              "@type": "Person",
              name: "Admir Kurtovic",
              url: SITE_URL,
            },
          }),
        },
      ],
    };
  },
  component: ProjectCaseStudyRoute,
});

function ProjectCaseStudyRoute() {
  const { projectId } = Route.useParams();

  return <CaseStudyPage projectId={projectId as "fumissolutions" | "direct2care"} />;
}
