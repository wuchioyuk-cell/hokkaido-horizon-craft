import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/travel")({
  head: () => ({ meta: [{ title: "出行 — Hokkaidō Horizon" }] }),
  component: () => <ComingSoon slug="travel" />,
});
