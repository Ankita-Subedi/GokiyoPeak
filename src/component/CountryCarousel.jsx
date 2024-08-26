import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import country1 from "../assets/images/country1";
import country2 from "../assets/images/country2";
import country3 from "../assets/images/country3";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CountryCarousel = () => {
  const countryContent = [
    {
      img: country1,
      text: "Bhutan",
    },
    {
      img: country2,
      text: "China",
    },
    {
      img: country3,
      text: "Tibet",
    },
    {
      img: country2,
      text: "Indonesia",
    },
  ];
  return (
    <Carousel responsive={responsive}>
      {countryContent.map((item, index) => (
        <div key={index}>
          {/* Content goes here */}
        </div>
      ))}
    </Carousel>
  );
};
export default CountryCarousel
