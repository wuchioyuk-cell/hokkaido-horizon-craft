import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/airport-transfers")({
  head: () => ({ meta: [{ title: "机场接送 — Hokkaidō Horizon" }] }),
  component: () => <ComingSoon slug="airportTransfers" />,
});
