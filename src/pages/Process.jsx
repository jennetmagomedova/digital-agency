import useTitle from "@/hooks/useTitle";
import Contacs from "@/sections/Contacts/Contacts";
import ProcessSection from "@/sections/Process";

const Process = () => {
  useTitle("Process");
  return (
    <>
      <ProcessSection />
      <Contacs />
    </>
  );
};

export default Process;
