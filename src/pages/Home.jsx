import useTitle from "@/hooks/useTitle";
import Choice from "@/sections/Choice";
import Contacs from "@/sections/Contacts/Contacts";
import Faq from "@/sections/Faq";
import HeroHome from "@/sections/HeroHome";
import Reviews from "@/sections/Reviews";
import Services from "@/sections/Services";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <HeroHome />
      <Services />
      <Choice />
      <Reviews />
      <Faq />
      <Contacs />
    </>
  );
};

export default Home;
