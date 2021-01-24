import React, { useState, useEffect } from "react";
// import { Carousel } from "react-bootstrap";
// import MultipleItemsGIF from "../component/MultipleItemsGIF";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import PublicNavBar from "../component/PublicNavBar";
function Categories() {
  const URL = "https://api.giphy.com/v1/";
  const API_key = "l9ZzUfxmf0VH7TNFFC46TjT4Rn6GkDD7";
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const url = `${URL}gifs/categories?api_key=${API_key}`;

      const response = await fetch(url);
      const dataTrending = await response.json();
      // console.log(dataTrending);
      setGifs(dataTrending.data);
    }
    fetchData();
  });
  return (
    <div>
      {/* <MultipleItemsGIF gif={gif} /> */}
      <PublicNavBar />
      {/* <CardDeck> */}
      {gifs.map((g) => (
        <div>
          <ul>
            <li>{g.subcategories[0].name}</li>
            <img src={g.gif.images.original.url} />
          </ul>
        </div>
      ))}
      {/* </CardDeck> */}
    </div>
  );
}

export default Categories;
