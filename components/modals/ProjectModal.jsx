import Image from "next/image";
import { useTranslation } from "react-i18next";

import ModalBase from "/components/Modals//ModalBase";
import { useIcons } from "/utils/context/IconsContext";
import { filterDataByLanguage } from "/utils/tools/languages";

// function removeHttps(url) {
//   return url.replace("https://", "");
// }

export default function ProjectModal({ project, isOpenModal, setIsOpenModal }) {
  const ReactIcons = useIcons();
  const SlClose = ReactIcons["SlClose"];
  const { t, i18n } = useTranslation("pages");

  const tableItems = [
    {
      icon: "BsPersonCircle",
      title: "Client :",
      value: filterDataByLanguage(project.client, i18n.language),
    },
    {
      icon: "BiSolidCategory",
      title: "Catégories :",
      value: project.categories,
    },
    {
      icon: "FaRegCalendarAlt",
      title: "Année du projet :",
      value: project.date,
    },
    { icon: "IoIosCode", title: "Outils :", value: project.languages },
    // { icon: "GrOverview", title: "Aperçu :", value: removeHttps(project.url) },
  ];

  const table = tableItems.map((item) => {
    const IconComponent = ReactIcons[item.icon];
    return (
      <li key={item.title} className="flex items-center gap-x-3">
        <IconComponent className="text-lg font-semibold text-slate-900 dark:text-slate-300" />
        <span className="flex font-medium">
          {item.title} &nbsp;
          <span className="font-semibold">{item.value}</span>
        </span>
      </li>
    );
  });

  return (
    <ModalBase isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
      <span className="flex justify-end mb-2 text-4xl text-white -mt-14 -mr-14 ">
        <button
          type="button"
          onClick={() => setIsOpenModal(false)}
          className="duration-200 hover:rotate-45 focus:outline-none"
        >
          <SlClose className="" />
        </button>
      </span>
      <div className="flex flex-col flex-1 p-4 gap-y-6">
        <div>
          <p className="text-2xl font-bold text-center uppercase text-primary dark:text-secondary">
            {project.title}
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-lg text-slate-900 dark:text-slate-300">
          {table}
        </ul>
        <div>
          <p className="text-slate-900 dark:text-slate-300">
            {filterDataByLanguage(project.description, i18n.language)}
          </p>
        </div>
        <div className="flex justify-center w-full min-w-full rounded-xl">
          <Image
            src={project.picture}
            width={1000}
            height={1000}
            className="rounded-xl"
            alt={project.title}
          />
        </div>
      </div>
    </ModalBase>
  );
}
