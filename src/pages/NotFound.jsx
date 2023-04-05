import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold pb-5">404 Page not found</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
        eaque.
      </p>
      <p>
        Back to
        <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
