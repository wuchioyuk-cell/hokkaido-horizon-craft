import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/vacation-rentals")({
  head: () => ({ meta: [{ title: "私人别墅 — Hokkaidō Horizon" }] }),
  component: () => <ComingSoon slug="vacationRentals" />,
});
