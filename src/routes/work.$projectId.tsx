import { createFileRoute, notFound } from "@tanstack/react-router";

import { CaseStudyPage, getCaseStudyMeta } from "../components/portfolio-site";

export const Route = createFileRoute("/work/$projectId")({
  loader: ({ params }) => {
    const meta = getCaseStudyMeta(params.projectId);

    if (!meta) {
      throw notFound();
    }

    return meta;
  },
  head: ({ loaderData }) => {
    const title = loaderData?.title ?? "Case Study";
    const description = loaderData?.description ?? "Product design case study by Admir Kurtovic.";

    return {
      meta: [
        { title: `${title} — Admir Kurtovic` },
        { name: "description", content: description },
        { property: "og:title", content: `${title} — Admir Kurtovic` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProjectCaseStudyRoute,
});

function ProjectCaseStudyRoute() {
  const { projectId } = Route.useParams();

  return <CaseStudyPage projectId={projectId as "fumissolutions" | "direct2care"} />;
}
