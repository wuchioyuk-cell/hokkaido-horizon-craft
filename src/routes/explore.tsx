import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore — Hokkaidō Horizon" },
      { name: "description", content: "Private seasonal tours and elite ski instruction." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Explore"
      title="The local hands that unlock the island."
      body="From backcountry powder to summer mist on the calderas — private guides who have run these mountains for decades."
    />
  ),
});
