import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/airport-transfers")({
  head: () => ({
    meta: [
      { title: "Airport Transfers — Hokkaidō Horizon" },
      { name: "description", content: "Private transfers from New Chitose, Sapporo, and Asahikawa airports." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Airport Transfers"
      title="From the jet bridge to the lodge."
      body="Meet-and-greet at New Chitose, Sapporo, or Asahikawa. Fixed pricing, winter-rated vehicles, and a driver who already knows your name."
    />
  ),
});
