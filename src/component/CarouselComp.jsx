import adv1 from "../assets/images/adv1.png"
import adv2 from "../assets/images/adv2.png"
import adv3 from "../assets/images/adv3.png"
import adv4 from "../assets/images/adv4.png"
import Adventure from "./Adventure"

export default function CarouselComp() {
  const images =[

    {src: adv1, text: "Trekking"},
    {src: adv2, text: "Expeditions"},
    {src: adv3, text: "Paragliding"},
    {src: adv4, text: "Mountain Bike"},
  ];
  return (
    <div>
      <Adventure images={images}/>
    </div>
  )
}
