import { IoCloseSharp } from "react-icons/io5";
import MobileLink from "/components/links/MobileLink";
import MobileContact from "/components/contacts/MobileContact";
import { useGlobalContext } from "/utils/context/GlobalContext";

export default function MobilMenu() {
  const { setHamburgerMenuIsOpen } = useGlobalContext();

  return (
    <div
      id="menu-links"
      onClick={() => setHamburgerMenuIsOpen(false)}
      className="absolute top-0 right-0 z-40 w-full min-h-screen transition duration-700 bg-gray-400/50 dark:bg-gray-500/40 "
    >
      <div className="absolute top-0 right-0 z-50 flex flex-col items-start justify-start w-9/12 h-full my-auto bg-white dark:bg-gray-900 drop-shadow-xl gap-y-10">
        <div className="flex flex-row items-center justify-between w-10/12 mx-8 mt-12">
          <p className="text-2xl font-semibold dark:text-gray-200">Menu</p>
          <IoCloseSharp
            className="text-2xl"
            onClick={() => setHamburgerMenuIsOpen(false)}
          />
        </div>
        <MobileLink />
        <MobileContact />
      </div>
    </div>
  );
}
