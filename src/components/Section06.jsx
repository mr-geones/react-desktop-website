import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";

const Section06 = () => {
  const [accordions, setAccordions] = useState([]);

  const fetchFaq = async () => {
    const res = await fetch("https://win24-assignment.azurewebsites.net/api/faq");
    const data = await res.json();
    setAccordions(data);
  };

  useEffect(() => {
    fetchFaq();
  }, []);

  return (
    <section id='section-06'>
      <div>
        <div className='s06'>
          <h3>
            Any questions? <br />
            Check out the FAQs
          </h3>
          <p className='fs-l'>Still have unanswered questions and need to get in touch?</p>
          <div className='contact-us'>
            <div>
              <p id='call'>Still have questions?</p>
              <a href=''>Contact us</a>
            </div>
            <div>
              <p id='chat'>Don't like phone calls?</p>
              <a href=''>Contact us</a>
            </div>
          </div>
        </div>

        <div className='faq'>
          {accordions.map(item => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section06;
