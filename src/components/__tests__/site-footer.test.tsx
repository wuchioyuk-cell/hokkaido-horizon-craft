import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { SiteFooter, LANGUAGES } from "@/components/site-footer";

function renderFooterWithRouter(initialPath = "/") {
  const rootRoute = createRootRoute({ component: () => <Outlet /> });
  const footerRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: SiteFooter,
  });
  // Catch-all so language Link doesn't 404 if it ever changes path.
  const anyRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "$",
    component: SiteFooter,
  });

  const router = createRouter({
    routeTree: rootRoute.addChildren([footerRoute, anyRoute]),
    history: createMemoryHistory({ initialEntries: [initialPath] }),
  });

  render(<RouterProvider router={router} />);
  return router;
}

describe("Footer language switcher", () => {
  it("exposes the three Chinese variants with distinct locale codes", () => {
    const codes = LANGUAGES.map((l) => l.code);
    expect(codes).toContain("zh-cn");
    expect(codes).toContain("zh-hk");
    expect(codes).toContain("zh-tw");

    const labelFor = (code: string) => LANGUAGES.find((l) => l.code === code)?.label;
    expect(labelFor("zh-cn")).toBe("简体中文");
    expect(labelFor("zh-hk")).toBe("繁體中文（香港）");
    expect(labelFor("zh-tw")).toBe("繁體中文（台灣）");
  });

  it.each([
    { code: "zh-cn", label: "简体中文" },
    { code: "zh-hk", label: "繁體中文（香港）" },
    { code: "zh-tw", label: "繁體中文（台灣）" },
  ])("routes to ?lang=$code when clicking $label", async ({ code, label }) => {
    const router = renderFooterWithRouter("/");
    const user = userEvent.setup();

    const link = await screen.findByTestId(`lang-${code}`);
    expect(link).toHaveTextContent(label);
    expect(link).toHaveAttribute("hreflang", code);
    // The rendered href should already encode the target search param.
    expect(link.getAttribute("href")).toMatch(
      new RegExp(`[?&]lang=${code.replace("-", "-")}(?:$|&)`),
    );

    await user.click(link);

    expect(router.state.location.search).toMatchObject({ lang: code });
    expect(router.state.location.searchStr).toContain(`lang=${code}`);
  });

  it("preserves the current pathname when switching language", async () => {
    const router = renderFooterWithRouter("/hotels");
    const user = userEvent.setup();

    await user.click(await screen.findByTestId("lang-zh-hk"));
    expect(router.state.location.pathname).toBe("/hotels");
    expect(router.state.location.search).toMatchObject({ lang: "zh-hk" });

    await user.click(await screen.findByTestId("lang-zh-tw"));
    expect(router.state.location.pathname).toBe("/hotels");
    expect(router.state.location.search).toMatchObject({ lang: "zh-tw" });
  });

  it("merges lang into existing search params without dropping them", async () => {
    const router = renderFooterWithRouter("/?ref=newsletter");
    const user = userEvent.setup();

    await user.click(await screen.findByTestId("lang-zh-cn"));
    expect(router.state.location.search).toMatchObject({
      ref: "newsletter",
      lang: "zh-cn",
    });
  });
});
