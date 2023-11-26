import { useTranslation } from "react-i18next";
import Image from "next/image";
import ProfilPicture from "/components/images/ProfilPicture";
import SideLink from "/components/links/SideLink";

export default function AboutMe() {
  const { t } = useTranslation("aboutMe");

  return (
    <div className="flex flex-col items-center justify-center px-2">
      <div className="flex flex-col items-center w-full gap-5 px-4 shadow-lg md:w-4/6 lg:w-3/6 bg-white/90 dark:bg-black/80 rounded-xl ">
        <div className="flex flex-col items-center justify-center -mt-20">
          <Image
            src="/images/profil-picture/color.jpg"
            alt="Profil picture"
            width={125}
            height={125}
            className="rounded-full drop-shadow-xl dark:grayscale"
          />
        </div>
        <div className="flex flex-col gap-1 text-center">
          <p className="text-2xl font-semibold text-slate-700 dark:text-slate-300">
            Alice Aussel-Delamaide
          </p>
          <p className="font-medium text-md text-slate-600 dark:text-slate-400">{t("fonction")}</p>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col mb-4">
            <SideLink />
          </div>
        </div>
      </div>
    </div>
  );
}
