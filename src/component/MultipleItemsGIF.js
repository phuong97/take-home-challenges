import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/style.css";
import React from "react";
import { Card } from "react-bootstrap";

const MultipleItemsGIF = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive} slidesToSlide={5}>
        {props.gif.map((g) => (
          <Card style={{ width: "18rem" }} key={g.id}>
            <Card.Img variant="top" src={g.images.downsized.url} />
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default MultipleItemsGIF;
