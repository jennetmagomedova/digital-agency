import "./Logo.scss";

const Logo = () => {
  return (
    <a
      href={`${import.meta.env.BASE_URL}/`}
      className="logo"
      title="Home"
      aria-label="Home"
    >
      <img
        src={`${import.meta.env.BASE_URL}/logo.svg`}
        alt=""
        className="logo__image"
        width={178}
        height={60}
      />
    </a>
  );
};

export default Logo;
