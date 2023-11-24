import { event, featuredEvent } from "./events";

import Ads from "../../../assets/ads.jpg";

const Events = () => {
  return (
    <section className="center py-40 grid grid-cols-2 gap-10">
      <div className="flex flex-col mr-16">
        <h1 className="text-[#262626] text-3xl md:text-[38px] font-semibold ">
          Events
        </h1>
        <div className="h-[3px] w-1/3  mt-7 mb-12 bg-[#b71a88]"></div>

        <div className="flex flex-col gap-5">
          {event.map((event) => (
            <div key={event.id} className="flex gap-8">
              <div className="h-32 w-64">
                <img
                  src={event.img}
                  alt="filter"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex gap-3  flex-col">
                <div className="">
                  <p className="font-semibold text-lg">{event.title}</p>
                  <div className="flex gap-4 text-black mt-1 text-xs">
                    <span>{event.date}</span>
                    <span>{"|"}</span>
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-[#555555] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris tempus vestib ulum mauris.
                </p>

                <button className="text-[#b71a88] text-sm font-medium text-left ">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mr-16">
        <h1 className="text-[#262626] text-3xl md:text-[38px]  font-semibold ">
          Featured Cause
        </h1>
        <div className="h-[3px] w-1/3 mt-7 mb-12 bg-[#b71a88]"></div>

        <div className="bg-[#edf3f5] grid grid-cols-2 gap-8 py-12 px-6">
          <div className="h-80 border-[1px] border-[#b71a88]">
            <img src={Ads} alt="" className="h-full w-full object-cover" />
          </div>

          <div className="">
            {featuredEvent.map((event) => (
              <div className="flex justify-between  flex-col  h-full">
                <div className="flex flex-col gap-5">
                  <div className="">
                    <p className="font-semibold text-lg">{event.title}</p>
                    <div className="flex gap-4 text-black mt-1 text-xs">
                      <span>{event.date}</span>
                      <span>{"|"}</span>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-[#383838] text-sm font-medium leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris tempus vestib ulum mauris consectetur adipiscing
                    elit.
                  </p>
                </div>
                <button className="bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] py-4 px-8 rounded-full font-medium w-48  text-white">
                  Volunteer
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
