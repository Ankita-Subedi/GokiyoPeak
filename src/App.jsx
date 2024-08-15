// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from "./component/Aboutus";
import Banner from "./component/Banner";
import Experience from "./component/Experience";
import Navbar from "./component/Navbar";
import CarouselComp from "./component/CarouselComp";
import WhyUs from "./component/WhyUs";
import Featured from "./component/Featured";
import Country from "./component/Country";
import Customize from "./component/Customize";
import Everest from "./component/Everest";
function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Aboutus/>
      <Experience/>
      <CarouselComp/>
      <WhyUs/>
      <Featured/>
      <Country/>
      <Customize/>
      <Everest/>
    </>
  );
}

export default App;
