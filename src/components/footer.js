import React from "react";
import "./footer.css";
import { FaCrown, FaFacebook, FaTwitterSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import "./Navbar.css"

export default function footer() {
  return (
      <>
    <div className="footer">
      <div className="image-container"></div>
      <div className="services-container">
          <h4 className="service-head">
              Our Services
          </h4>
          <ul className="services-list">
              <li>Predict best college</li>
              <li>Game based assessments</li>
              <li>Get unbiased information</li>
              <li>Get insights of clubs and committies</li>
              <li>One stop solution for all academics info</li>
          </ul>
      </div>
      <div className="third-box">
        <h3 className="third-box-text">
          Why limit your future when you can upgrade to premium! Get
          personalized dashboard, proper roadmap, and much more.
        </h3>
        <p className="premium">Upgrade To Premium<FaCrown className='crown'/></p>
      </div>
    </div>
    <div className="footer-bottom">
    <div>
    <ul className="social-links">
        <li><FaFacebook className="fb-icon sm-icons"></FaFacebook></li>
        <li><FaTwitterSquare className="twitter-icon sm-icons"></FaTwitterSquare></li>
        <li><FaInstagramSquare className="insta-icon sm-icons"></FaInstagramSquare></li>
        <li><FaLinkedin className="linkedin-icon sm-icons"></FaLinkedin></li>
    </ul>
    </div>
    <div className="email"><p>Email: yourdreamsedu.d@gmail.com</p></div>
    <div className="help"><p>Help</p></div>
    </div>
    </>
  );
}
