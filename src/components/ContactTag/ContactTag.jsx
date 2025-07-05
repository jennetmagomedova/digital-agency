import "./ContactTag.scss";

const Contact = (props) => {
  const { icon, label, /** email, phone, address */ type = "email" } = props;
  const isLink = type !== "address";
  const Component = isLink ? "a" : "address";
  const hrefPhone = `tel: +${label.replace(/\D/g, "")}`;
  const hrefMail = `mailto: ${label}`;
  const href = type === "phone" ? hrefPhone : hrefMail;

  return (
    <div className="contact">
      <img src={icon} alt="" className="contact__icon" width={20} height={20} />
      {isLink ? (
        <Component href={href}>{label}</Component>
      ) : (
        <Component>{label}</Component>
      )}
    </div>
  );
};

export default Contact;
