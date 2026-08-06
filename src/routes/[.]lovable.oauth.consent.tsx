import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";

import { supabase } from "@/integrations/supabase/client";

type AuthorizationDetails = {
  client?: { name?: string } | null;
  scope?: string | null;
  redirect_url?: string | null;
  redirect_to?: string | null;
};

type OAuthApi = {
  getAuthorizationDetails: (
    id: string,
  ) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  approveAuthorization: (
    id: string,
  ) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  denyAuthorization: (
    id: string,
  ) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
};

function oauthApi(): OAuthApi {
  return (supabase.auth as unknown as { oauth: OAuthApi }).oauth;
}

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (search: Record<string, unknown>) => ({
    authorization_id: typeof search.authorization_id === "string" ? search.authorization_id : "",
  }),
  beforeLoad: async ({ search, location }) => {
    if (!search.authorization_id) throw new Error("Missing authorization_id");
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      throw redirect({
        to: "/auth",
        search: { next: location.pathname + location.searchStr },
      });
    }
  },
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.search).get("authorization_id")!;
    const { data, error } = await oauthApi().getAuthorizationDetails(authorizationId);
    if (error) throw new Error(error.message);
    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });
    return data;
  },
  component: Consent,
  errorComponent: ({ error }) => (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <h1 className="text-2xl font-semibold">Authorization request failed</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {String((error as Error)?.message ?? error)}
      </p>
    </main>
  ),
});

function Consent() {
  const details = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clientName = details?.client?.name ?? "an app";
  const scopes: string[] = String(details?.scope ?? "")
    .split(" ")
    .filter(Boolean);

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const api = oauthApi();
    const { data, error: decideError } = approve
      ? await api.approveAuthorization(authorization_id)
      : await api.denyAuthorization(authorization_id);
    if (decideError) {
      setBusy(false);
      setError(decideError.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Authorize access
      </p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight">
        Connect {clientName} to your account
      </h1>
      <p className="mt-4 text-base leading-snug text-muted-foreground">
        This lets {clientName} call this site&apos;s portfolio tools as you. It does not bypass this
        app&apos;s permissions or backend policies.
      </p>

      {scopes.length > 0 && (
        <ul className="mt-6 space-y-2 rounded-xl border border-border p-4 text-sm">
          {scopes.map((scope) => (
            <li key={scope}>
              {scope === "email"
                ? "Share your email address"
                : scope === "profile" || scope === "openid"
                  ? "Share your basic profile"
                  : `Additional permission requested: ${scope}`}
            </li>
          ))}
        </ul>
      )}

      {error && (
        <p role="alert" className="mt-6 text-sm text-destructive">
          {error}
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          disabled={busy}
          onClick={() => decide(true)}
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity disabled:opacity-60"
        >
          Approve
        </button>
        <button
          disabled={busy}
          onClick={() => decide(false)}
          className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent disabled:opacity-60"
        >
          Cancel connection
        </button>
      </div>
    </main>
  );
}
