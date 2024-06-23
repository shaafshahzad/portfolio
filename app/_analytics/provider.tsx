"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  console.log("PostHog Key:", process.env.NEXT_PUBLIC_POSTHOG_KEY);
  console.log("PostHog Host:", process.env.NEXT_PUBLIC_POSTHOG_HOST);

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    ui_host: "https://app.posthog.com",
  });
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
