import everest from "../assets/images/everest.png"

const Everest = () => {
  return (
    <div className="everest">
        <div className="container">
      <div className="content">
        <h3 className="heading">
          Trip of the month: <span>Everest base camp Trek</span>
        </h3>
        <div className="icons">
          <div className="single-icon paragraph">
            <i className="fa-regular fa-clock"></i>
            <p>12 Days</p>
          </div>
          <div className="single-icon paragraph">
            <i className="fa-solid fa-dollar-sign"></i>
            <p>$500.00</p>
          </div>
          <div className="single-icon paragraph">
            <i className="fa-solid fa-users-line"></i>
            <p>1-17 person</p>
          </div>
          <div className="single-icon paragraph">
            <i className="fa-brands fa-think-peaks"></i>
            <p>4560 ft.</p>
          </div>
        </div>
        <p className="paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          expedita. Repellendus laboriosam incidunt eos quas, aperiam quis ea
          omnis magnam earum? Repellat consequuntur eveniet laudantium?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Unde, quos?
        </p>
        
          <a href="#" className="btn">Explore<i className="fa-solid fa-compass"></i></a>

      </div>
      <div className="picture">
        <img src={everest} alt="Everest" />
      </div>
      </div>
    </div>
  );
};

export default Everest;
