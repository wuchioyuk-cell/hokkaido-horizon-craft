import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/reconnect")({
  head: () => ({ meta: [{ title: "联系我们 — Hokkaidō Horizon" }] }),
  component: () => <ComingSoon slug="reconnect" />,
});
