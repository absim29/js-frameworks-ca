import { useFetch } from "../hooks/useFetch";

const url = 'https://v2.api.noroff.dev/online-shop';


function App() {
  const { data, isError, isLoading } = useFetch(url);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="mainContainer">
      {data.map((item) => (

        <div key={item.id} className="box">
          <div className="card">
            <img src={item.image.url} alt={item.image.alt || item.title} className="image" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Discounted Price: ${item.discountedPrice.toFixed(2)}</p>
          </div>
          <button className="btn">View</button>
        </div>

      ))}
    </div>
  );
}

export default App;
