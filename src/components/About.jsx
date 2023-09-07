import React from 'react'
import aboutImage from './image/about.avif'
import { Link } from 'react-router-dom'


const About = () => {
  return (

    <div className="container_abt mt-5  border rounded p-4 text-light bg-dark">
      <div className="row">
        <div className="col-md-6">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac ligula vitae arcu
            mattis varius nec sit amet urna.
          </p>
          <p>
            Curabitur fermentum malesuada felis, vel scelerisque neque congue in. Sed convallis
            tincidunt tristique. Nam eget nisl ut quam volutpat finibus.
          </p>
          <Link to='/AboutPage' className="btn btn-outline-primary">
            About Us
          </Link>
        </div>
        <div className="col-md-6 mb-4">
          <div className="about-image">
            <img src={aboutImage} alt="About Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default About