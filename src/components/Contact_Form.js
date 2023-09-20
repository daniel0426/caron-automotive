import React, { useRef, useState } from "react";
import "../style/contact_form.scss";
import emailjs from "@emailjs/browser";

const Contact_Form = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        form.current,
        process.env.GATSBY_USER_ID
      )
      .then((result) => {
        if (result.text === "OK") {
          setSubmitSuccess(true);
          setTimeout(() => setSubmitSuccess(false), 3000);
          form.current.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <iframe
        className="booking_form"
        src="https://www.mechanicdesk.com.au/booking_requests/new?token=a02912b413b8420b1fbb3fc11dab1af102bb0618"
        height="850"
        frameBorder="0"
      ></iframe>
      {/* {submitSuccess ? 
    <div className='success_alert'>
        <h1 className="alert_message">Your submission was received !</h1>
        <p>We'll get back to you soon !</p>
    </div>
    : 
    <form ref={form} className="contact_form" onSubmit={sendEmail}>
    <label htmlFor="name">
      NAME*
      <input type="text" name="name" placeholder="Enter Name" required/>
    </label>
    <label htmlFor="email">
      EMAIL*
      <input type="email" name="email" placeholder="Enter Email" required/>
    </label>
    <label htmlFor="phone">
      PHONE*
      <input type="tel" name="phone" placeholder="Enter Phone"  required/>
    </label>
    <label htmlFor="message">
      MESSAGE*
      <textarea type="tel" name="message" placeholder="Enter Message" required/>
    </label>
    <button type="submit">
      SEND 
    </button>
  </form>
    } */}
    </>
  );
};

export default Contact_Form;
