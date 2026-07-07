import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/explore")({
  head: () => ({ meta: [{ title: "探索 — Hokkaidō Horizon" }] }),
  component: () => <ServicePage slug="explore" />,
});
