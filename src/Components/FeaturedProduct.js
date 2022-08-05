import React, { useState, useEffect } from "react";
import axios from "axios";
// import baseUrl from "../http/axios";
import "../App.css";
const FeaturedProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios({ method: "GET", url: "https://fakestoreapi.com/products" })
      .then((res) => {
        console.log("Data", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(true));
  }, []);

  return (
    <div className="container">
      {loading && (
       
          <h1>Loading ...</h1>
      )}
      {data.map((item) => (
        <div key={item.id}>
          <h5 className="card-title">{`${item.title}`}</h5>
          <img className="card-img-top" src={item.image} />
          <div className="card-body ">
            <h5 className="card-title">{`${item.category}`}</h5>
            <p className="card-text">{`Price ${item.price}`}</p>
            <p className="card-text">{`${item.description}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProduct;
{
  /* <div className="card">
<h5 className="card-title">{`${item.title}`}</h5>
<img className="card-img-top" src={item.image} />
<div className="card-body ">
  <h5 className="card-title">{`${item.category}`}</h5>
  <p className="card-text">{`Price ${item.price}`}</p>
  <p className="card-text">{`${item.description}`}</p>
</div>
</div> */
}
