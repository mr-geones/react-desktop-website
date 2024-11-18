import React, { useState } from "react";

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-card ${isOpen ? "open" : ""}`} onClick={toggleAccordion}>
      <div className={"question"}>
        <p>{item.title}</p>
        <button className='btn-round'>
          <i className='fa-solid fa-chevron-down'></i>
        </button>
      </div>
      <div className='answer'>{isOpen && <div className='expandable'>{item.content}</div>}</div>
    </div>
  );
};

export default AccordionItem;
