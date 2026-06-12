import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/stay")({
  head: () => ({ meta: [{ title: "住宿 — Hokkaidō Horizon" }] }),
  component: () => <ComingSoon slug="stay" />,
});
