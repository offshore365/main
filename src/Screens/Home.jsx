import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Steps from './Steps';
import Models from './model';
import Scheduling from './Scheduling';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="steps">
        <Steps />
      </section>

      <section id="models">
        <Models />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="scheduling">
        <Scheduling />
      </section>

      {/* <section id="faq">
        <FAQ />
      </section> */}

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
