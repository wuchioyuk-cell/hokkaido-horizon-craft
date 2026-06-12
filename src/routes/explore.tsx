import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/explore")({
  head: () => ({ meta: [{ title: "探索 — Hokkaidō Horizon" }] }),
  component: () => <ComingSoon slug="explore" />,
});
