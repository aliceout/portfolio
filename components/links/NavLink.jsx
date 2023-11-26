import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useIcons } from "/utils/context/IconsContext";

export default function NavLink({ item }) {
  const { t } = useTranslation("navbar");
  const ReactIcons = useIcons();
  const IconComponent = ReactIcons[item.icon];

  return (
    <Link
      href={item.href}
      className="flex flex-row items-center justify-center gap-4 p-3 duration-300 rounded-lg bg-gray-100/60 hover:text-slate-500 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-dark-gradient hover:bg-light-gradient"
    >
      <IconComponent />
      <p className="text-xs">{t(item.nameTransKey)}</p>
    </Link>
  );
}
