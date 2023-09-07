import React from 'react'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import logo from './image/logo.jpg';


const Header = () => {
    
    
  return (
    <header className="header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand mx-4" to='/Home'>
        <img src={logo} alt="Logo" width="50" /> 
        Cinema
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse d-flex justify-content-end"  id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
          <Link className='nav-link' to='/Home'>
              Home
            </Link>
          </li>
          <li className="nav-item">
           <Link className='nav-link'  to='/GalleryPage'>
              Gallery
            </Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link'  to='/AboutPage'>
              About
            </Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link'  to='/ContactPage'>
              Contact
            </Link>
          </li>
        </ul>

        <form className="form-inline my-2 my-lg-0">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
      </div>
    </nav>
  </header>
  )
}

export default Header