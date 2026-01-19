import React from "react";
import { Carousel } from "react-bootstrap";
import MainImg1 from "./../assets/main1.jpg";
import MainImg2 from "./../assets/main2.jpg";
import MainImg3 from "./../assets/main3.jpg";

function MainSlide() {
  return (
    <section className="main-slide">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={MainImg1} alt="S/S 2024" />
          <p>S/S 2024</p>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img src={MainImg2} alt="Pops of colour" />
          <p>Pops of colour</p>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img src={MainImg3} alt="Spring texture" />
          <p className="color">Spring texture</p>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default MainSlide;
