import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
  return (
    <div className="box">
      <div className="card">
        <div>
          <img src={item.image.url} alt={item.image.alt || item.title} className="image" />
          <h2>{item.title}</h2>
        </div>
        <div>
          <p>{item.description}</p>
          <p className="newprice">Price: ${item.discountedPrice.toFixed(2)}</p>
          <Link to={`/post/${item.id}`}>
            <button className="btn">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
