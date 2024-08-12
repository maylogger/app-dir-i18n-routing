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
      <h1 className="text-2xl">{dictionary.title.heading}</h1>
      <p>{dictionary.title.subtitle}</p>
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p>
      <Counter dictionary={dictionary.counter} />
    </div>
  );
}
