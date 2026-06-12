import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/our-story")({
  head: () => ({ meta: [{ title: "品牌故事 — Hokkaidō Horizon" }] }),
  component: () => <ComingSoon slug="ourStory" />,
});
