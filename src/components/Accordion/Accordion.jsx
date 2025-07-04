import classNames from "classnames";
import "./Accordion.scss";

const Accordion = (props) => {
  const { className, question, answer, name, id, isOpen } = props;

  return (
    <div className={classNames("accordion", className)}>
      <details className="accordion__details" name={name} open={isOpen}>
        <summary className="accordion__summary">
          <h3 className="accordion__title">
            <span role="term" aria-details={id}>
              {question}
            </span>
          </h3>
        </summary>
      </details>
      <div className="accordion__content" id={id} role="definition">
        <div className="accordion__content-inner">
          <div className="accordion__content-body">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
