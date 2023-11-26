import { createContext, useContext } from "react";

import * as IoIcons from "react-icons/io";
import * as GrIcons from "react-icons/gr";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as Io5Icons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as SlIcons from "react-icons/sl";
import * as SiIcons from "react-icons/si";
import * as CiIcones from "react-icons/ci";
import * as PiIcons from "react-icons/pi";
import * as RiIcons from "react-icons/ri";

const IconsContext = createContext();

export function useIcons() {
  return useContext(IconsContext);
}

export function IconsProvider({ children }) {
  const allIcons = {
    ...IoIcons,
    ...GrIcons,
    ...BsIcons,
    ...FaIcons,
    ...Io5Icons,
    ...MdIcons,
    ...SlIcons,
    ...SiIcons,
    ...CiIcones,
    ...PiIcons,
    ...RiIcons,
  };

  return (
    <IconsContext.Provider value={allIcons}>{children}</IconsContext.Provider>
  );
}
