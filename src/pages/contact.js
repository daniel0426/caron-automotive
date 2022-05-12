import React from 'react'
import Contact_Form from '../components/Contact_Form';
import Layout from '../components/layout'
import "../style/contact.scss"

const contact = () => {

  return (
    <Layout>
      <main className="contact_container">
        <h1>GET IN TOUCH</h1>
       <Contact_Form/>
      </main>
    </Layout>
  )
}

export default contact