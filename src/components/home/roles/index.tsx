import React, { useState } from "react";
import content, { contentType } from "./content";

const Roles: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="center  flex flex-1 flex-col xl:flex-row justify-between items-center  py-40 mt-24 gap-16 px-5 sm:px-10 ">
      {content.map((content: contentType, index: number) => (
        <div
          key={content.id}
          className={`${
            content.id !== 0
              ? "bg-[#ecf2f5] text-[#262626] hover:text-white hover:bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] "
              : "bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] text-white"
          } flex-1 flex flex-col gap-5 max-w-lg xl:w-full items-center text-center cursor-pointer p-12 rounded-3xl`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div>
            <img
              src={
                content.id === 0
                  ? content.img
                  : hoveredIndex === index
                  ? content.img
                  : content.img2
              }
              alt=""
            />
          </div>

          <h2 className="font-semibold text-2xl">{content.title}</h2>
          <p className="font-medium text-sm">{content.txt}</p>
        </div>
      ))}
    </section>
  );
};

export default Roles;
