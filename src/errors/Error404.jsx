import Footer from "../component/Footer";
import Navbarr from "../component/Navbar";

function Error404() {
  return (
    <>
      <Navbarr />
      <section className="breadcrumb-banner">
        <h1 className="heading">404 Page Not Found</h1>
      </section>
      <Footer />
    </>
  );
}

export default Error404;
