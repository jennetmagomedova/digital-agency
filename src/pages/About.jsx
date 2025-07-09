import useTitle from "@/hooks/useTitle";
import AboutUs from "@/sections/AboutUs";
import StartProject from "@/sections/StartProject";
import Story from "@/sections/Story";

const About = () => {
  useTitle("About");
  return (
    <>
      <AboutUs />
      <Story />
      <StartProject />
    </>
  );
};

export default About;
