import useTitle from "@/hooks/useTitle";
import AllServices from "@/sections/AllServices";
import Ideas from "@/sections/Ideas";

const Services = () => {
  useTitle("Services");
  return (
    <>
      <AllServices />
      <Ideas />
    </>
  );
};

export default Services;
