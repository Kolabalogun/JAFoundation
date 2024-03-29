import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/useGlobalContext";
import { Events as EventType } from "../../../utils/types";

const Events = () => {
  const { eventsFromDB, homePageContent, aboutPageContent } =
    useGlobalContext();
  return (
    <section className="center py-20 sm:py-40  grid grid-cols-1 xl:grid-cols-2 xl:gap-10 gap-[100px] px-5 sm:px-10 ">
      <div className="flex flex-col xl:mr-16">
        <h1 className="text-[#262626] text-3xl md:text-[38px] font-semibold ">
          Events
        </h1>
        <div className="h-[3px] w-48 xl:w-1/3  mt-7 mb-12 bg-[#b71a88]"></div>

        <div className="flex  flex-col sm:gap-5 gap-8">
          {eventsFromDB?.map((event: EventType) => (
            <div key={event?.id} className="flex flex-col sm:flex-row gap-8">
              <div className=" ">
                <div
                  className="w-full sm:w-32 h-full sm:h-32
                "
                >
                  <img
                    src={event?.image}
                    alt="filter"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex gap-3   flex-col">
                <div className="">
                  <p className="font-semibold text-lg">{event?.title}</p>
                  <div className="flex gap-4 text-black mt-1 text-xs">
                    <span>{event?.date}</span>
                    <span>{"|"}</span>
                    <span>{event?.location}</span>
                  </div>
                </div>

                <p
                  className="text-[#555555] text-sm"
                  dangerouslySetInnerHTML={{
                    __html: `${event?.caption.substring(0, 100)}...`,
                  }}
                />

                <Link to={`/event/${event.id}`}>
                  <button className="text-[#b71a88] text-sm font-medium text-left ">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col ">
        <h1 className="text-[#262626] text-3xl md:text-[38px]  font-semibold ">
          Featured Cause
        </h1>
        <div className="h-[3px] w-48 xl:w-1/3 mt-7 mb-12 bg-[#b71a88]"></div>

        <div className="bg-[#edf3f5] grid md:grid-cols-2 gap-8 py-12 px-6">
          <div className="xl:h-80  border-[1px] border-[#b71a88]">
            <img
              src={homePageContent?.featuredCauseImg}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="">
            <div className="flex justify-between  flex-col  h-full">
              <div className="flex flex-col gap-5">
                <div className="">
                  <p className="font-semibold text-lg">
                    {homePageContent?.featuredCauseTitle}
                  </p>
                  <div className="flex gap-4 text-black mt-1 text-xs">
                    <span>{homePageContent?.featuredCauseDate}</span>
                    <span>{"|"}</span>
                    <span>{homePageContent?.featuredCauseLocation}</span>
                  </div>
                </div>

                <p className="text-[#383838] text-sm font-medium leading-6">
                  {homePageContent?.featuredCauseCaption &&
                  homePageContent?.featuredCauseCaption?.length > 200
                    ? homePageContent?.featuredCauseCaption?.substring(0, 200) +
                      "..."
                    : homePageContent?.featuredCauseCaption}
                </p>
              </div>
              <a href={aboutPageContent?.posterVolunteerLink} target="_blank">
                <button className="bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] py-4 px-8 rounded-full font-medium xl:w-48  text-white mt-7 xl:mt-0 ">
                  Volunteer
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
