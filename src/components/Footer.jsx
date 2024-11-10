import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { email, value } = e.target;
    setFormData({ ...formData, email: value });
  };

  const handleOK = () => {
    setSubmitted(false)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch("https://win24-assignment.azurewebsites.net/api/forms/subscribe", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setSubmitted(true);
      setFormData({ email: "" });
    }
  };

  if (submitted) {
    return (
      <div>
        <h1>Thank you for subscribing!</h1>
        <p>We will get back to you soon.</p>
        <button onClick={handleOK}>OK</button>
      </div>
    )
  }

  return (
    <footer>
      <div className='bg__dark'>
        <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor='subscribe'>Your Email</label>
          <input type='email' name='email' id='subscribe' value={formData.email} placeholder='&nbsp; &nbsp; &nbsp; Your Email' onChange={handleChange} required />
          <input type='submit' value='Subscribe' className='subscribe-button' />
        </form>
      </div>
      <p>&copy; 2024 Silicon. All rights reserved. Credit MadrasThemes</p>
    </footer>
  );
};

export default Footer;
