import React from "react";
import Hero from "../components/Hero";
import FAQSection from "../components/FAQSection";
import ServicesSection from "../components/ServicesSection";


const Home: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        <ServicesSection />
        <FAQSection />
       
      </main>
    </>
  );
};

export default Home;
