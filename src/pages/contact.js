import React from "react";
import Contact_Form from "../components/Contact_Form";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import "../style/contact.scss";

const contact = () => {
  return (
    <Layout>
      <SEO title="Booking" />
      <main className="contact_container">
        <h1>BOOK NOW</h1>
        <Contact_Form />
      </main>
    </Layout>
  );
};

export default contact;
