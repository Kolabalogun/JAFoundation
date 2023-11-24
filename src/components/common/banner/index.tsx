import React from "react";

type BannerType = {
  bannerTitle: string;
};

const Banner: React.FC<BannerType> = ({ bannerTitle }) => {
  return (
    <section className="bannerbg     relative">
      <div className="h-full w-full bg-[#000000b6] absolute top-0 left-0 "></div>

      <div className="center ">
        <div className="flex flex-col py-32 relative ">
          <h1 className="text-white text-4xl   font-semibold ">
            {bannerTitle}
          </h1>
          <div className="h-[3px] w-28 my-7 bg-[#b71a88]"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
