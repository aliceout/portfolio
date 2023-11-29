import Link from "next/link";
import Image from "next/image";
import { useIcons } from "/utils/context/IconsContext";
import { FaGithub } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import ModalBase from "./ModalBase";

export default function ProjectModal({
  project,
  isOpenModal,
  setIsOpenModal,
  currentLanguage,
}) {
  function changeUrlPreview(url) {
    if (url) {
      return url.replace("https://", "");
    }
    return "";
  }

  function changeUrlGithub(url) {
    if (url) {
      return url.replace("https://github.com/", "");
    }
    return "";
  }

  const ReactIcons = useIcons();
  const SlClose = ReactIcons["SlClose"];

  const tableInfosItems = [
    {
      icon: "BsPersonCircle",
      title: "Client :",
      value: project[currentLanguage].client,
    },
    {
      icon: "BiSolidCategory",
      title: "Catégories :",
      value: project[currentLanguage].categories,
    },
    {
      icon: "FaRegCalendarAlt",
      title: "Année du projet :",
      value: project.date,
    },
    { icon: "IoIosCode", title: "Outils :", value: project.languages },
  ];

  const tableInfos = tableInfosItems.map((item) => {
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
            {project[currentLanguage].title}
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-lg text-slate-900 dark:text-slate-300">
          {tableInfos}
          {project.repository && (
            <Link
              href={project.repository}
              className="flex items-center gap-x-3"
            >
              <FaGithub className="text-lg font-semibold text-slate-900 dark:text-slate-300" />
              <span className="flex font-medium">
                Github &nbsp;
                <span className="font-semibold">
                  {changeUrlGithub(project.repository)}
                </span>
              </span>
            </Link>
          )}
          {project.url && (
            <Link href={project.url} className="flex items-center gap-x-3">
              <GrOverview className="text-lg font-semibold text-slate-900 dark:text-slate-300" />
              <span className="flex font-medium">
                Aperçu &nbsp;
                <span className="font-semibold">
                  {changeUrlPreview(project.url)}
                </span>
              </span>
            </Link>
          )}
        </ul>
        <div>
          <p className="text-slate-900 dark:text-slate-300">
            {project[currentLanguage].description}
          </p>
        </div>
        <div className="flex justify-center w-full min-w-full rounded-xl">
          <Image
            src={project.picture}
            width={1000}
            height={1000}
            className="rounded-xl"
            alt={project[currentLanguage].title}
          />
        </div>
      </div>
    </ModalBase>
  );
}
