import { useParams } from "react-router-dom";
import { useFetchSingle } from "../hooks/useFetchSingle";
import StarRating from "../components/StarRating";
import calculateDiscount from "../components/Discount";

const url = 'https://v2.api.noroff.dev/online-shop';

function Post() {
  let { id } = useParams();
  console.log(id);

  const { data, isError, isLoading } = useFetchSingle(url, id);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  const discount = calculateDiscount(data.price, data.discountedPrice);

  return (
    <div className="prodContainer">
      <div className="prodBox">
        <div className="prodCard">
          <div>
          <h1>{data.title}</h1>
          <img src={data.image.url} alt={data.image.alt || data.title} className="image" />
          </div>
          <div>
          <p>{data.description}</p>
          {discount > 0 ? (
            <>
              <p className="oldprice">Price: ${data.price.toFixed(2)}</p>
              <p className="newprice">New Price: ${data.discountedPrice.toFixed(2)}</p>
              <p className="discount">Discount: - {discount}%</p>
            </>
            ) : (<p className="newprice">Price: ${data.price.toFixed(2)}</p>)}
          
          <p>Rating: <StarRating rating={data.rating} /></p>
          <p className="tags">Tags:
            {data.tags.map((tag, index) => (
              <p key={index}>#{tag}</p>
            ))}
          </p>
          </div>
          <div>
          {data.reviews.length > 0 && (
            <div>
              <h3>Reviews:</h3>
              <ul>
                {data.reviews.map((review) => (
                  <li key={review.id}>
                    <strong>{review.username}:</strong> {review.description} (Rating: {review.rating})
                  </li>
                ))}
              </ul>
            </div>
          )}
          </div>
        </div>
            <div className="btn-wrap">
            <button className="btn">Add to cart</button>
            </div>
      </div>
    </div>
  );
}

export default Post;
