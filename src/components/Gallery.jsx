import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieImage1 from './image/avangers.jpg';
import MovieImage2 from './image/extraction1.jpg';
import MovieImage3 from './image/extraction2.jpg';
import HappyImage from './image/happie.jpg';



const MovieCard = ({ title, image, description }) => {
    return (
      <div className="col-md-4">
        <div className="card bg-dark text-white">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-outline-primary">
              Book Now
            </a>
          </div>
        </div>
      </div>
    );
  };


const Gallery = () => {
  return (
    <div>

    <div className="bg-light">
      <h2 className="text-center my-4">Movie Gallery</h2>

      <div className="container mt-4">
        <div className="row">
          <MovieCard
            title="Movie 1"
            image={MovieImage1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac ligula vitae arcu mattis varius nec sit amet urna."
          />
          <MovieCard
            title="Movie 2"
            image={MovieImage2}
            description="Sed commodo leo eu ligula malesuada, eu interdum erat efficitur. Curabitur feugiat ante vel nulla congue fermentum."
          />
          <MovieCard
            title="Movie 3"
            image={MovieImage3}
            description="Phasellus finibus ligula a sapien commodo varius. Nulla facilisi. Fusce laoreet massa eu commodo vestibulum."
          />
        </div>
      </div>
      <div className="container mt-4 mb-4">
        <div className="row">
          <MovieCard
            title="Movie 1"
            image={HappyImage}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac ligula vitae arcu mattis varius nec sit amet urna."
          />
          <MovieCard
            title="Movie 2"
            image={MovieImage1}
            description="Sed commodo leo eu ligula malesuada, eu interdum erat efficitur. Curabitur feugiat ante vel nulla congue fermentum."
          />
          <MovieCard
            title="Movie 3"
            image={MovieImage2}
            description="Phasellus finibus ligula a sapien commodo varius. Nulla facilisi. Fusce laoreet massa eu commodo vestibulum."
          />
        </div>
      </div>
    </div>


    </div>
  )
}

export default Gallery