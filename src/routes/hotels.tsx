import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/hotels")({
  head: () => ({
    meta: [
      { title: "Hotels — Hokkaidō Horizon" },
      { name: "description", content: "Boutique high-end hotel properties across Hokkaido." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Hotels"
      title="A small register of owned addresses."
      body="Each property is small, intentional, and personally staffed by the house. Onsite wellness, omakase dining, and direct access to our fleet and guides."
    />
  ),
});
