import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/private-charter")({
  head: () => ({
    meta: [
      { title: "Private Charter — Hokkaidō Horizon" },
      { name: "description", content: "High-spec Toyota Alphard and Hiace charters across Hokkaido." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Private Charter"
      title="The fleet that moves you across the island."
      body="Cross-island itineraries, multi-day chauffeured journeys, and the same vehicle from arrival to departure — no handoffs."
    />
  ),
});
