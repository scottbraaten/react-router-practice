import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>My page</h1>
      <p>
        Go to <Link to="/products">products</Link>
      </p>
    </>
  );
}
export default HomePage;
