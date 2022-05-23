import React from "react";
import { Carousel, Container } from "react-bootstrap";
import useItems from "../../custom_hooks/useItems";

const Banner = () => {
  const { data } = useItems();

  console.log("data Show ", data);

  return (
    <Container>
          <Carousel fade>
      {data.map((d) => (
          <Carousel.Item>
            <img className="d-block  justify-content-center" src={d.image} alt={d.itemName} />
            <Carousel.Caption>
              <h3>{d.itemName}</h3>
              <p>{d.title}</p>
            </Carousel.Caption>
          </Carousel.Item>
        
      ))}
    </Carousel>
    </Container>
  );
};

export default Banner;
