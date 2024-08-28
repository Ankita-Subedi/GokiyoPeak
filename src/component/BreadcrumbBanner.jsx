import Navbar from '../component/Navbar'

const BreadcrumbBanner = () => {
  return (
    <>
    <Navbar/>
    <section className="breadcrumb-banner">
        <h3 className="heading">Gokyo Peak Travels and Tourism Pvt. Ltd.</h3>
        <nav className="breadcrumb ">
          <ul className="d-flex">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default BreadcrumbBanner

