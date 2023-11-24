import Header from "../../common/header";

const Hero = () => {
  return (
    <section className="h-screen " id="home">
      <Header />

      <div className="relative text-white h-full herobg  ">
        <div className="h-full w-full bg-[#000000b6] absolute top-0 left-0 "></div>

        <div className="relative  h-full flex flex-col justify-center center">
          <div className="">
            <h1 className="">Empowering Lives.</h1>
            <h1 className="">Eradicating Poverty</h1>
          </div>
          <div className="mt-5">
            <p className="text-base font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum eligendi porro <br /> alias exercitationem odit nulla
              commodi.
            </p>
          </div>

          <div className="flex my-16 gap-12">
            <button className="bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] py-4 px-8 rounded-full font-semibold w-48  text-white">
              Donate Now
            </button>

            <button className=" border-[#b71a88] border-[2px] py-4 px-8 rounded-full font-semibold w-48  text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
