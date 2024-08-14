import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import feature1 from "../assets/images/feature1.png";
import feature2 from "../assets/images/feature2.png";
import feature3 from "../assets/images/feature3.png";
import feature4 from "../assets/images/feature4.png";
import feature5 from "../assets/images/feature5.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const FeaturedCarousel = () => {
    const featuredImg = [feature3, feature2, feature3, feature4, feature3];
  return (
    <Carousel responsive={responsive} className="featured-card">
      {featuredImg.map((image, index)=>(
        <div key={index} className="carousel-item">
              <img src={image} alt="image" className="carousel-img"/>
        </div>
      ))}
    </Carousel>
  )
}

export default FeaturedCarousel
