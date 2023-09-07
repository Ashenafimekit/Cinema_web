import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './image/drop.avif';
import image2 from './image/tree.jpg';
import image3 from './image/7.jpg';

const images = [
  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 2' },
  { src: image3, alt: 'Image 3' },
];

const Slide = () => {
  const imageHeight = '300px';
  return (
    <div>
      <div>
        <h1>Welcome to Our Website</h1>
        <Carousel showThumbs={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} style={{ height: imageHeight }} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Slide