import React, { useState } from "react";
import { useGlobalContext } from "../../../context/useGlobalContext";

const Roles: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { homePageContent } = useGlobalContext();

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="center  flex flex-1 flex-col xl:flex-row justify-between items-center py-20 sm:py-40 mt-24 gap-16 px-5 sm:px-10 ">
      {[
        {
          caption: homePageContent?.serviceICaption,
          title: homePageContent?.serviceITitle,
          image: homePageContent?.serviceIImage,
        },
        {
          caption: homePageContent?.serviceIICaption,
          title: homePageContent?.serviceIITitle,
          image:
            hoveredIndex === 1
              ? homePageContent?.serviceIIImageHover
              : homePageContent?.serviceIIImage,
        },
        {
          caption: homePageContent?.serviceIIICaption,
          title: homePageContent?.serviceIIITitle,
          image:
            hoveredIndex === 2
              ? homePageContent?.serviceIIIImageHover
              : homePageContent?.serviceIIIImage,
        },
      ].map((content, index: number) => (
        <div
          key={index}
          className={`${
            index !== 0
              ? "bg-[#ecf2f5] text-[#262626] hover:text-white hover:bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] "
              : "bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] text-white"
          } flex-1 flex flex-col gap-5 max-w-lg xl:w-full items-center text-center cursor-pointer p-12 rounded-3xl`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div>
            <img src={content.image} alt="" />
          </div>

          <h2 className="font-semibold text-2xl">{content.title}</h2>
          <p className="font-medium text-sm">{content.caption}</p>
        </div>
      ))}
    </section>
  );
};

export default Roles;
