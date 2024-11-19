import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleOK = () => {
    setSubmitted(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Validate email
    if (!formData.email.trim()) {
      setError("display-error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("display-error");
      return;
    }

    try {
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
        setError("");
      } else {
        setError("Subscription failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  if (submitted) {
    return (
      <footer>
      <div className='bg__dark'>
        <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
        <div className="sub-container">
          <h4 className="thank-you">Thank you for subscribing!</h4>
          <p>We will get back to you soon.</p>
          <button className="button go-back" onClick={handleOK}>OK</button>
        </div>
      </div>
      <p>&copy; 2024 Silicon. All rights reserved. Credit MadrasThemes</p>
    </footer>
    );
  }

  return (
    <footer>
      <div className='bg__dark'>
        <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor='subscribe'>Your Email</label>
          <input type='email' name='email' id='subscribe' value={formData.email} placeholder='&nbsp; &nbsp; &nbsp; Your Email' onChange={handleChange} className={error ? "error" : ""} required />
          <input type='submit' value='Subscribe' className='subscribe-button' />
          <div className={`validation error-message ${error}`}>Please provide a valid email address.</div>
        </form>
      </div>
      <p>&copy; 2024 Silicon. All rights reserved. Credit MadrasThemes</p>
    </footer>
  );
};

export default Footer;
