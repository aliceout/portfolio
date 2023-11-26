import Link from "next/link";
import { useTheme } from "next-themes";
import { useIcons } from "/utils/context/IconsContext";
import linksData from "/data/externalsLinks";

export default function SideLink() {
  const ReactIcons = useIcons();
  const { theme } = useTheme();

  const linksList = linksData.map((link) => {
    const IconComponent = ReactIcons[link.icon];

    return (
      <Link
        key={link.href}
        href={link.href}
        target="_blank"
        className="flex flex-row items-center px-6 py-2 text-sm font-bold transition duration-300 bg-white rounded-lg shadow-sm md:px-4 lg:px-8 dark:bg-gray-800/90 text-slate-900 dark:text-gray-100 ring-1 ring-gray-100 dark:ring-slate-800 hover:bg-gray-50/80 gap-x-2 dark:hover:bg-gray-700/90"
      >
        <IconComponent
          className="group-hover:text-white"
          style={
            theme === "dark"
              ? { color: link.darkColor }
              : { color: link.lightColor }
          }
        />
        <p className="text-slate-500 dark:text-gray-300">{link.name}</p>
      </Link>
    );
  });

  return <div className="flex flex-row justify-center gap-3 ml-6 ">{linksList}</div>;
}
