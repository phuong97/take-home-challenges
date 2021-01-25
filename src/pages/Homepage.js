import React, { useState, useEffect } from "react";
// import { Carousel } from "react-bootstrap";
// import MultipleItemsGIF from "../component/MultipleItemsGIF";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import PublicNavBar from "../component/PublicNavBar";
import InfiniteScroll from "react-infinite-scroll-component";

function Homepage() {
  const URL = "https://api.giphy.com/v1/";
  const API_key = "l9ZzUfxmf0VH7TNFFC46TjT4Rn6GkDD7";
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const url = `${URL}gifs/trending?api_key=${API_key}&limit=15&rating=g&offset=${offset}`;
      // const url = `${URL}gifs/trending?api_key=${API_key}&limit=15&rating=g`;
      const response = await fetch(url);
      const dataTrending = await response.json();

      // const totalData = [...dataTrending.data, ...gifs];
      // const totalData = gifs.concat(dataTrending)
      // setGifs(totalData);
      setGifs(dataTrending.data);
      // console.log(totalData);
    }
    fetchData();
  }, [gifs, offset]);
  // }, [gifs]);
  return (
    <div className="home-page">
      <PublicNavBar />
      <InfiniteScroll
        dataLength={gifs.length}
        next={() => setOffset(offset + 15)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
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
      </InfiniteScroll>
    </div>
  );
}

export default Homepage;
