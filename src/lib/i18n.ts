import { useRouterState } from "@tanstack/react-router";
import {
  dictionaries,
  LANG_CODES,
  type LangCode,
} from "./i18n-dictionaries";

export const DEFAULT_LANG: LangCode = "zh-cn";

function isLang(value: unknown): value is LangCode {
  return typeof value === "string" && (LANG_CODES as readonly string[]).includes(value);
}

export function useLang(): LangCode {
  return useRouterState({
    select: (state) => {
      const search = state.location.search as Record<string, unknown> | undefined;
      const raw = search?.lang;
      return isLang(raw) ? raw : DEFAULT_LANG;
    },
  });
}

export function useT() {
  const lang = useLang();
  return (key: string): string => {
    const value = dictionaries[lang]?.[key];
    if (value !== undefined) return value;
    const fallback = dictionaries.en[key];
    return fallback ?? key;
  };
}

export { LANG_CODES };
export type { LangCode };
