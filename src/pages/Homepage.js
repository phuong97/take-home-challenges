import React, { useState, useEffect } from "react";
// import { Carousel } from "react-bootstrap";
// import MultipleItemsGIF from "../component/MultipleItemsGIF";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";

function Homepage() {
  const URL = "https://api.giphy.com/v1/";
  const API_key = "l9ZzUfxmf0VH7TNFFC46TjT4Rn6GkDD7&";
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const url = `${URL}gifs/trending?api_key=${API_key}&limit=25&rating=g`;
      const response = await fetch(url);
      const dataTrending = await response.json();
      console.log(dataTrending);
      setGifs(dataTrending.data);
    }
    fetchData();
  });
  return (
    <div>
      {/* <MultipleItemsGIF gif={gif} /> */}
      {/* <PublicNavBar /> */}
      <CardDeck>
        {gifs.map((g) => (
          <div>
            <Card style={{ width: "18rem" }}>
              <Link to={`/gif/${g.id}`} key={g.id}>
                <Card.Img variant="top" src={g.images.original.webp} />
              </Link>
            </Card>
          </div>
        ))}
      </CardDeck>
    </div>
  );
}

export default Homepage;
