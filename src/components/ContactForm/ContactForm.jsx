import Button from "../Button";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__field-label" htmlFor="name">
            Full Name
          </label>
          <input
            className="contact-form__field-input"
            id="name"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__field-label" htmlFor="email">
            Email*
          </label>
          <input
            className="contact-form__field-input"
            id="email"
            name="email"
            placeholder="Type here"
            required
          />
        </div>
      </div>
      <fieldset className="contact-form__reasons contact-form__checkboxs">
        <legend className="contact-form__checkboxs-title visually-hidden">
          Why are you contacting us?
        </legend>
        <p className="contact-form__checkboxs-title">
          Why are you contacting us?
        </p>
        <div className="contact-form__checkboxs-list">
          <label className="contact-form__checkboxs-item">
            <input
              className="contact-form__checkboxs-input"
              name="reason"
              type="checkbox"
              value="Web Design"
            />
            <span className="checkbox__label">Web Design</span>
          </label>
          <label className="contact-form__checkboxs-item">
            <input
              className="contact-form__checkboxs-input"
              name="reason"
              type="checkbox"
              value="Collaboration"
            />
            <span className="checkbox__label">Collaboration</span>
          </label>
          <label className="contact-form__checkboxs-item">
            <input
              className="contact-form__checkboxs-input"
              name="reason"
              type="checkbox"
              value="Mobile App Design"
            />
            <span className="checkbox__label">Mobile App Design</span>
          </label>
          <label className="contact-form__checkboxs-item">
            <input
              className="contact-form__checkboxs-input"
              name="reason"
              type="checkbox"
              value="Others"
            />
            <span className="checkbox__label">Others</span>
          </label>
        </div>
      </fieldset>
      <div className="contact-form__field">
        <label className="contact-form__field-label" htmlFor="message">
          Your Message*
        </label>
        <textarea
          className="contact-form__field-input contact-form__field-textarea"
          id="message"
          name="message"
          placeholder="Type here"
          required
        ></textarea>
      </div>
      <Button
        className="contact-form__button"
        type="submit"
        mode="accent"
        hasLabel
        label="Submit"
        borderRadius={8}
      />
    </form>
  );
};

export default ContactForm;
