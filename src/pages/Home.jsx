import useTitle from "@/hooks/useTitle";
import HeroHome from "@/sections/HeroHome";
import Services from "@/sections/Services";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <HeroHome />
      <Services />
    </>
  );
};

export default Home;
