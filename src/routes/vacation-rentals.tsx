import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/vacation-rentals")({
  head: () => ({ meta: [{ title: "私人别墅 — Hokkaidō Horizon" }] }),
  component: () => <ServicePage slug="vacationRentals" />,
});
