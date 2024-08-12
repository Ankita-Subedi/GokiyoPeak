import Findform from "./Findform";

export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-content">
          <h1 className="heading">
            Explore the world together with{" "}
            <span>Gokiyo Peak Travels and Tourism.</span>
          </h1>
          <p className="paragh">
            Find Next Place To Visit. Discover amazing places at exclusive deals
          </p>
          <a href="#" className="btn">
            Contact Us
          </a>
        </div>
        <Findform />
      </div>
        <a href="#">
          <i className="fa-solid fa-angles-down"></i>
        </a>
    </section>
  );
}
