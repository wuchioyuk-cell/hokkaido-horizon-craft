import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/experiences")({
  head: () => ({ meta: [{ title: "体验之旅 — Hokkaidō Horizon" }] }),
  component: () => <ComingSoon slug="experiences" />,
});
