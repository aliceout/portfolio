import Image from "next/image";
import { useTheme } from "next-themes";

function ThemedImage({ darkImage, lightImage, alt, width, height, className }) {
  const { theme } = useTheme();
  let src;

  switch (theme) {
    case "light":
      src =  lightImage ;
      break;
    case "dark":
      src =  darkImage ;
      break;
    default:
      src = lightImage;
      break;
  }

  return <Image src={src} width={width} height={height} alt={alt} className={className} />;
}

export default ThemedImage;
