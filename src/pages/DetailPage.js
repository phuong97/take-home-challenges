import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PublicNavBar from "../component/PublicNavBar";
const DetailPage = () => {
  const { id } = useParams();
  const URL = "https://api.giphy.com/v1/";
  const API_key = "l9ZzUfxmf0VH7TNFFC46TjT4Rn6GkDD7";
  const [gif, setGif] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }

    async function fetchData() {
      setLoading(true);
      const url = `${URL}gifs/${id}?api_key=${API_key}`;
      const response = await fetch(url);
      const dataGIF = await response.json();
      console.log(dataGIF);
      setGif(dataGIF.data);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <PublicNavBar />
      <div>
        {loading && typeof gif === "undefined" ? (
          <h2> Loading</h2>
        ) : (
          <div className="detail-page-container">
            <Card style={{ width: "18rem" }} key={gif.id}>
              {/* <Card.Img variant="top" src={gif.images.original.webp} /> */}
              <Card.Body>
                <Card.Title>{gif.id}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
