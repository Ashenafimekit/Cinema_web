import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div>
        <Header/>

    <div>
      <div className="container mt-3">
      <h1 className="text-center mb-4">About Us</h1>
      <h1 className="text-center mb-4">Contact Us</h1>


      <div className="row">
        {/* Left Column with Contact Form */}
        <div className="col-md-6 mb-4">
          <h4>Contact Us</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        
        {/* Right Column with Map */}
        <div className="col-md-6 mb-4">
          <h4>Our Location</h4>
          <div style={{ width: '100%', height: '300px' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62940.84667754445!2d41.7873158181664!3d9.612231573514991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163101db1195c6e7%3A0x10209694f03469cc!2sDire%20Dawa!5e0!3m2!1sen!2set!4v1694112081594!5m2!1sen!2set" width="100%" height="300" frameBorder="0" style={{ border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </div>
      </div>

      {/* Contact Information in the Middle */}
      <div className="text-center mb-4">
        <h4>Contact Information</h4>
        <p>Our Cinema</p>
        <p>Address: Company Address</p>
        <p>Phone: +251987654321</p>
        <p>Email: Cinema@gmail.com</p>
      </div>
    </div>
    </div>

    <Footer/>

    </div>
  )
}

export default ContactPage