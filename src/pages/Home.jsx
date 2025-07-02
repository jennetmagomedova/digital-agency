import useTitle from "@/hooks/useTitle";
import Choice from "@/sections/Choice";
import HeroHome from "@/sections/HeroHome";
import Services from "@/sections/Services";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <HeroHome />
      <Services />
      <Choice />
    </>
  );
};

export default Home;
