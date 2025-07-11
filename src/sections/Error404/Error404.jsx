import Button from "@/components/Button";
import "./Error404.scss";

const Error404 = () => {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <div className="error__description">Page not found</div>
      <Button
        className="error__button"
        href={`${import.meta.env.BASE_URL}/`}
        mode="accent"
        hasLabel
        label="Home Page"
        borderRadius={8}
      />
    </div>
  );
};

export default Error404;
