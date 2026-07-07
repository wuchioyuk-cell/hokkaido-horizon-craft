import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/experiences")({
  head: () => ({ meta: [{ title: "体验之旅 — Hokkaidō Horizon" }] }),
  component: () => <ServicePage slug="experiences" />,
});
