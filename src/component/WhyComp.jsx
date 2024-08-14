import why1 from "../assets/images/why1.png";
import why2 from "../assets/images/why2.png";
import why3 from "../assets/images/why3.png";

export default function WhyComp() {
  const whyusdata = [
    {
      logo: why1 ,
      title: "30 years of experience",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium rerum eveniet accusantium tenetur maxime voluptas a",
    },
    {
      logo:  why2 ,
      title: "Great Customer Supports",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis officiis tempore tempora excepturi eligendi aperiam neque",
    },
    {
      logo:  why3 ,
      title: "Best-price guarantee",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas a laboriosam quis possimus eius corporis",
    },
  ];
  return (
    <div className="whycomp-container">
      {whyusdata.map((item, index) => (
        <div key={index} className="whycomp-item">
          <img src={item.logo} alt={item.title} />
          <h4>{item.title}</h4>
          <p className="paragraph">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
