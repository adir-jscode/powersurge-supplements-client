import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/sports-nutrition-supplements-and-chemistry-for-bodybuilding-in-gym-picture-id1270924392?k=20&m=1270924392&s=612x612&w=0&h=5c3BjjWjmPsHgcyAke32r_n3XzZjCGq2rkjuOYuLe7M="
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Optimum Nutrition</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.bodybuilding.com/images/2018/december/supplement-company-of-the-month-muscletech-header-960x540.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Nitrotech</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.gymsupplementscenterbangladesh.com/uploads/slider/Untitl.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>MusclePharm</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
       
    );
};

export default Banner;