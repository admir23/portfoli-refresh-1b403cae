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
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.title} — Admir Kurtovic` },
      { name: "description", content: loaderData.description },
      { property: "og:title", content: `${loaderData.title} — Admir Kurtovic` },
      { property: "og:description", content: loaderData.description },
    ],
  }),
  component: ProjectCaseStudyRoute,
});

function ProjectCaseStudyRoute() {
  const { projectId } = Route.useParams();

  return <CaseStudyPage projectId={projectId as "fumis" | "direct2care"} />;
}
