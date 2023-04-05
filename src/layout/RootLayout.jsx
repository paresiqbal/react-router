import { NavLink, Outlet } from "react-router-dom";
import Breadcrumps from "../components/Breadcrumps";

export default function RootLayout() {
  return (
    <div>
      <header className="p-5 flex gap-3 text-2xl justify-end">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="help">Help</NavLink>
        <NavLink to="career">Careers</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
