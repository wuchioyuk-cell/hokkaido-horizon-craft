import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Hokkaidō Horizon" },
      { name: "description", content: "The founder's philosophy, our local team, and our commitment to Hokkaido." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Our Story"
      title="Built on this island, by the people who live here."
      body="The founder's philosophy, the asset registry of drivers and guides, and our work on local preservation and sustainability."
    />
  ),
});
