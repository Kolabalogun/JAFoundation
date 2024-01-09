import { Link } from "react-router-dom";
import aboutImg from "../../../assets/img.jpg";
import { useGlobalContext } from "../../../context/useGlobalContext";

const About = () => {
  const { homePageContent } = useGlobalContext();
  return (
    <section className="bg-[#996AA0] relative aboutbg" id="about">
      <div className="h-full w-full bg-[#000000c4] absolute top-0 left-0 "></div>
      <div className="center relative py-16 md:py-40 px-5 sm:px-10   grid grid-cols-1 xl:grid-cols-2 xl:gap-0 gap-16 ">
        <div className="flex flex-col xl:mr-16">
          <h1 className="text-white text-3xl md:text-[45px] md:leading-[52px] leading-[36px] font-semibold ">
            {homePageContent?.aboutTitle}
          </h1>
          <div className="h-[2px] w-3/4 my-7 bg-[#fff]"></div>

          <p
            className=" text-white text-sm font-medium leading-7"
            dangerouslySetInnerHTML={{
              __html: `${homePageContent?.aboutCaption.substring(0, 350)}...`,
            }}
          />

          <Link to={"/about"}>
            <button className="bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] py-4 px-8 rounded-full font-semibold w-48  text-white mt-10">
              Read More
            </button>
          </Link>
        </div>
        <div className=" xl:mt-0 mt-16">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
