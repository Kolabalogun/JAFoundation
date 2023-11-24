const Poster = () => {
  return (
    <section className="posterbg h-[60vh] flexallcenter flex-col text-center relative">
      <div className="h-full w-full bg-[#000000b6] absolute top-0 left-0 "></div>

      <div className="flexallcenter flex-col relative text-white">
        <p className="font-semibold">JA FOUNDATION</p>

        <h1 className="postertxt mt-3">
          The Smallest Act of Kindness is Worth More <br /> Than the Grandest
          Intention
        </h1>

        <div className="flex mt-16 gap-12">
          <button className="bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] py-4 px-8 rounded-full font-semibold w-48  text-white">
            Donate Now
          </button>

          <button className=" border-[#b71a88] border-[2px] py-4 px-8 rounded-full font-semibold w-48  text-white">
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Poster;
