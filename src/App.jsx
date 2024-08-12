// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from "./component/Aboutus";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Aboutus/>
    </>
  );
}

export default App;
