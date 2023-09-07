import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
     <footer className="bg-dark text-light p-4 text-center">
      <div className="container">
        <div className="row">
        <div class="col-md-4 ">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet justo id augue tristique tristique.</p>
        </div>

        <div class="col-md-4 ">
          <h4>Quick Links</h4>
          <ul class="list-unstyled">
            <li>
            <Link to='/Home'>
              Home
            </Link>
            </li>
            <li>
              <Link to='/AboutPage'>
                About
              </Link>
            </li>
            <li>
              <Link to='/Gallerypage'>
                Gallery
              </Link>
            </li>
            <li>
              <Link to='/ContactPage'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
       
          <div className="col-md-4">
                <h2>Search</h2>
              <form className="form-inline my-0 my-lg-0" >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
          </div>
       
          
        </div>
        <hr className="my-4" /> {/* Horizontal Line */}
        <div className="row mt-3">
          <div className="col">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer