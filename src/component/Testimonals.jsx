import cloud1 from "../assets/images/cloud1.png";
import cloud2 from "../assets/images/cloud2.png";
import profile from "../assets/images/profile.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Stories = () => {
  const reviews = [
    {
      id: 1,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sint vel adipisci doloribus officia aperiam earum fugit iusto dolores molestias, ad cumque dolorem accusamus cum dicta sapiente voluptates laboriosam tempora at illo. Ipsum, dolorem atque?",
      name: "Leslie Alexander",
      location: "Canada",
      image: profile,
    },
    {
      id: 2,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sint vel adipisci doloribus officia aperiam earum fugit iusto dolores molestias, ad cumque dolorem accusamus cum dicta sapiente voluptates laboriosam tempora at illo. Ipsum, dolorem atque?",
      name: "Leslie Alexander",
      location: "Canada",
      image: profile,
    },
  ];

  return (
    <div className="testimonals">
      <div className="content ">
        <div className="top-cloud-wrapper">
          <img src={cloud1} className=" " alt="cloud" />
          <img src={cloud1} className=" " alt="cloud" />
          <img src={cloud1} className=" " alt="cloud" />
          <img src={cloud1} className=" " alt="cloud" />
          <img src={cloud1} className=" " alt="cloud" />
          <img src={cloud1} className=" " alt="cloud" />
        </div>

        <div className="container d-flex">
          <div className="glimpse d-flex">
            <h4 className="heading">
              Glimse of Inspiring <span className="stories">stories</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              eligendi soluta quasi doloribus tenetur. Quas facere ipsa
              quibusdam libero commodi!
            </p>
            <span>
              <a href="#">
                <i className="fa-solid fa-circle-play"></i>
              </a>

              <p className="heading">WATCH THE VIDEO TO FIND OUT MORE!</p>
            </span>
          </div>
          <Carousel responsive={responsive}>
            {reviews.map((review) => (
              <div key={review.id} className="review d-flex">
                <i className="fa-solid fa-quote-right"></i>
                <p>{review.text}</p>
                <div className="identity d-flex">
                  <div className="reviewer-img">
                    <img src={profile} alt="profile" />
                  </div>
                  <div className="name d-flex">
                    <p className="heading">{review.name}</p>
                    <p className="paragraph">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
    
          {/* <div className="review d-flex">
            <i className="fa-solid fa-quote-right"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              atque nesciunt necessitatibus officia, tempora accusantium, iusto
              alias blanditiis facere voluptatibus obcaecati vitae iste
              doloribus eaque. Nulla facere suscipit culpa Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Libero, hic!
            </p>
            <div className="identity d-flex">
              <div className="reviewer-img">
                <img
                  src={profile}
                  alt="profile"
                />
                </div>
                <div className="name d-flex">
                  <p className="heading">Leslie Alexander</p>
                  <p className="paragraph">Canada</p>
                </div>
            </div>
          </div> */}
        </div>

        <img src={cloud2} className="cloud2" alt="cloud" />
      </div>
    </div>
  );
};

export default Stories;
