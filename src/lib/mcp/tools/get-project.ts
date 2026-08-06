import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { portfolioProjects } from "../portfolio";

export default defineTool({
  name: "get_project",
  title: "Get a portfolio project",
  description:
    "Look up one project from Admir Kurtovic's portfolio by title or client name (case-insensitive, partial match allowed).",
  inputSchema: {
    query: z.string().describe("Project title or client name, e.g. 'Lawn Guru' or 'Direct2Care'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const needle = query.trim().toLowerCase();
    const match = portfolioProjects.find(
      (project) =>
        project.title.toLowerCase().includes(needle) ||
        project.client.toLowerCase().includes(needle),
    );
    if (!match) {
      return {
        content: [{ type: "text", text: `No project matched "${query}".` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(match, null, 2) }],
      structuredContent: { project: match },
    };
  },
});
