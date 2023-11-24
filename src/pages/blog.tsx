import React, { useEffect } from "react";
import Layout from "../components/container/layout";
import { Link } from "react-router-dom";

import aboutImg from "../assets/img.jpg";
import { PageTye, useGlobalContext } from "../context/useGlobalContext";
const Blog: React.FC = () => {
  const { setpageType } = useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
    setpageType(PageTye.blog);
  }, []);

  return (
    <Layout bannerTitle="Articles">
      <>
        <section className="center py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex  flex-col w-full shadow-lg">
              <Link to={`/article/1`}>
                <div className="cursor-pointer">
                  <img
                    src={aboutImg}
                    alt="blogImg"
                    className="w-[100%] h-[300px]  sm:h-[400px] xmd:h-[450px]"
                  />
                </div>
              </Link>

              <div className="border">
                <div className=" sm:p-[50px] p-[10px] py-[50px]">
                  <div className="text-gray-700 text-[12px] mb-[5px]  uppercase  ">
                    15th November, 2023
                  </div>

                  <a
                    href="blog-standard-post.html"
                    className="text-black uppercase text-[16px]  font-semibold mb-[15px] "
                  >
                    Empowering Youths
                  </a>

                  <p className="mt-4 text-[12px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi totam, a asperiores esse nihil blanditiis, ad fuga,
                    alias voluptatem perspiciatis porro vero error debitis
                    aliquid perferendis voluptatibus sed quaerat architecto quo.
                    Ut praesentium at eius quam, impedit recusandae vel eos.
                  </p>

                  <Link to={`/article/1`}>
                    <button className="bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] text-white leading-5 text-[9px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300">
                      Continue Reading
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Blog;
