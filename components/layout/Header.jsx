import Link from "next/link";
import DarkModeBtn from "/components/buttons/DarkMode";
import LanguagesBtn from "/components/buttons/Languages";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "/utils/context/GlobalContext";
import { BsArrowRight } from "react-icons/bs";
import MobilMenu from "/components/layout/MobilMenu";

export default function Header() {
  const { hamburgerMenuIsOpen, setHamburgerMenuIsOpen } = useGlobalContext();

  return (
    <>
      {hamburgerMenuIsOpen && <MobilMenu />}
      <header className="flex items-end justify-between mx-6 mt-10 xl:mx-0">
        <Link
          href="/"
          className="text-4xl dark:text-[#da5758] text-[#73b6be] font-satisfy"
        >
          My portfolio
        </Link>
        <div className="flex items-center text-xl ">
          <div className="flex flex-row items-center gap-4">
            <DarkModeBtn />
            <LanguagesBtn />
          </div>
          {/* <Link
            href="https://aliceout.work"
            target="_blank"
            className="flex flex-row items-center justify-between px-4 py-2 hover:bg-primary/20 dark:bg-slate-900/80 gap-x-4 rounded-2xl bg-white/80 dark:hover:bg-secondary/40 group text-slate-600 hover:text-slate-700 dark:text-slate-300 ring-gray-200 ring-1 hover:ring-primary/40 dark:ring-gray-600 dark:hover:ring-secondary/50"
          >
            <p className="text-sm">Consulter le CV</p>
            <BsArrowRight className="text-xs" />
          </Link> */}
          <GiHamburgerMenu
            className="text-gray-400 md:hidden"
            onClick={() => setHamburgerMenuIsOpen(!hamburgerMenuIsOpen)}
          />
        </div>
      </header>
    </>
  );
}
