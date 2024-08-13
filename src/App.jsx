// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from "./component/Aboutus";
import Banner from "./component/Banner";
import Experience from "./component/Experience";
import Navbar from "./component/Navbar";
import CarouselComp from "./component/CarouselComp";
import WhyUs from "./component/WhyUs";
function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Aboutus/>
      <Experience/>
      <CarouselComp/>
      <WhyUs/>
    </>
  );
}

export default App;
