import aslogo1 from '../assets/images/aslogo1.png'

const Association = () => {
  return (
    <div className="association container d-flex spacing">
      <h3 className="heading">Connected Journeys: Our <span>Partnerships </span>and <span>Associations</span></h3>
      <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fuga illo. Cumque vero similique dicta maiores officiis sequi eius? Adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo debitis nihil veniam tempore? Delectus, omnis!</p>
      <div className="association-logo d-flex">
        <a href="#">
          <img src={aslogo1} alt="logo" />
        </a>
        <a href="#">
          <img src={aslogo1} alt="logo" />
        </a>
        <a href="#">
          <img src={aslogo1} alt="logo" />
        </a>
        <a href="#">
          <img src={aslogo1} alt="logo" />
        </a>
        <a href="#">
          <img src={aslogo1} alt="logo" />
        </a>
        <a href="#">
          <img src={aslogo1} alt="logo" />
        </a>
      </div>
    </div>
  )
}

export default Association
