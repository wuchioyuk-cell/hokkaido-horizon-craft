import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/our-story")({
  head: () => ({ meta: [{ title: "品牌故事 — Hokkaidō Horizon" }] }),
  component: () => <ServicePage slug="ourStory" />,
});
