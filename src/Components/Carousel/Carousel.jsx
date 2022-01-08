import React from 'react'
import "../Carousel/Carousel.css"
import { Carousel } from 'react-bootstrap'
import image1 from "../../assets/1.png"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"


const Carouse = () => {
    return (
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Electronics</h3>
      <p>Buy Now.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Blablabla</h3>
      <p>Just a Text</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Buy now</h3>
      <p>Or we will kill you bro.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
    )
}

export default Carouse