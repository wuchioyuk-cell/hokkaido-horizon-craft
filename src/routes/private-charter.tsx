import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/private-charter")({
  head: () => ({ meta: [{ title: "私人包车 — Hokkaidō Horizon" }] }),
  component: () => <ComingSoon slug="privateCharter" />,
});
