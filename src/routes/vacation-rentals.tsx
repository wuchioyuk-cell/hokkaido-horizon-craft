import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/vacation-rentals")({
  head: () => ({
    meta: [
      { title: "Vacation Rentals — Hokkaidō Horizon" },
      { name: "description", content: "Premium chalets and villas for families and small groups." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Vacation Rentals"
      title="Reserve an estate, not a room."
      body="Private chalets, ski-in villas, and farmstead retreats — with private onsen, optional private chef, and full concierge integration."
    />
  ),
});
