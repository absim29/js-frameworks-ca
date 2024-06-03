import { useFetch } from "../hooks/useFetch";
import Product from "../components/Product";

const url = 'https://v2.api.noroff.dev/online-shop';


function Home() {
  const { data, isError, isLoading } = useFetch(url);
  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
    <h1>Welcome to our store</h1>
    <div className="mainContainer">
      {data.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
    </>
  );
}

export default Home;
