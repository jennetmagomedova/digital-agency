import useTitle from "@/hooks/useTitle";
import HeroHome from "@/sections/HeroHome";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <HeroHome />
    </>
  );
};

export default Home;
