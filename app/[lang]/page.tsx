import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Counter from "./components/counter";
import LocaleSwitcher from "./components/locale-switcher";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <LocaleSwitcher />
      <p className="text-slate-500 text-xs mt-4">{dictionary.welcome}</p>
      <h1 className="text-2xl font-semibold text-blue-400">
        {dictionary.title.heading}
      </h1>
      <p>{dictionary.title.subtitle}</p>
      <p className="text-slate-500 text-xs mt-4">
        {dictionary.currentlocale}{" "}
        <span className="bg-slate-300 rounded-full p-0.5 px-2 text-slate-500">
          {dictionary.lang}
        </span>
      </p>
    </div>
  );
}
