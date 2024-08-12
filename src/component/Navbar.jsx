import logo from '../assets/images/logo.png'

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
        <img src={logo} alt="logo" />
        </div>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">POPULAR DESTINATION</a></li>
          <li><a href="#">EXPEDITIONS</a></li>
          <li><a href="#">TREKKING REGIONS</a></li>
          <li><a href="#">ACTIVITIES</a></li>
          <li><a href="#">TRAVELS BLOG</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </div>
    </header>
    </>
  );
}

export default Navbarr;