import Error404 from "@/sections/Error404";
import useTitle from "../hooks/useTitle";

const ErrorPage = () => {
  useTitle("Error");
  return (
    <>
      <Error404 />
    </>
  );
};

export default ErrorPage;
