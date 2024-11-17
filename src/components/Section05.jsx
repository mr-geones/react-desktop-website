import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

const Section05 = () => {
  const [testimonials, setTestimonials] = useState([]);

  const getTestimonials = async () => {
    const res = await fetch("https://win24-assignment.azurewebsites.net/api/testimonials");
    const data = await res.json();
    setTestimonials(data);
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <section id='section-05' className='bg__dark'>
      <div id='s05'>
        <h2>Clients are Loving Our App</h2>
        <div className='testimonials'>
          {testimonials.map(testimonial => (
            <Testimonial key={testimonial.id} item={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section05;
