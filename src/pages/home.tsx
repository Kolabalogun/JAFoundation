import React, { useEffect } from "react";
import Hero from "../components/home/hero";
import Roles from "../components/home/roles";
import About from "../components/home/about";
import Events from "../components/home/events";
import Poster from "../components/home/poster";
// import Quote from "../components/home/quote";
import Footer from "../components/common/footer";
import { PageTye, useGlobalContext } from "../context/useGlobalContext";

const Home: React.FC = () => {
  const { setpageType } = useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
    setpageType(PageTye.home);
  }, []);

  return (
    <main>
      <Hero />
      <Roles />
      <About />
      <Events />
      <Poster />
      {/* <Quote /> */}
      <Footer />
    </main>
  );
};

export default Home;
