import React, { useEffect } from "react";
import Layout from "../components/container/layout";
import { Link } from "react-router-dom";
import { PageTye, useGlobalContext } from "../context/useGlobalContext";

const Blog: React.FC = () => {
  const { setpageType, articlesFromDB } = useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
    setpageType(PageTye.blog);
  }, []);

  return (
    <Layout bannerTitle="Articles">
      <>
        <section className="center py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-16">
            {articlesFromDB?.map((article) => (
              <div className="flex  flex-col w-full shadow-lg">
                <Link to={`/article/${article?.id}`}>
                  <div className="cursor-pointer">
                    <img
                      src={article?.mainImg}
                      alt="blogImg"
                      className="w-[100%] h-[300px]  sm:h-[400px] xmd:h-[450px]"
                    />
                  </div>
                </Link>

                <div className="border">
                  <div className=" sm:p-[50px] p-[20px] py-[50px]">
                    <div className="text-gray-700 text-[12px] mb-[5px]  uppercase  ">
                      {article?.date}
                    </div>
                    <Link
                      to={`/article/${article?.id}`}
                      className="text-black uppercase text-[16px]  font-semibold mb-[15px] "
                    >
                      {article?.title}
                    </Link>

                    <p className="mt-4 text-[12px]">
                      {article?.paragraphOne.length > 200
                        ? article?.paragraphOne.substring(0, 200) + "..."
                        : article?.paragraphOne}
                    </p>

                    <Link to={`/article/${article.id}`}>
                      <button className="bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] text-white leading-5 text-[9px] px-[17px] py-1 uppercase rounded-[5px] mt-4 font-bold transition-colors delay-200 duration-300">
                        Continue Reading
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Blog;
