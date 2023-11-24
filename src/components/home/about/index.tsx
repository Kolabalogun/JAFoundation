import aboutImg from "../../../assets/img.jpg";

const About = () => {
  return (
    <section className="bg-[#996AA0] relative aboutbg" id="about">
      <div className="h-full w-full bg-[#000000c4] absolute top-0 left-0 "></div>
      <div className="center relative py-16 md:py-40 px-5 sm:px-10 xl:px-0  grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col mr-16">
          <h1 className="text-white text-3xl md:text-[45px] md:leading-[52px] leading-[36px] font-semibold ">
            Welcome to Our Foundation
          </h1>
          <div className="h-[2px] w-3/4 my-7 bg-[#fff]"></div>

          <p className=" text-white text-sm font-medium leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ipsam hic nulla soluta libero est adipisci, asperiores ex amet id,
            saepe numquam accusamus porro vero sed magni, repellendus iste error
            nobis corrupti atque tempore aut cupiditate labore. Tempora, eaque
            cum similique ex eveniet ipsum ea voluptate fugiat. Accusantium,
            doloribus quae.
          </p>

          <button className="bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] py-4 px-8 rounded-full font-semibold w-48  text-white mt-10">
            Read More
          </button>
        </div>
        <div className=" mt-5 md:mt-0">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
