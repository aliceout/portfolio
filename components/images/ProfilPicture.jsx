import ThemedImage from "/components/images/ThemedImage";

export default function ProfilPicture() {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:hidden">
        <ThemedImage
          lightImage="/images/profil-picture/color.jpg"
          darkImage="/images/profil-picture/bw.jpg"
          alt="Profil picture"
          width={125}
          height={125}
          className="rounded-full drop-shadow-xl"
        />
      </div>
      <div className="flex-col items-center justify-center hidden md:flex -mt-36">
        <ThemedImage
          lightImage="/images/profil-picture/color.jpg"
          darkImage="/images/profil-picture/bw.jpg"
          alt="Profil picture"
          width={200}
          height={200}
          className="rounded-full drop-shadow-xl"
        />
      </div>
    </>
  );
}
