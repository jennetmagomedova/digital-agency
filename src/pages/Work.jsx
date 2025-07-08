import useTitle from "@/hooks/useTitle";
import Ideas from "@/sections/Ideas";
import Works from "@/sections/Works";

const Work = () => {
  useTitle("Work");
  return (
    <>
      <Works />
      <Ideas />
    </>
  );
};

export default Work;
