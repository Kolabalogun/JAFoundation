import img from "../../../assets/img.jpg";
import img2 from "../../../assets/img2.jpg";

const Quote = () => {
  return (
    <section className="center py-40 grid grid-cols-2 gap-10">
      <div className="flex flex-col mr-10">
        <h1 className="text-[#262626] text-3xl md:text-[40px] md:leading-[52px] leading-[36px] font-semibold ">
          We love to help all the children that have problems in the world.
        </h1>
        <div className="h-[3px] w-1/3  my-7  bg-[#b71a88]"></div>

        <p className=" text-[#262626] text-sm font-medium leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          ipsam hic nulla soluta libero est adipisci, asperiores ex amet id
          quae.
        </p>
      </div>

      <div className="flex gap-6">
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
