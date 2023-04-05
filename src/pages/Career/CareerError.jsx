import { useRouteError } from "react-router";

export default function CareerError() {
  const error = useRouteError();

  return (
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Error</h1>
      <p>{error.message}</p>
      <a href="/">Back to homepage</a>
    </div>
  );
}
