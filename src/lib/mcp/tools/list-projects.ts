import { defineTool } from "@lovable.dev/mcp-js";

import { portfolioProjects } from "../portfolio";

export default defineTool({
  name: "list_projects",
  title: "List portfolio projects",
  description:
    "List every project in Admir Kurtovic's portfolio with client, focus area, summary, status, and link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (_input, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(portfolioProjects, null, 2) }],
      structuredContent: { projects: portfolioProjects },
    };
  },
});
