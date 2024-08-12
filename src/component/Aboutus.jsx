import aboutus from "../assets/images/aboutus.png"

export default function Aboutus() {
  return (
    <div className="aboutus">
      <div className="aboutus-content">
         <h2 className="heading">
         Explore, Trek, Thrive: Your Gateway to Adventure with <span>Gokiyo Peak Travels and Tourism Pvt. Ltd.</span>
         </h2>
         <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quaerat eum, est, nobis iste neque optio voluptate quis consectetur magnam impedit non corporis doloribus modi. Accusamus alias laboriosam quaerat expedita dolorum optio ullam nobis, voluptatem soluta dolore fuga commodi provident distinctio pariatur voluptatum laborum accusantium. Placeat, eum mollitia possimus perspiciatis explicabo accusantium, enim qui veniam minima odit temporibus, porro quam?
         </p>

         <a href="#" className="btn">Explore More</a>
      </div>
      <div className="aboutus-picture">
       <img src={aboutus} alt="aboutus" />
      </div>
    </div>
  )
}
