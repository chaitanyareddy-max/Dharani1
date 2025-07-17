import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_l1n4ljq',         // ✅ Your Service ID
      'template_fcjbfzh',        // ✅ Your Template ID
      form.current,
      'zSAEAXqCZ2T9C2PI4'        // ✅ Your Public Key
    ).then(
      (result) => {
        alert('✅ Message sent to your email!');
        form.current.reset(); // clear form
      },
      (error) => {
        alert('❌ Failed to send: ' + error.text);
      }
    );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        
        <div className="form-group">
          <label htmlFor="name">Name</label><br />
          <input type="text" id="name" name="user_name" placeholder="Your Name" required /><br />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label><br />
          <input type="email" id="email" name="user_email" placeholder="Your Email" required /><br />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label><br />
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea><br />
        </div>

        <button type="submit">Send</button>
        <input type="hidden" name="to_email" value="munnareddy8208@gmail.com" />

      </form>
    </section>
  );
};

export default Contact;

