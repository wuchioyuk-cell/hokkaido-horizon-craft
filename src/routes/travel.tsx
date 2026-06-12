import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title: "Travel — Hokkaidō Horizon" },
      { name: "description", content: "Private charter and airport transfers across Hokkaido." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Travel"
      title="A first-class airline experience on land."
      body="Our purpose-built Alphard and Hiace fleet, chauffeured by drivers fluent in twelve languages and three decades of these passes."
    />
  ),
});
