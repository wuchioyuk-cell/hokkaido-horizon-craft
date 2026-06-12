import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/stay")({
  head: () => ({
    meta: [
      { title: "Stay — Hokkaidō Horizon" },
      { name: "description", content: "Owned boutique hotels and private chalets across Hokkaido." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Stay"
      title="Boutique hotels & private chalets, end to end."
      body="From the birch-lined suites of Niseko to the stone-walled retreats of Otaru, every property is owned and operated within the house."
    />
  ),
});
