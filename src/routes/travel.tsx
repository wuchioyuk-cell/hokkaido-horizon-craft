import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/travel")({
  head: () => ({ meta: [{ title: "出行 — Hokkaidō Horizon" }] }),
  component: () => <ServicePage slug="travel" />,
});
