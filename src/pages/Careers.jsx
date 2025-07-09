import useTitle from "@/hooks/useTitle";
import Career from "@/sections/Career";
import StartProject from "@/sections/StartProject";

const Careers = () => {
  useTitle("Careers");
  return (
    <>
      <Career />
      <StartProject />
    </>
  );
};

export default Careers;
