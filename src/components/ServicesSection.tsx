import { Link } from "react-router-dom";
import Borrow from '../assets/loan.jpeg';
import Invest from '../assets/invest.jpeg';


const ServicesSection: React.FC = () => {
  return (
    <section className="py-5 py-md-5 bg-gray-100"> 
    <div className="container px-3 px-lg-5"> 
      <h2 className="text-xl md:text-3xl font-bold text-center mb-4 mb-md-5">What we offer</h2>
      <div className="row justify-content-center gx-2 gx-lg-5"> 
        
        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-4"> 
          <div className="card w-100 animate__animated animate__fadeInLeft border-0 rounded-md shadow-lg"> 
            <img src={Borrow} className="card-img-top" alt="Sample"/>
            <div className="card-body">
              <h5 className="card-title font-bold">Borrowing</h5>
              <p className="card-text mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/getstarted" className="bg-primary text-white px-5 py-2 rounded-md">Get Started</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
          <div className="card w-100 animate__animated animate__fadeInRight border-0 rounded-md shadow-lg">
            <img src={Invest} className="card-img-top" alt="Sample"/>
            <div className="card-body">
              <h5 className="card-title font-bold pt-7">Investment</h5>
              <p className="card-text mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/getstarted" className="bg-secondary text-white px-5 py-2 rounded-md">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ServicesSection;