import { Outlet } from "react-router-dom";

export default function CareerLayout() {
  return (
    <div className="p-5">
      <h1 className="text-5xl font-bold">Career</h1>

      <Outlet />
    </div>
  );
}
