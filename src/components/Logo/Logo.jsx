import "./Logo.scss";

const Logo = () => {
  return (
    <a href="/" className="logo" title="Home" aria-label="Home">
      <img
        src="/logo.svg"
        alt=""
        className="logo__image"
        width={178}
        height={60}
      />
    </a>
  );
};

export default Logo;
