import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Header from "../../common/header";
import { useGlobalContext } from "../../../context/useGlobalContext";

const Hero = () => {
  const { homePageContent } = useGlobalContext();
  return (
    <section className="h-screen " id="home">
      <Header />

      <div className="relative text-white h-full herobg pt-5 sm:pt-0 ">
        <div className="h-full w-full bg-[#000000b6] absolute top-0 left-0 "></div>

        <div className="relative px-5 sm:px-10   h-full flex flex-col justify-center center">
          <div className="flex flex-col gap-4 md:gap-0">
            <h1 className=" text-5xl md:text-[59px] md:font-bold font-semibold leading-[46px] md:leading-[85px]  ">
              Empowering <br className="md:hidden" />
              <span className=" font-medium md:font-bold md:not-italic">
                Lives
              </span>
              .
            </h1>
            <h1 className="text-5xl md:text-[59px] md:font-bold font-semibold leading-[46px] md:leading-[85px]  ">
              Alleviating 
              <br className="md:hidden" />
              <span className=" font-medium md:font-bold md:not-italic ">
                Poverty
              </span>
              .
            </h1>
          </div>
          <div className="mt-5">
            <p
              className="md:text-base text-sm font-medium leading-6"
              dangerouslySetInnerHTML={{
                __html: `${homePageContent?.heroCaption}`,
              }}
            />
          </div>

          <div className="flex md:flex-row flex-col my-16 gap-6 md:gap-12 ">
            <RouterLink to="/donations">
              <button className="bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] py-4 px-8 rounded-full font-semibold w-48  text-white">
                Donate Now
              </button>
            </RouterLink>
            <Link
              to={"about"}
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
            >
              <button className=" border-[#b71a88] border-[2px] py-4 px-8 rounded-full font-semibold w-48  text-white">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
