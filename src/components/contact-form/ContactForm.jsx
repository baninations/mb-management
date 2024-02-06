import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_akihphi", "template_cx9ewqt", form.current, {
        publicKey: "4fkY53_wgV1Xl9g_f",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form-container">
      <label className="label">Name</label>
      <input className="input-field" type="text" name="from_name" required />

      <label className="label">Email</label>
      <input className="input-field" type="email" name="from_email" required />

      <label className="label">Nachricht</label>
      <textarea className="textarea-field" name="message" required />

      <input className="submit-button" type="submit" value="Absenden" />
    </form>
  );
};

export default ContactForm;
