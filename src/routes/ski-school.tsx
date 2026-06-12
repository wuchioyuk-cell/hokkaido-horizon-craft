import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/ski-school")({
  head: () => ({
    meta: [
      { title: "Ski School — Hokkaidō Horizon" },
      { name: "description", content: "Elite multilingual private ski and snowboard instruction in Niseko and beyond." },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Ski School"
      title="Elite private instruction, in your language."
      body="Powder progression, backcountry safety, kids and family clinics — taught by certified instructors fluent in your tongue."
    />
  ),
});
