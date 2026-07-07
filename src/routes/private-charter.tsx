import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/private-charter")({
  head: () => ({ meta: [{ title: "私人包车 — Hokkaidō Horizon" }] }),
  component: () => <ServicePage slug="privateCharter" />,
});
