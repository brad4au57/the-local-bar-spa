import React from "react";
import Carousel from "react-bootstrap/Carousel";

// Images
// import taps from "../assets/on-tap.jpg";
// import wine from "../assets/wine-sign.jpeg";
// import billards from "../assets/billards-table.jpeg";

export default function BarCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1} className="justify-content-center">
        <div id="bar-taps-img" className="d-block w-100" alt="Bar taps" />
        <Carousel.Caption>
          <h3>Great Beers On Tap</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1}>
        <div id="wine-sign" className="d-block w-100" alt="Wine sign" />
        <Carousel.Caption>
          <h3>Huge Selection of Wine</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1}>
        <div id="billards" className="d-block w-100" alt="Billards tables" />
        <Carousel.Caption>
          <h3>Billards And Darts</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
