import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/ski-school")({
  head: () => ({ meta: [{ title: "滑雪学校 — Hokkaidō Horizon" }] }),
  component: () => <ServicePage slug="skiSchool" />,
});
