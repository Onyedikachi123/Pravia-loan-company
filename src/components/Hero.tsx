import { Link } from "react-router-dom";
import Tabs from "./Tabs";

const Hero: React.FC = () => {
  return (
    <section className="hero-section flex items-center mb-10">
      {/* Remove px-20 and add responsive padding with Tailwind */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:pl-12">
        <div className="row">
          <div className="w-full flex flex-col lg:flex-row gap-4 py-4">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center animate__animated animate__fadeInLeft">
              <h1 className="text-4xl md:text-6xl font-bold text-black">
                Lend and borrow with Confidence
              </h1>
              <p className="mt-3 text-sm md:text-md text-gray-500">
                Explore a world of convenience with our diverse products. <br />
                Secure quick loans, make investments—all on the go.
              </p>
              <Link
                to="/getstarted"
                className="mt-4 bg-primary text-white py-2 rounded-md text-center w-32 sm:w-40 md:w-48"
              >
                Get Started
              </Link>
            </div>

            {/* Right side - Image or Tabs component */}
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
