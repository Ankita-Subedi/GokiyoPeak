import Footer from "../component/Footer";
import BreadcrumbBanner from "../component/BreadcrumbBanner";
import Aboutus from "../component/Aboutus";
import Customize from "../component/Customize";
import Association from "../component/Association";

function About() {
  return (
    <>
      <BreadcrumbBanner/>
      <Aboutus/>
      <Customize/>
      <Association/>
      <Footer/>
    </>
  );
}

export default About;
