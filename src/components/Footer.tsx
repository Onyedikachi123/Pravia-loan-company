import { Mail } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-primary py-10 px-20">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <img
                src={logo}
                alt="Logo"
                style={{ height: "50px", width: "150px" }}
              />
              <p className="mt-3 text-sm md:text-md text-gray-300">
                Explore a world of convenience with our diverse products. Secure
                quick loans, make investments—all on the go.
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="text-white text-center font-bold text-xl">
                Quick Links
              </h5>
              <ul className="text-center text-gray-300 leading-8">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Services</Link>
                </li>
                <li>
                  <Link to="/getstarted">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="text-white text-center font-bold text-xl">
                Contact Us
              </h5>
              <ul className="text-gray-300">
                <li className="d-flex justify-content-center align-items-center">
                  <Mail /> <span className="ms-2">info@praviacapital.ng</span>
                </li>
              </ul>
            </div>
          </div>
          {/* This div ensures that the copyright text is separated and placed at the bottom */}
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white text-xs mt-5">
                All rights reserved. © 2024 Pravia Capital
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
