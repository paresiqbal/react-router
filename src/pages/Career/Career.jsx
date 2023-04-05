import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export default function Career() {
  const career = useLoaderData();

  return (
    <div className="flex flex-col gap-4 pt-5">
      {career.map((career) => (
        <Link
          to={career.id.toString()}
          key={career.id}
          className="bg-slate-800 py-2 px-4 rounded-md text-xl"
        >
          <p>{career.title}</p>
          <p>{career.location}</p>
        </Link>
      ))}
    </div>
  );
}

// loader funtion
export const careerLoaders = async () => {
  const response = await fetch("http://localhost:4000/career");

  if (!response.ok) {
    throw Error("Cannot fetch career");
  }

  return response.json();
};
