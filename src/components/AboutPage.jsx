import React from 'react'
import aboutImage from './image/about.avif'
import contactImage from './image/contact.jpg'
import image from './image/7.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';



const AboutPage = () => {
  return (
    <div>
        <Header/>
        

        <div className="container mt-2">
            <h1 className='text-center my-0'>about us</h1>
            <h1 className="text-center my-5">About Us</h1>


            <div className="row">
                {/* Card 1 */}
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                    <img src={aboutImage} className="card-img-top" alt="Service 1" />
                    <div className="card-body">
                    <h5 className="card-title">Service Name</h5>
                    <p className="card-text">At Your Company Name, we specialize in offering Service Name that cater to Target Audience. From Brief Description of Service, we ensure that you receive top-tier Service Type that adds value to your business.</p>
                    <a href="#" className="btn btn-outline-primary">Learn More</a>
                    </div>
                </div>
                </div>

                {/* Card 2 */}
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                    <img src={contactImage} className="card-img-top" alt="Service 2" />
                    <div className="card-body">
                    <h5 className="card-title">Service Name</h5>
                    <p className="card-text">Elevate your Industry goals with our Service Name solutions. Whether you're looking to Service Goal 1, Service Goal 2, or Service Goal 3, our team has the expertise to guide you every step of the way.</p>
                    <a href="#" className="btn btn-outline-primary">Learn More</a>
                    </div>
                </div>
                </div>

                {/* Card 3 */}
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                    <img src={image} className="card-img-top" alt="Service 3" />
                    <div className="card-body">
                    <h5 className="card-title">Service Name</h5>
                    <p className="card-text">At Your Company Name, we redefine excellence with our Service Name offerings. Whether you're seeking Service Goal, Service Goal, or Service Goal, our dedicated team is equipped to exceed your expectations.</p>
                    <a href="#" className="btn btn-outline-primary">Learn More</a>
                    </div>
                </div>
                </div>
            </div>

            <div className="my-5 text-center">
            <h4>Contact Information</h4>
            <p>Your Company Name</p>
            <p>Address: Company Address</p>
            <p>Phone: Contact Number</p>
            <p>Email: Contact Email</p>
            <a href="#" className="btn btn-outline-primary">Contact Us</a>
        </div>
        </div>

        <Footer/>
    </div>
  )
}

export default AboutPage