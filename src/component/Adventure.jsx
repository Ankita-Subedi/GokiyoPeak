import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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
export default function Adventure({ images }) {
  return (
      <Carousel responsive={responsive} className="card">
        {images.map((item, index) => (
          <div key={index} className="carousel-item">
            <img
              src={item.src}
              alt="image"
              className="carousel-image"
            />
            <div className="carousel-text">
              <h6 className="heading">{item.text}</h6>
              <a href="#"><i className="fa-solid fa-circle-plus"></i></a>
            </div>
          </div>
        ))}
      </Carousel>
  );
}