import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
const Navbarr = () => {
  return (
    <>
    <header>
      <div className="top-header">
        <div className="nav-top container">
          <div className="nav-top-contact">
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
          </div>
          <div className="nav-top-icon">
            <a href="#"><i className="fa-brands fa-facebook" /></a>
            <a href="#"><i className="fa-brands fa-youtube" /></a>
            <a href="#"><i className="fa-brands fa-instagram" /></a>
          </div>
        </div>
      </div>
      <div className="bottom-header container">
        <div className="logo">
        <Link to="/"> <img src={logo} alt="logo" /></Link>
        </div>
        <ul>
          <li><Link to="/"> HOME</Link></li>
          <li><Link to="about">ABOUT US</Link></li>
          <li><Link to="destination">POPULAR DESTINATION</Link></li>
          <li><Link to="expeditions">EXPEDITIONS</Link></li>
          <li><Link to="trekking">TREKKING REGIONS</Link></li>
          <li><Link to="activites">ACTIVITIES</Link></li>
          <li><Link to="blogs">TRAVELS BLOG</Link></li>
          <li><Link to="contact">CONTACT US</Link></li>
        </ul>
      </div>
    </header>
    </>
  );
}

export default Navbarr;