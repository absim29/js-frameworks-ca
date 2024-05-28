import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const url = 'https://v2.api.noroff.dev/online-shop';


function Home() {
  const { data, isError, isLoading } = useFetch(url);
  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  console.log(data)
  return (
    <>
    <h1>Welcome to our store</h1>
    <div className="mainContainer">
      {data.map((item) => (
        <div key={item.id} className="box">
          <div className="card">
            <div>
            <img src={item.image.url} alt={item.image.alt || item.title} className="image" />
            <h2>{item.title}</h2>
            </div>
            <div>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Discounted Price: ${item.discountedPrice.toFixed(2)}</p>
          <Link to={`/post/${item.id}`}>
            <button className="btn">View</button>
          </Link>
          </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Home;
