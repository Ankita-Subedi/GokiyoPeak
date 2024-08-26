import country1 from "../assets/images/country1.png";
import country2 from "../assets/images/country2.png";
import country3 from "../assets/images/country3.png";

const Blogs = () => {
  return (
    <div className="blogs container d-flex ">
      <h3 className="heading">
        Explore the World: Journey Through <span> Our Travel Blogs</span>
      </h3>

      <div className="blog-section d-flex">
        <div className="blog1">
          <div className="blog-img">
            <img src={country1} alt="blog" />
          </div>
          <p className="blog-date">8 August 2023</p>
          <p className="paragraph">
            Everest Base Camp Trek Guide Everything You Need to Know
          </p>
        </div>
        <div className="blog1">
          <div className="blog-img">
            <img src={country2} alt="blog" />
          </div>
          <p className="blog-date">8 August 2023</p>
          <p className="paragraph">
            Everest Base Camp Trek Guide Everything You Need to Know
          </p>
        </div>
        <div className="blog1">
          <div className="blog-img">
            <img src={country3} alt="blog" />
          </div>
          <p className="blog-date">8 August 2023</p>
          <p className="paragraph">
            Everest Base Camp Trek Guide Everything You Need to Know
          </p>
        </div>
      </div>
      <a href="#" className="btn">
        View all Blogs
      </a>
    </div>
  );
};

export default Blogs;
