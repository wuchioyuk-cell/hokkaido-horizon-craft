import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/airport-transfers")({
  head: () => ({ meta: [{ title: "机场接送 — Hokkaidō Horizon" }] }),
  component: () => <ServicePage slug="airportTransfers" />,
});
