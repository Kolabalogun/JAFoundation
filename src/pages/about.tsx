import React, { useEffect } from "react";

import aboutImg from "../assets/img.jpg";

import Layout from "../components/container/layout";
import { PageTye, useGlobalContext } from "../context/useGlobalContext";

const About: React.FC = () => {
  const { setpageType } = useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
    setpageType(PageTye.about);
  }, []);

  return (
    <Layout bannerTitle="About Us">
      <>
        <section className=" relative ">
          <div className="center relative py-40 grid grid-cols-1 lg:grid-cols-2 px-5 sm:px-10  ">
            <div className="flex flex-col xl:mr-16">
              <h1 className=" text-3xl md:text-[45px] md:leading-[52px] leading-[36px] font-semibold ">
                Welcome to Our Foundation
              </h1>
              <div className="h-[3px] w-3/4 my-7 bg-[#b71a88]"></div>

              <p className="  text-sm font-medium leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente ipsam hic nulla soluta libero est adipisci, asperiores
                ex amet id, saepe numquam accusamus porro vero sed magni,
                repellendus iste error nobis corrupti atque tempore aut
                cupiditate labore. Tempora, eaque cum similique ex eveniet ipsum
                ea voluptate fugiat. Accusantium, doloribus quae. saepe numquam
                accusamus porro vero sed magni, repellendus iste error nobis
                corrupti atque tempore aut cupiditate labore. Tempora, eaque cum
                similique ex eveniet ipsum ea voluptate fugiat. Accusantium,
                doloribus quae.
              </p>
            </div>
            <div className=" mt-5 md:mt-0">
              <img src={aboutImg} alt="" />
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] py-36">
          <div className="center">
            <div className="flex lg:flex-row gap-16 lg:gap-0 flex-col justify-between items-center">
              <h1 className=" text-white lg:text-start text-center text-4xl font-semibold ">
                Join us, inspire change, foster kindness.
              </h1>

              <button className=" border-[#fff] border-[2px] py-4 px-8 rounded-full font-semibold w-48  text-white">
                Volunteer
              </button>
            </div>
          </div>
        </div>

        <section className="center py-40">
          <div className="   grid grid-cols-1 xl:grid-cols-2 ">
            <div className="flex flex-col xl:mr-16">
              <h1 className=" text-3xl xl:text-4xl font-semibold ">
                Our Mission
              </h1>
              <div className="h-[3px] w-1/4 my-7 bg-[#b71a88]"></div>

              <p className="  text-sm font-medium leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente ipsam hic nulla soluta libero est adipisci, asperiores
                ex amet id, saepe numquam accusamus porro vero sed magni,
                repellendus iste error nobis corrupti atque tempore aut
                cupiditate labore. Tempora, eaque cum similique ex eveniet ipsum
                ea voluptate fugiat. Accusantium, doloribus quae. saepe numquam
                accusamus porro vero sed magni, repellendus iste error nobis
                corrupti atque tempore aut cupiditate labore. Tempora, eaque cum
                similique ex eveniet ipsum ea voluptate fugiat. Accusantium,
                doloribus quae.
              </p>
            </div>
            <div className=" mt-5 md:mt-0">
              <img src={aboutImg} alt="" />
            </div>
          </div>
          <div className=" mt-36  grid grid-cols-1 lg:grid-cols-2 ">
            <div className=" xl:mr-16">
              <img src={aboutImg} alt="" />
            </div>
            <div className="flex flex-col mt-10 xl:mt-0 ">
              <h1 className=" text-3xl xl:text-4xl font-semibold ">
                Our Vision
              </h1>
              <div className="h-[3px] w-1/4 my-7 bg-[#b71a88]"></div>

              <p className="  text-sm font-medium leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente ipsam hic nulla soluta libero est adipisci, asperiores
                ex amet id, saepe numquam accusamus porro vero sed magni,
                repellendus iste error nobis corrupti atque tempore aut
                cupiditate labore. Tempora, eaque cum similique ex eveniet ipsum
                ea voluptate fugiat. Accusantium, doloribus quae. saepe numquam
                accusamus porro vero sed magni, repellendus iste error nobis
                corrupti atque tempore aut cupiditate labore. Tempora, eaque cum
                similique ex eveniet ipsum ea voluptate fugiat. Accusantium,
                doloribus quae.
              </p>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default About;
