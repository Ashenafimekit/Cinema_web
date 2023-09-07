import React from 'react'
import contactImage from './image/contact.jpg'
import { Link } from 'react-router-dom'

const Cont = () => {
  return (
    <div className="container_abt mt-0 border rounded p-4 text-dark bg-light">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="about-image">
            <img src={contactImage} alt="Contact Image" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac ligula vitae arcu
            mattis varius nec sit amet urna.
          </p>
          <p>
            Curabitur fermentum malesuada felis, vel scelerisque neque congue in. Sed convallis
            tincidunt tristique. Nam eget nisl ut quam volutpat finibus.
          </p>
          <Link to='/ContactPage' className="btn btn-outline-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
    )
}

export default Cont