import React, { useState, useEffect } from "react";

import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PublicNavBar from "../component/PublicNavBar";
function Categories() {
  const URL = "https://api.giphy.com/v1/";
  const API_key = "l9ZzUfxmf0VH7TNFFC46TjT4Rn6GkDD7";
  const [gifsAction, setGifsAction] = useState([]);
  const [gifsSports, setGifsSports] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const url = `${URL}gifs/search?api_key=${API_key}&q=actions`;

      const response = await fetch(url);
      const dataAction = await response.json();
      // console.log(dataTrending);
      setGifsAction(dataAction.data);
    }
    fetchData();
  });

  useEffect(() => {
    async function fetchData() {
      const url = `${URL}gifs/search?api_key=${API_key}&q=sports`;

      const response = await fetch(url);
      const dataSports = await response.json();

      setGifsSports(dataSports.data);
    }
    fetchData();
  });

  return (
    <div className="categories-page">
      {/* <MultipleItemsGIF gif={gif} /> */}
      <PublicNavBar />
      <p className="text-h3">Actions</p>
      <Carousel
        plugins={[
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 5,
            },
          },
        ]}
      >
        {gifsAction.map((a) => (
          <div>
            <Card style={{ width: "18rem" }}>
              <Link to={`/gif/${a.id}`} key={a.id}>
                <Card.Img variant="top" src={a.images.original.webp} />
              </Link>
            </Card>
          </div>
        ))}
      </Carousel>

      <p className="text-h3">Sports</p>
      <Carousel
        plugins={[
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 5,
            },
          },
        ]}
      >
        {gifsSports.map((s) => (
          <div>
            <Card style={{ width: "18rem" }}>
              <Link to={`/gif/${s.id}`} key={s.id}>
                <Card.Img variant="top" src={s.images.original.webp} />
              </Link>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Categories;
