import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Details: {params.id}</h1>
      <Link
        to=".."
        relative="path"
      >
        Back
      </Link>
    </>
  );
}

export default ProductDetailPage;
