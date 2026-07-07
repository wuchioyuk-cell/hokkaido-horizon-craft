import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/hotels")({
  head: () => ({ meta: [{ title: "精品酒店 — Hokkaidō Horizon" }] }),
  component: () => <ServicePage slug="hotels" />,
});
