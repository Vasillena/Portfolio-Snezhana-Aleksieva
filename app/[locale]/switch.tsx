"use client";

import { useChangeLocale, useCurrentLocale } from "../../locales/client";

import { cn } from "@/lib/utils";
import { oranienbaum } from "@/lib/fonts";

export function Switch() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <>
      <button
        className={cn(
          "fixed bottom-0 right-8 w-10 sm:w-[50px] py-2 sm:py-4 rounded-t-full drop-shadow-sm text-xl bg-[#EFEAE4]",
          oranienbaum.className,
          locale === "en" && "hidden"
        )}
        type="button"
        onClick={() => changeLocale("en")}
      >
        EN
      </button>
      <button
        className={cn(
          "fixed bottom-0 right-8 w-10 sm:w-[50px] py-2 sm:py-4 rounded-t-full drop-shadow-sm text-xl bg-[#EFEAE4]",
          oranienbaum.className,
          locale === "bg" && "hidden"
        )}
        type="button"
        onClick={() => changeLocale("bg")}
      >
        BG
      </button>
    </>
  );
}
