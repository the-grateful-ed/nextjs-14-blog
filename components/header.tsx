import React from "react";
import Image from "next/image";
interface Props {
  title: string | "";
}

const Header = ({ title = "" }: Props) => {
  return (
    <header>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          position: "relative",
          paddingBottom: "75%",
          height: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        }}
      >
        <Image
          src="https://tecdn.b-cdn.net/img/new/slides/146.webp"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
          className="opacity-50 rounded-t-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-6 text-5xl font-bold">{title}</h1>
              <h3 className="mb-8 text-3xl font-bold">Subheading</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
