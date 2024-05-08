import React from 'react';
import FAQItem from './FAQItem';
import FaqImage from '../assets/faq-image.png'
import { Link } from 'react-router-dom';

const FAQSection: React.FC = () => {
    return (
      <section className="bg-custom-green px-20 mt-10 mb-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className='animate__animated animate__zoomIn shadow-lg'>
            <img
              src={FaqImage}
              alt="Customer Support"
              className="w-full object-cover"
            />
          </div>
          <div className='animate__animated animate__fadeInRight'>
            <h1 className="text-black text-5xl font-bold mb-4 mt-20">Frequently Asked General Questions</h1>
            <FAQItem
              question="Can I pay off my loan early?"
              answer="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
            />
            <FAQItem
              question="Can I do all of my banking with you?"
              answer="Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
            />
            <FAQItem
              question="Do you offer refinancing?"
              answer="Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
            />
            <div className="pt-4">
              <Link to="/getstarted" className="text-primary underline">Have more questions? Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQSection;