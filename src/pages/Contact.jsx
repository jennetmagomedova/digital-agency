import useTitle from "@/hooks/useTitle";
import ContactUs from "@/sections/ContactUs";
import Faq from "@/sections/Faq";
import StartProject from "@/sections/StartProject";

const Contact = () => {
  useTitle("Contact");
  return (
    <>
      <ContactUs />
      <Faq />
      <StartProject />
    </>
  );
};

export default Contact;
