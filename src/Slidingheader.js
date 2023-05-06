import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Home.css"

function Slidingheader() {
  return (
    <div>
      <Carousel className="home__image">
        <Carousel.Item>
          <img
            className="home__image d-block"
            src="https://m.media-amazon.com/images/I/61U0brqhneL._SX3000_.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  home__image"
            src="https://m.media-amazon.com/images/I/61RzGjo+nqL._SX3000_.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  home__image"
            src="https://m.media-amazon.com/images/I/71FZBWkUf7L._SX3000_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  home__image"
            src="https://m.media-amazon.com/images/I/611Hit0i2SL._SX3000_.jpg"
            alt="four slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  home__image"
            src="https://m.media-amazon.com/images/I/61lBYXj73FL._SX3000_.jpg"
            alt="five slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61iK8mPdMvL._SX3000_.jpg"
            alt="six slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61r0tAoKkRL._SX3000_.jpg"
            alt="seven slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/51mU6EVX9TL._SX3000_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/51mU6EVX9TL._SX3000_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/51mU6EVX9TL._SX3000_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/51mU6EVX9TL._SX3000_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
            
      </Carousel>
    </div>
  );
}

export default Slidingheader;
