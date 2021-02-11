import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Vision from '../components/vision/vision';
import Events from '../components/Events/Events';
import Contact from '../components/Contactus/contact';
import Footer from '../components/footer/footer';
import Hero from '../components/mainpage/hero';
import SEO from '../components/seo'

const IndexPage = () => (
  <>
    <SEO title="Home"/>
    <Hero />
    <Vision />
    <Events />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
