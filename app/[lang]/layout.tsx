import "./global.css";
import { i18n, type Locale } from "../../i18n-config";
import {
  Edu_VIC_WA_NT_Beginner,
  Inter,
  Noto_Sans_TC,
  Roboto,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const enFont = Edu_VIC_WA_NT_Beginner({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-en",
});

const noto_sans_tc = Noto_Sans_TC({
  weight: ["400"],
  style: ["normal"],
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-noto-sans-tc",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html
      lang={params.lang}
      className={`${enFont.variable} ${inter.variable} ${noto_sans_tc.variable}
      ${params.lang === "zh-TW" ? "font-sans-tw" : "font-sans"}
      `}
    >
      <body className="p-10">{children}</body>
    </html>
  );
}

export const metadata = {
  title: "i18n within app directory - Vercel Examples",
  description: "How to do i18n in Next.js 13 within app directory",
};
