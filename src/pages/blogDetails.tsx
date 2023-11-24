import React, { useEffect } from "react";
import Layout from "../components/container/layout";

import aboutImg from "../assets/img.jpg";
import { PageTye, useGlobalContext } from "../context/useGlobalContext";
const BlogDetails: React.FC = () => {
  const { setpageType } = useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
    setpageType(PageTye.blog);
  }, []);

  return (
    <Layout bannerTitle="Articles">
      <>
        <section className="center py-40">
          <div className="">
            <div className="flex flex-col items-center justify-center text-center mb-10">
              <h1 className=" text-4xl font-semibold italic ">
                Empowering Futures
              </h1>
              <div className="h-[3px] w-1/4 my-7 bg-[#b71a88]"></div>
            </div>

            <div className="cursor-pointer">
              <img src={aboutImg} alt="blogImg" className="w-full h-full" />
            </div>

            <div className="my-24">
              <p className="text-sm font-medium leading-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt excepturi saepe ex eos, voluptatum cumque! Non
                praesentium quasi, hic tempora delectus aliquid sunt rem iste
                dolorum, beatae natus assumenda, distinctio totam omnis iure
                sequi dolor esse maxime similique dicta? Debitis, officiis
                possimus id modi, dignissimos magnam nobis sapiente sunt soluta
                cum, dolorem eaque laborum asperiores sit repellendus repellat
                necessitatibus? Aperiam quaerat quia impedit, porro beatae
                tempore ea magni omnis iusto sequi dolorum reprehenderit, nihil
                veritatis laboriosam itaque quibusdam incidunt magnam sint neque
                nulla temporibus veniam illo id. Neque laudantium autem illo,
                quos quidem, quasi earum quisquam atque numquam labore iusto
                dolor? Ipsam atque esse aperiam placeat amet aspernatur
                inventore, debitis voluptatem sequi consequuntur soluta, ratione
                eius quibusdam nobis Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Perspiciatis adipisci voluptas modi animi
                quisquam ratione voluptatibus eveniet facilis qui! Sapiente
                voluptatum quos voluptatibus consectetur fugit ipsam aspernatur
                non, eligendi temporibus! Accusantium laborum maiores ullam
                voluptate enim tempore. Magnam, alias odio! Libero soluta
                quisquam explicabo enim natus, ipsam, tenetur alias temporibus
                ullam quaerat neque minus, doloremque quae? Voluptates
                voluptatum temporibus nobis, dignissimos soluta saepe eius atque
                ullam ut magni alias, expedita optio id amet doloremque! Quaerat
                ex, nemo eos magni rem maxime voluptas sit dolorum corporis
                minima eligendi sapiente fugit optio beatae impedit asperiores
                vero, et iste blanditiis. Esse labore ipsum eum quaerat magni
                minima, suscipit adipisci officia asperiores consequuntur!
                Veritatis iste, nam pariatur obcaecati vitae, odit labore non
                veniam officiis blanditiis, numquam repellat adipisci quia
                doloribus? Dolore, ipsa facilis neque soluta aliquam deleniti
                ducimus quis, voluptas enim accusamus animi temporibus quo,
                dolorum repellendus quibusdam pariatur earum quod officiis!
                Tempora quam pariatur adipisci magni maiores optio reprehenderit
                repellat recusandae fugit minima! Consequuntur, aspernatur?
                Magnam, aspernatur? Veniam exercitationem dolore totam nisi
                aliquid corrupti repudiandae saepe, ipsam rem laudantium
                nesciunt suscipit inventore officia quibusdam accusamus quidem
                at repellat id commodi? Quae aliquid natus architecto a dolore
                nam corporis ex provident voluptate praesentium officia qui,
                alias, nihil ipsum cum similique sed nemo, incidunt mollitia
                nobis. A nisi omnis, ipsa suscipit minima debitis. Aspernatur
                sapiente, veniam suscipit, tempora amet hic voluptatem ea, dicta
                animi reprehenderit saepe corrupti! Magni nostrum labore minus?
                Ut qui omnis nisi! Iste quisquam nihil tempore voluptatem
                cumque, excepturi fugiat ullam dicta illo quo reprehenderit
                reiciendis minus nesciunt numquam iusto dolorem. Quos
                praesentium soluta quod qui omnis? Corporis, aspernatur ut!
                Tempora laudantium exercitationem architecto dolor quisquam, ab
                sit obcaecati, suscipit, repellat hic commodi blanditiis
                perspiciatis. Cupiditate numquam veniam, est eum laboriosam
                ducimus beatae? Alias exercitationem architecto earum pariatur
                deserunt ex fuga corrupti? consectetur repellat delectus non
                doloribus quod incidunt voluptate nemo nam earum. In facere
                natus eligendi libero repellat! Autem, officiis. Ut nam dolorum
                in eaque officiis incidunt at non modi libero, temporibus
                eligendi enim repellendus et suscipit possimus nobis deserunt
                excepturi adipisci tempora. Ea dolore optio magnam autem earum
                perspiciatis dicta dolores eligendi cumque cupiditate iusto ut,
                inventore est harum veniam officia voluptatem pariatur
                voluptate? Illum quidem consequatur corrupti eveniet reiciendis
                sint dolore voluptatem, ex minus officiis distinctio excepturi
                consectetur, nulla mollitia enim.
              </p>
            </div>

            <div className="cursor-pointer">
              <img src={aboutImg} alt="blogImg" className="w-full h-full" />
            </div>

            <div className="my-24">
              <p className="text-sm font-medium leading-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt excepturi saepe ex eos, voluptatum cumque! Non
                praesentium quasi, hic tempora delectus aliquid sunt rem iste
                dolorum, beatae natus assumenda, distinctio totam omnis iure
                sequi dolor esse maxime similique dicta? Debitis, officiis
                possimus id modi, dignissimos magnam nobis sapiente sunt soluta
                cum, dolorem eaque laborum asperiores sit repellendus repellat
                necessitatibus? Aperiam quaerat quia impedit, porro beatae
                tempore ea magni omnis iusto sequi dolorum reprehenderit, nihil
                veritatis laboriosam itaque quibusdam incidunt magnam sint neque
                nulla temporibus veniam illo id. Neque laudantium autem illo,
                quos quidem, quasi earum quisquam atque numquam labore iusto
                dolor? Ipsam atque esse aperiam placeat amet aspernatur
                inventore, debitis voluptatem sequi consequuntur soluta, ratione
                eius quibusdam nobis Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Perspiciatis adipisci voluptas modi animi
                quisquam ratione voluptatibus eveniet facilis qui! Sapiente
                voluptatum quos voluptatibus consectetur fugit ipsam aspernatur
                non, eligendi temporibus! Accusantium laborum maiores ullam
                voluptate enim tempore. Magnam, alias odio! Libero soluta
                quisquam explicabo enim natus, ipsam, tenetur alias temporibus
                ullam quaerat neque minus, doloremque quae? Voluptates
                voluptatum temporibus nobis, dignissimos soluta saepe eius atque
                ullam ut magni alias, expedita optio id amet doloremque! Quaerat
                ex, nemo eos magni rem maxime voluptas sit dolorum corporis
                minima eligendi sapiente fugit optio beatae impedit asperiores
                vero, et iste blanditiis. Esse labore ipsum eum quaerat magni
                minima, suscipit adipisci officia asperiores consequuntur!
                Veritatis iste, nam pariatur obcaecati vitae, odit labore non
                veniam officiis blanditiis, numquam repellat adipisci quia
                doloribus? Dolore, ipsa facilis neque soluta aliquam deleniti
                ducimus quis, voluptas enim accusamus animi temporibus quo,
                dolorum repellendus quibusdam pariatur earum quod officiis!
                Tempora quam pariatur adipisci magni maiores optio reprehenderit
                repellat recusandae fugit minima! Consequuntur, aspernatur?
                Magnam, aspernatur? Veniam exercitationem dolore totam nisi
                aliquid corrupti repudiandae saepe, ipsam rem laudantium
                nesciunt suscipit inventore officia quibusdam accusamus quidem
                at repellat id commodi? Quae aliquid natus architecto a dolore
                nam corporis ex provident voluptate praesentium officia qui,
                alias, nihil ipsum cum similique sed nemo, incidunt mollitia
                nobis. A nisi omnis, ipsa suscipit minima debitis. Aspernatur
                sapiente, veniam suscipit, tempora amet hic voluptatem ea, dicta
                animi reprehenderit saepe corrupti! Magni nostrum labore minus?
                Ut qui omnis nisi! Iste quisquam nihil tempore voluptatem
                cumque, excepturi fugiat ullam dicta illo quo reprehenderit
                reiciendis minus nesciunt numquam iusto dolorem. Quos
                praesentium soluta quod qui omnis? Corporis, aspernatur ut!
                Tempora laudantium exercitationem architecto dolor quisquam, ab
                sit obcaecati, suscipit, repellat hic commodi blanditiis
                perspiciatis. Cupiditate numquam veniam, est eum laboriosam
                ducimus beatae? Alias exercitationem architecto earum pariatur
                deserunt ex fuga corrupti? consectetur repellat delectus non
                doloribus quod incidunt voluptate nemo nam earum. In facere
                natus eligendi libero repellat! Autem, officiis. Ut nam dolorum
                in eaque officiis incidunt at non modi libero, temporibus
                eligendi enim repellendus et suscipit possimus nobis deserunt
                excepturi adipisci tempora. Ea dolore optio magnam autem earum
                perspiciatis dicta dolores eligendi cumque cupiditate iusto ut,
                inventore est harum veniam officia voluptatem pariatur
                voluptate? Illum quidem consequatur corrupti eveniet reiciendis
                sint dolore voluptatem, ex minus officiis distinctio excepturi
                consectetur, nulla mollitia enim.
              </p>
            </div>

            <div className="my-24 grid gap-16 grid-cols-3">
              <div className="cursor-pointer">
                <img
                  src={aboutImg}
                  alt="blogImg"
                  className="w-full rounded-md h-full"
                />
              </div>
              <div className="cursor-pointer">
                <img
                  src={aboutImg}
                  alt="blogImg"
                  className="w-full rounded-md h-full"
                />
              </div>
              <div className="cursor-pointer">
                <img
                  src={aboutImg}
                  alt="blogImg"
                  className="w-full rounded-md h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default BlogDetails;
