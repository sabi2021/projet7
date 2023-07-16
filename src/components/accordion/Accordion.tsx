import React, { useState, ReactNode  } from "react";
import arrowUp from "../../assets/location_detail/arrow_up.png";
import arrowDown from "../../assets/location_detail/arrow_down.png";

interface AccordionProps {
  title: string;
  content: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion__dropdown__container">
      <div className="accordion__dropdown__title">
        <h2>{title}</h2>
        <p onClick={display} role="button" tabIndex={0}>
          {isOpen ? (
            <img src={arrowUp} alt="Close" />
          ) : (
            <img src={arrowDown} alt="Open" />
          )}
        </p>
      </div>
      <div className="accordion__dropdown__content">
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Accordion;