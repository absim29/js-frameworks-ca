import React, { useEffect, useState } from 'react';
import { useFetch } from './hooks/useFetch';

const url = 'https://v2.api.noroff.dev/online-shop';

function App() {
  const { data, isError, isLoading } = useFetch(url);
  // const [data, setData] = useState([]);
  // // State for holding our loading state
  // const [isLoading, setIsLoading] = useState(false);
  // // State for holding our error state
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   async function fetchData() {
  //     // Turn on the loading state each time we do an API call
  //     setIsLoading(true);
  //     // Reset the error state in case there as an error previously
  //     setIsError(false);

  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const result = await response.json();
  //       setData(result.data);
  //     } catch (error) {
  //       setIsError(true);
  //     }

  //     setIsLoading(false);
  //   }

  //   fetchData();
  // }, []);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}> {/* Adding a unique key prop */}
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <p>Discounted Price: ${item.discountedPrice.toFixed(2)}</p>
          <img src={item.image.url} alt={item.image.alt || item.title} />
          <p>Rating: {item.rating}</p>
          <ul>
            {item.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          {item.reviews.length > 0 && (
            <div>
              <h3>Reviews:</h3>
              <ul>
                {item.reviews.map((review) => (
                  <li key={review.id}>
                    <strong>{review.username}:</strong> {review.description} (Rating: {review.rating})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
