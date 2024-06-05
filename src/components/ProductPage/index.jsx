import React from "react";
import calculateDiscount from "../Discount";
import StarRating from "../StarRating";
import { useCart } from "../../context/Shop";

export const SingleProduct = ({ data }) => {
  const { addToCart } = useCart();
  const discount = calculateDiscount(data.price, data.discountedPrice);

  return (
    <div className="prodBox">
      <div className="prodCard">
        <div>
          <h1>{data.title}</h1>
          <img
            src={data.image.url}
            alt={data.image.alt || data.title}
            className="image"
          />
        </div>
        <div>
          <p>{data.description}</p>
          {discount > 0 ? (
            <>
              <p className="oldprice">Price: ${data.price.toFixed(2)}</p>
              <p className="newprice">
                New Price: ${data.discountedPrice.toFixed(2)}
              </p>
              <p className="discount">Discount: - {discount}%</p>
            </>
          ) : (
            <p className="newprice">Price: ${data.price.toFixed(2)}</p>
          )}

          <p>
            Rating: <StarRating rating={data.rating} />
          </p>
          <div className="tags">
            Tags:
            {data.tags.map((tag, index) => (
              <p key={index}>#{tag}</p>
            ))}
          </div>
        </div>
        <div>
          {data.reviews.length > 0 && (
            <div>
              <h3>Reviews:</h3>
              <ul>
                {data.reviews.map((review) => (
                  <p key={review.id}>
                    <strong>{review.username}:</strong> {review.description}{" "}
                    (Rating: {review.rating})
                  </p>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="btn-wrap">
        <button className="btn" onClick={() => addToCart(data)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
