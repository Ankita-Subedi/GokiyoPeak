// import React from 'react';
import logo from "../assets/images/logo.png";
import footerImg from "../assets/images/footer-img.png";

const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${footerImg})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    width: '100%' 
  };
  return (
    <>
    <footer style={footerStyle}>
      <div className="container d-flex">
        <div className="logo-section">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
          <ul>
            <li>
              <i className="fa-solid fa-location-dot" />
              <a href="#">Putalisadak, Kathmandu</a>
            </li>
            <li>
              <i className="fa-solid fa-phone" />
              <a href="tel:+977-123456789">+977-123456789</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope" />
              <a href="mailto:Company@info.com">Company@info.com</a>
            </li>
          </ul>
          
          <div className="socialmedia">
          <h4 className="heading">Social Media Links</h4>
          <ul className="d-flex">
            <li>
            <a href="#"><i className="fa-brands fa-facebook" /></a>
            </li>
            <li>
            <a href="#"><i className="fa-brands fa-youtube" /></a>
            </li>
            <li>
            <a href="#"><i className="fa-brands fa-instagram" /></a>
            </li>
          </ul>
        </div>
        </div>

        <div className="quick-link">
          <h4 className="heading">Quick Links</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Travel Blogs</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="activities">
          <h4 className="heading">Activities</h4>
          <ul>
            <li>
              <a href="#">Expeditions</a>
            </li>
            <li>
              <a href="#">Mountain Bike</a>
            </li>
            <li>
              <a href="#">Heli Tours</a>
            </li>
            <li>
              <a href="#">City Tours</a>
            </li>
            <li>
              <a href="#">Paragliding</a>
            </li>
          </ul>
        </div>

        <div className="trekking">
          <h4 className="heading">Trekking Regions</h4>
          <ul>
            <li>
              <a href="#">Langtang Regions</a>
            </li>
            <li>
              <a href="#">Everest Regions</a>
            </li>
            <li>
              <a href="#">Annapurna Regions</a>
            </li>
            <li>
              <a href="#">Manaslu Regions</a>
            </li>
            <li>
              <a href="#">Dhaulagiri Regions</a>
            </li>
            <li>
              <a href="#">Helambu Regions</a>
            </li>
            <li>
              <a href="#">Upper Mustang Regions</a>
            </li>
          </ul>
        </div>

        <div className="useful-links">
          <h4 className="heading">Useful Links</h4>
          <ul>
            <li>
              <a href="#">Plan Your Trip</a>
            </li>
            <li>
              <a href="#">Travel Guide</a>
            </li>
            <li>
              <a href="#">B2B Partners</a>
            </li>
            <li>
              <a href="#">Payment Procedure</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </div>
      </div>

    </footer>
      <div className="copyright-section">
        <div className="container d-flex">
        <p>©GOKIYO PEAK TRAVELS AND TOURISM (p) ltd, 2024.</p>
        <p>Powered by: <span><a href="#">E-PRABIDHI</a></span> </p>
        </div>
      </div>
      </>
  );
};

export default Footer;
