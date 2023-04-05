import { useLoaderData, useParams } from "react-router";

export default function CareerDetail() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="flex flex-col bg-slate-800 p-10 mt-10 rounded-md gap-2">
      <h2 className="text-2xl font-semibold">
        Career Details for {career.title}
      </h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum
          natus, repudiandae eaque nam rerum perferendis commodi voluptatem
          porro magnam.
        </p>
      </div>
    </div>
  );
}

// loader function
export const careerDetailLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch("http://localhost:4000/career/" + id);

  if (!response.ok) {
    throw Error("Cannot find that careers");
  }
  return response.json();
};
