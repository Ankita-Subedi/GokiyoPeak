import Navbarr from "../component/Navbar";
import Footer from "../component/Footer";

function About() {
  return (
    <>
      <Navbarr />
      <section className="breadcrumb-banner">
        <h3 className="heading">Gokyo Peak Travels and Tourism Pvt. Ltd.</h3>
        <nav className="breadcrumb ">
          <ul className="d-flex">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
      </section>
      <Footer/>
    </>
  );
}

export default About;
