import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences & Tours — Hokkaidō Horizon" },
      { name: "description", content: "Privately guided day tours and deep-nature expeditions across Hokkaido's four seasons." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Experiences & Tours"
      title="Tailor-made expeditions, season by season."
      body="Foraging in spring, sea kayaking in summer, harvest tables in autumn, backcountry traverses in winter. Designed for one party at a time."
    />
  ),
});
