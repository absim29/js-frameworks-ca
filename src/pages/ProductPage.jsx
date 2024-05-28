import { useParams } from "react-router-dom";
import { useFetchSingle } from "../hooks/useFetchSingle";

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

  console.log("Data:", data);
  console.log("Is Error:", isError);
  console.log("Is Loading:", isLoading);

  return (
    <div className="mainContainer">
      <div className="box">
        <div className="card">
          <img src={data.image.url} alt={data.image.alt || data.title} className="image" />
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>Price: ${data.price.toFixed(2)}</p>
          <p>Discounted Price: ${data.discountedPrice.toFixed(2)}</p>
          <p>Rating: {data.rating}</p>
          <ul>
            {data.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
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

    </div>
  );
}

export default Post;
