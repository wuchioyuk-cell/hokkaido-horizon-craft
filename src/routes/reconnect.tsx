import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/reconnect")({
  head: () => ({
    meta: [
      { title: "Reconnect — Hokkaidō Horizon" },
      { name: "description", content: "Speak directly with a Hokkaido concierge. WhatsApp, email, or our regional offices." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Reconnect"
      title="A direct line to the house."
      body="WhatsApp, voice, or a single hyper-simplified inquiry form. Every message is read by a person — usually within the same daylight hour."
    />
  ),
});
