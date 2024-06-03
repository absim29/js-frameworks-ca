import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/Shop';

const Product = ({ item }) => {

  const { addToCart } = useCart();

  return (
  <>
    <div className="box">
      <div className="card">
        <Link to={`/post/${item.id}`}>
          <div>
            <img src={item.image.url} alt={item.image.alt || item.title} className="image" />
            <h2>{item.title}</h2>
          </div>
          <div>
            <p>{item.description}</p>
            <p className="newprice">Price: ${item.discountedPrice.toFixed(2)}</p>
          </div>
        </Link>
        <button className="btn" onClick={() => addToCart(item)}>Add to cart</button>
      </div>
    </div>
  </>
  );
};

export default Product;
