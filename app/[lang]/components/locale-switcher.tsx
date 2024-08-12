"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../i18n-config";
import { type getDictionary } from "../../../get-dictionary";

export default function LocaleSwitcher({
  dictionary,
}: Readonly<{
  dictionary: Awaited<ReturnType<typeof getDictionary>>["lang"];
}>) {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>
                {dictionary.lang ? dictionary["lang"][`${locale}`] : "Error"}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
