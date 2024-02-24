import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/useGlobalContext";

const Poster = () => {
  const { homePageContent, aboutPageContent } = useGlobalContext();

  return (
    <section className="posterbg min-h-[60vh] flexallcenter flex-col text-center relative px-5 sm:px-10  py-32 xl:py-0">
      <div className="h-full w-full bg-[#000000b6] absolute top-0 left-0 "></div>

      <div className="flexallcenter  flex-col relative text-white">
        <p className="font-semibold">JA FOUNDATION</p>

        <h1
          className="postertxt text-5xl leading-[62px] xl:text-[59px]  mt-7 xl:leading-normal xl:mt-3"
          dangerouslySetInnerHTML={{
            __html: `${homePageContent?.quoteTxt}`,
          }}
        />

        <div className="flex md:flex-row flex-col mt-16 gap-6 xl:gap-12">
          <Link to="/donations">
            <button className="bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] py-4 px-8 rounded-full font-semibold w-48  text-white">
              Donate Now
            </button>
          </Link>
          <a href={aboutPageContent?.posterVolunteerLink} target="_blank">
            <button className=" border-[#b71a88] border-[2px] py-4 px-8 rounded-full font-semibold w-48  text-white">
              Join Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Poster;
