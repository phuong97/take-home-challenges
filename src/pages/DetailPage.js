import React, { useState, useEffect } from "react";
// import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
const DetailPage = () => {
  const { id } = useParams();
  const URL = "https://api.giphy.com/v1/";
  const API_key = "l9ZzUfxmf0VH7TNFFC46TjT4Rn6GkDD7&";
  const [gif, setGif] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const url = `${URL}gifs/trending?api_key=${API_key}&limit=25&rating=g`;
      const respone = await fetch(url);
      const detailData = await respone.json();
      // console.log(detailData);
      setGif(detailData.data);
    }
    fetchData();
  }, [id]);
  return (
    <div>
      <h1>{gif.username}</h1>
    </div>
  );
};

export default DetailPage;
