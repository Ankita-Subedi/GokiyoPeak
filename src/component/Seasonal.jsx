import season1 from "../assets/images/season1.png";
import season2 from "../assets/images/season2.png";
import season3 from "../assets/images/season3.png";
import season4 from "../assets/images/season4.png";
import country1 from "../assets/images/country1.png";
import country2 from "../assets/images/country2.png";
import country3 from "../assets/images/country3.png";
import country4 from "../assets/images/country4.png";

const Seasonal = () => {
  return (
    <>
      <div className="season spacing">
        <div className="container">
          <h3 className="heading">
            Travel Inspired By <span>Seasons</span>
          </h3>
          <div className="options">
            <div className="single-option">
              <a href="">
                <div className="icon">
                  <img src={season1} alt="Spring" />
                  <p>Spring</p>
                </div>
              </a>
              <a href="">
                <div className="icon">
                  <img src={season2} alt="Summer" />
                  <p>Summer</p>
                </div>
              </a>
              <a href="">
                <div className="icon">
                  <img src={season3} alt="Autumn" />
                  <p>Autumn</p>
                </div>
              </a>
              <a href="">
                <div className="icon">
                  <img src={season4} alt="Winter" />
                  <p>Winter</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="packages container spacing">
        <div className="single-package">
          <img src={country1} alt="img" />
          <p className="pic-text">Tashi lapcha pass trek</p>
        </div>
        <div className="single-package">
          <img src={country2} alt="img" />
          <p className="pic-text">Tashi lapcha pass trek</p>
        </div>
        <div className="single-package">
          <img src={country3} alt="img" />
          <p className="pic-text">Tashi lapcha pass trek</p>
        </div>
        <div className="single-package">
          <img src={country4} alt="img" />
          <p className="pic-text">Tashi lapcha pass trek</p>
        </div>
        <div className="single-package">
          <img src={country3} alt="img" />
          <p className="pic-text">Tashi lapcha pass trek</p>
        </div>
        <div className="single-package">
          <img src={country4} alt="img" />
          <p className="pic-text">Tashi lapcha pass trek</p>
        </div>
        <div className="single-package">
          <img src={country1} alt="img" />
          <p className="pic-text">Tashi lapcha pass trek</p>
        </div>
        <div className="single-package">
          <img src={country2} alt="img" />
          <p className="pic-text">Tashi lapcha pass trek</p>
        </div>
      </div>

      <div className="container spacing">
        <a href="#" className="packages-btn btn mx-auto">
          View all packages
        </a>
      </div>
    </>
  );
};

export default Seasonal;
