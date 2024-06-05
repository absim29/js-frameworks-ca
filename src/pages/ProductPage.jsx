import { useParams } from "react-router-dom";
import { useFetchSingle } from "../hooks/useFetchSingle";

import SingleProduct from "../components/ProductPage";

const url = "https://v2.api.noroff.dev/online-shop";

function Post() {
  let { id } = useParams();

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

  return (
    <div className="prodContainer">
      <SingleProduct key={data.id} data={data} />
    </div>
  );
}

export default Post;
