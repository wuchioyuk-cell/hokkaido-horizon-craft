import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/hotels")({
  head: () => ({ meta: [{ title: "精品酒店 — Hokkaidō Horizon" }] }),
  component: () => <ComingSoon slug="hotels" />,
});
