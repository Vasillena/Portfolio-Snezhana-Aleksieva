import { createSharedPathnamesNavigation } from "next-intl/navigation";

const locales = ["en", "bg"];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
