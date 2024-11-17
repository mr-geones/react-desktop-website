import React from "react";

const AccordionItem = ({item}) => {
  return (
    <div className='faq-card'>
      <div className='question'>
        <p>{item.title}</p>
        <button className='btn-round'>
          <i className='fa-solid fa-chevron-down'></i>
        </button>
      </div>
      <div className="answer">{item.content}</div>
    </div>
  );
};

export default AccordionItem;
