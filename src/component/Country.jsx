import country1 from "../assets/images/country1.png"
import country2 from "../assets/images/country2.png"
import country3 from "../assets/images/country3.png"
import country4 from "../assets/images/country4.png"

const Country = () => {
  return (
<>
<div className="country container spacing">
      <div className="discover-top">
      <h2 className="heading">Discover Other <span>Countries</span></h2>
      <a href="#" className="btn">
        Explore More
      </a>
      </div>
      <div className="discover-bottom">
        <div className="country">
          <img src={country1} alt="Bhutan" />
          <h3 className="pic-text">
            Bhutan
          </h3>
        </div>
        <div className="country">
          <img src={country2} alt="Nepal" />
          <h3 className="pic-text">
            Nepal
          </h3>
        </div>
        <div className="country">
          <img src={country3} alt="Indonesia" />
          <h3 className="pic-text">
            Indonesia
          </h3>
        </div>
        <div className="country">
          <img src={country4} alt="Thailand" />
          <h3 className="pic-text">
            Thailand
          </h3>
        </div>
      </div>
    </div>
    </>
  );
};

export default Country;
