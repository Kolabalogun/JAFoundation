import { useEffect, useState } from "react";
import Logo from "../../../assets/logo.png";
// import useMediaQuery from "../../../hook/useMediaQuery";
import { NavLinks } from "./links";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/useGlobalContext";

const Header = () => {
  const { pageType } = useGlobalContext();

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [isAboveMediumScreens, setIsAboveMediumScreens] = useState<boolean>(
    window.innerWidth >= 1060
  );

  useEffect(() => {
    const handleResize = () => {
      setIsAboveMediumScreens(window.innerWidth >= 1060);
    };

    handleResize(); // Initialize state on mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="z-50 ">
      <div className="  center py-4 md:py-5 flex items-center justify-between px-5 sm:px-10 ">
        <a href="/" className="h-10 md:h-16">
          <img src={Logo} alt="Logo" className="h-full" />
        </a>
        {isAboveMediumScreens ? (
          <div>
            {NavLinks.map(({ title, link }, idx) => (
              <Link
                key={idx}
                to={link}
                className={`${
                  pageType === title.toLowerCase() &&
                  "border-b-[#b11a85] border-b-[2px]"
                } "text-base font-medium linked cursor-pointer py-3  mx-8 text-primary dark:text-primary  "`}
              >
                {title}
              </Link>
            ))}
          </div>
        ) : (
          <button
            className="rounded-full bg-secondary-500 p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="h-7 w-7 md:h-10 md:w-10 text-black" />
          </button>
        )}
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-[1001] h-full w-[300px] bg-[#eee] drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-7 w-7 md:h-10 md:w-10" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-5 flex flex-col gap-10 text-2xl">
            {NavLinks.map(({ title, link }, idx) => (
              <Link
                key={idx}
                to={link}
                className={
                  "text-base font-medium linked cursor-pointer py-2  mx-10 text-primary dark:text-primary  "
                }
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
