import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="contact-heading">
          <span className="highlight-text text-3xl"> Connect</span> us
        </h2>
        <p className="contact-description">Send me a message</p>
        <form className="contact-form-fields">
          <div className="input-grid">
            <input className="input-field" placeholder="First Name" type="text" />
            <input className="input-field" placeholder="Last Name" type="text" />
            <input className="input-field" placeholder="Email" type="email" />
            <input className="input-field" placeholder="Phone Number" type="tel" />
          </div>
          <textarea
            className="input-field textarea"
            placeholder="Your message"
          ></textarea>
          <button className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
