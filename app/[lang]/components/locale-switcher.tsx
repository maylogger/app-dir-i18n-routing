"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="text-xs">
      <p>Locale switcher:</p>
      <ul className="list-disc">
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link
                className="text-sky-500 underline"
                href={redirectedPathName(locale)}
              >
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
