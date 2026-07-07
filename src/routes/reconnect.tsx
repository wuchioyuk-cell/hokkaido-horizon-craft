import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/reconnect")({
  head: () => ({ meta: [{ title: "联系我们 — Hokkaidō Horizon" }] }),
  component: () => <ServicePage slug="reconnect" />,
});
