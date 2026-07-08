import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { contactOptions } from "./contactData";
import { buildPortfolioEmailPayload } from "./emailTemplate";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElement = form.current;

    const formData = new FormData(formElement);
    const payload = buildPortfolioEmailPayload({
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
    });

    try {
      await emailjs.send(
        "service_fc2c6a6",
        "template_vdtewlt",
        payload,
        "xrpZ-SvW5_nyOWus5",
      );
      setStatusMessage(
        "Message sent successfully. I will get back to you soon.",
      );
      formElement?.reset();
    } catch (error) {
      console.error("Email submission failed:", error);
      setStatusMessage(
        "Message could not be sent right now. Please try again later.",
      );
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          {contactOptions.map(
            ({ icon: Icon, title, value, note, link, linkLabel }) => (
              <article className="contact_option surface-card" key={title}>
                <Icon className="contact_option-icon" />
                <h4>{title}</h4>
                <h5>{value}</h5>
                {note ? (
                  <span className="contact_option-note">{note}</span>
                ) : (
                  <a href={link} target="_blank" rel="noreferrer">
                    {linkLabel}
                  </a>
                )}
              </article>
            ),
          )}
        </div>
        <form action="" ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message Here"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
        {statusMessage && <p className="contact_status">{statusMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
