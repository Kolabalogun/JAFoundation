import img from "../../../assets/img.jpg";
import img2 from "../../../assets/img2.jpg";
import { useGlobalContext } from "../../../context/useGlobalContext";

const Quote = () => {
  const { homePageContent } = useGlobalContext();
  return (
    <section className="center py-40 grid grid-cols-1 xl:grid-cols-2 xl:gap-10 gap-[100px] px-5 sm:px-10 ">
      <div className="flex flex-col xl:mr-10">
        <h1 className="text-[#262626] text-3xl md:text-[40px] md:leading-[52px] leading-[36px] font-semibold ">
          {homePageContent?.posterQuote}
        </h1>
        <div className="h-[3px] w-1/3  my-7  bg-[#b71a88]"></div>

        <p className=" text-[#262626] text-sm font-medium leading-7">
          {homePageContent?.posterCaption}
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-6">
        <div className=" h-72 w-full">
          <img
            src={img}
            alt=""
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
        <div className=" h-72 w-full">
          <img
            src={img2}
            alt=""
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Quote;
