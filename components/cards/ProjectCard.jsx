import { useTranslation } from "react-i18next";
import Image from "next/image";
import { filterDataByLanguage } from "/utils/tools/languages";
import languagesColors from "/data/languagesColor.js";

export default function ProjectCard({ project }) {
  const { t, i18n } = useTranslation("pages");

  return (
    <article
      key={project.id}
      className="flex flex-col justify-between duration-300 drop-shadow-md bg-white/90 dark:bg-black/80 rounded-xl"
    >
      <section className="flex items-center justify-center overflow-hidden rounded-t-lg rounded-x-lg">
        <div className="relative px-10 py-5 duration-300 w-450 h-300 hover:scale-125 group ">
          <Image
            src={project.picture}
            alt={project.title}
            width={450}
            height={300}
            className="transition duration-700 ease-in-out rounded-md shadow-lg dark:brightness-75 dark:hover:brightness-100 hover:rounded-none"
          />
        </div>
      </section>
      <section className="flex flex-col justify-between p-4 pb-2 duration-300 rounded-b-xl gap-y-4 bg-white/90 dark:bg-black/90 ">
        <h2 className="font-semibold text-slate-700 dark:text-gray-300">
          {project.title} -{" "}
          {filterDataByLanguage(project.client, i18n.language)}
        </h2>
        <div className="flex flex-row items-center justify-between">
          <p className="flex flex-row items-center gap-2 font-semibold text-gray-400 uppercase">
            {project.languages.map((language) => (
              <span
                key={language}
                className="opacity-80"
                style={{ color: languagesColors[language] || "black" }}
              >
                {language}{" "}
              </span>
            ))}
          </p>
          <p className="text-sm font-medium uppercase text-secondary/90">
            {project.categories}
          </p>
        </div>
      </section>
    </article>
  );
}
