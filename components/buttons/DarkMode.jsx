import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("buttons");

  useEffect(() => {
    const checkTheme = () => {
      const colorScheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(colorScheme);
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", checkTheme);

    // Appelez la fonction checkTheme au chargement de la page
    checkTheme();

    return () => {
      // Nettoyez le listener lorsque le composant est démonté
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", checkTheme);
    };
  }, [setTheme]);

  return (
    <>
      {theme === "dark" ? (
        <button
          type="button"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="flex p-2 duration-300 rounded-full bg-slate-900/70"
        >
          <BsFillMoonStarsFill className="text-yellow-100" />
          <span className="sr-only">{t("lightMode")}</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="flex p-2 duration-300 bg-white rounded-full"
        >
          <MdSunny className="text-yellow-400 " />
          <span className="sr-only">{t("darkMode")}</span>
        </button>
      )}
    </>
  );
}
