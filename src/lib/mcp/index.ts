import { auth, defineMcp } from "@lovable.dev/mcp-js";

import getProfileTool from "./tools/get-profile";
import getProjectTool from "./tools/get-project";
import listProjectsTool from "./tools/list-projects";

// The OAuth issuer must be the direct Supabase host; the project ref is the only
// value that survives publish unchanged.
const projectRef = import.meta.env["VITE_SUPABASE_PROJECT_ID"] ?? "project-ref-unset";

export default defineMcp({
  name: "pixel-perfect-portfolio",
  title: "Pixel Perfect Portfolio",
  version: "0.1.0",
  instructions:
    "Tools for Admir Kurtovic's product design portfolio. Use `list_projects` to browse the work, `get_project` to look up one project by title or client, and `get_profile` for role, positioning, and contact details.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listProjectsTool, getProjectTool, getProfileTool],
});
