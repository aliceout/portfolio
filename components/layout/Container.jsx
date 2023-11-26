import Image from "next/image";

export default function Container({ children }) {

  return (
    <div
      id="viewport"
      className="flex w-screen h-screen min-h-screen overflow-auto duration-300 bg-center bg-cover min-w-screen"
    >
      <Image
        width={3840}
        height={2160}
        src="/images/background/bg.svg"
        alt="Description alternative"
        className="absolute -z-[100] bg-white dark:bg-slate-900 object-cover h-screen w-screen duration-300"
      />
      <div
        id="container"
        className="flex flex-col h-full w-full bg-transparent min-w-screen md:w-[900px] lg:w-[1200px] xl:w-[1300px] mx-auto  select-none"
      >
        {children}
      </div>
    </div>
  );
}
