import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { lovable } from "@/integrations/lovable/index";
import { supabase } from "@/integrations/supabase/client";

function safeNext(value: unknown): string {
  if (typeof value !== "string") return "/";
  if (!value.startsWith("/") || value.startsWith("//")) return "/";
  return value;
}

export const Route = createFileRoute("/auth")({
  ssr: false,
  validateSearch: (search: Record<string, unknown>) => ({
    next: safeNext(search.next),
  }),
  head: () => ({
    meta: [
      { title: "Sign in — Admir Kurtovic" },
      {
        name: "description",
        content:
          "Sign in to authorize connected apps and assistants to access Admir Kurtovic's portfolio tools.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Sign in — Admir Kurtovic" },
      {
        property: "og:description",
        content: "Sign in to authorize connected apps and assistants.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { next } = Route.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) window.location.href = next;
    });
    return () => data.subscription.unsubscribe();
  }, [next]);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setMessage(null);

    if (mode === "signup") {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}${next}` },
      });
      setBusy(false);
      if (signUpError) return setError(signUpError.message);
      if (!data.session) return setMessage("Check your email to confirm your account.");
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (signInError) return setError(signInError.message);
    void navigate({ href: next });
  }

  async function onGoogle() {
    setBusy(true);
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: `${window.location.origin}${next}`,
    });
    if (result.error) {
      setBusy(false);
      setError("Could not start Google sign-in.");
      return;
    }
    if (result.redirected) return;
    window.location.href = next;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Admir Kurtovic
      </p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight">
        {mode === "signin" ? "Sign in" : "Create an account"}
      </h1>
      <p className="mt-3 text-base leading-snug text-muted-foreground">
        Signing in lets you authorize connected apps and assistants to use the portfolio tools.
      </p>

      <button
        type="button"
        onClick={onGoogle}
        disabled={busy}
        className="mt-8 inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent disabled:opacity-60"
      >
        Continue with Google
      </button>

      <form onSubmit={onSubmit} className="mt-6 space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
        />
        <input
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
        />
        <button
          type="submit"
          disabled={busy}
          className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity disabled:opacity-60"
        >
          {mode === "signin" ? "Sign in" : "Sign up"}
        </button>
      </form>

      {error && (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {error}
        </p>
      )}
      {message && <p className="mt-4 text-sm text-muted-foreground">{message}</p>}

      <button
        type="button"
        onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
        className="mt-6 text-sm text-muted-foreground underline"
      >
        {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
      </button>
    </main>
  );
}
