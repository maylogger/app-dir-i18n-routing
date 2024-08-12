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
      <p>{dictionary.welcome}</p>
      <h1 className="text-2xl">{dictionary.title.heading}</h1>
      <p>{dictionary.title.subtitle}</p>
      <p>
        {dictionary.currentlocale} {lang}
      </p>
    </div>
  );
}
