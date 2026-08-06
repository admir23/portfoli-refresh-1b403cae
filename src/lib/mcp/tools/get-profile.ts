import { defineTool } from "@lovable.dev/mcp-js";

import { profile } from "../portfolio";

export default defineTool({
  name: "get_profile",
  title: "Get designer profile",
  description:
    "Get Admir Kurtovic's profile: role, location, positioning summary, and the ways to get in touch (email, LinkedIn, CV, website).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (_input, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: { profile },
    };
  },
});
