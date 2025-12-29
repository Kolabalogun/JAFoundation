import React, { useState } from "react";
import { useGlobalContext } from "../../../context/useGlobalContext";
import { Rocket, Lightbulb, TrendingUp } from "lucide-react";

const Roles: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { homePageContent } = useGlobalContext();

  const icons = [Rocket, Lightbulb, TrendingUp];

  return (
    <section className="center flex flex-1 flex-col xl:flex-row justify-between items-stretch py-20 sm:py-40 mt-24 gap-8 px-5 sm:px-10">
      {[
        {
          caption: homePageContent?.serviceICaption,
          title: homePageContent?.serviceITitle,
        },
        {
          caption: homePageContent?.serviceIICaption,
          title: homePageContent?.serviceIITitle,
        },
        {
          caption: homePageContent?.serviceIIICaption,
          title: homePageContent?.serviceIIITitle,
        },
      ].map((content, index) => {
        const Icon = icons[index];
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              flex-1 flex flex-col gap-6 max-w-lg xl:w-full
              items-center text-center cursor-pointer
              p-10 rounded-2xl transition-all duration-300
              transform hover:scale-105
              ${
                index === 0
                  ? "bg-gradient-to-br from-[#ef2f96] via-[#b71a88] to-[#800579] text-white shadow-xl"
                  : isHovered
                  ? "bg-gradient-to-br from-[#ef2f96] via-[#b71a88] to-[#800579] text-white shadow-2xl"
                  : "bg-white text-[#1a1a1a] shadow-lg border border-gray-100"
              }
            `}
          >
            {/* Icon */}
            <div
              className={`
                w-20 h-20 flex items-center justify-center
                rounded-full transition-all duration-300
                ${isHovered || index === 0 ? "bg-white/20" : "bg-gradient-to-br from-pink-50 to-purple-50"}
              `}
            >
              <Icon className="w-10 h-10 text-current" strokeWidth={2} />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-2xl leading-tight">
                {content.title}
              </h2>
              <p className="font-normal text-base leading-relaxed opacity-90">
                {content.caption}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Roles;
