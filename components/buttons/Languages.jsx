import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsTranslate } from "react-icons/bs";
import { CircleFlag } from "react-circle-flags";

export default function LanguagesSwitcher() {
  const [flagsMenuIsOpen, setFlagsMenuIsOpen] = useState(false);
  const { t, i18n } = useTranslation("buttons");

  const changeLanguage = async (lng) => {
    await i18n.changeLanguage(lng); // i18n.changeLanguage retourne une Promise
  };

  const languages = [
    {
      title: "French",
      value: "fr",
      flag: "fr",
      srOnlyTransKey : "fr"
    },
    {
      title: "English",
      value: "en",
      flag: "uk",
      srOnlyTransKey : "en"
    },
  ];

  return (
    <>
      <button
        type="button"
        className="flex p-2 duration-300 bg-white rounded-full cursor-pointer dark:bg-slate-900/90 dark:text-white"
        onClick={() => setFlagsMenuIsOpen(!flagsMenuIsOpen)}
      >
        <BsTranslate className="" />
        <span class="sr-only">{t("translate")}</span>
      </button>
      <div
        className={`relative inline-flex flex-col top-14 -left-10 gap-y-4 transition duration-400 transform ease-in z-20 ${
          flagsMenuIsOpen ? "opacity-100" : "opacity-0"
        } `}
      >
        {languages.map((language) => (
          <div
            key={language.title}
            className="h-5 transition transform rounded-full cursor-pointer hover:opacity-70 duration-400 "
          >
            <CircleFlag
              countryCode={language.flag}
              className="h-5 "
              onClick={() => {
                setFlagsMenuIsOpen(false);
                changeLanguage(language.value);
              }}
            />
            <span class="sr-only">{t(language.srOnlyTransKey)}</span>
          </div>
        ))}
      </div>
    </>
  );
}
