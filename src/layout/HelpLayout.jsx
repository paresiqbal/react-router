import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="p-5">
      <h1 className="text-5xl text-center font-bold pb-2">Help Pages</h1>
      <p className="text-xl pb-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, nostrum?
      </p>

      <nav className="flex justify-center gap-10 text-3xl ">
        <NavLink
          to="faq"
          className="border-2 px-3 pb-2 rounded-md border-purple-700"
        >
          FAQ
        </NavLink>
        <NavLink
          to="contact"
          className="border-2 px-3 pb-2 rounded-md border-purple-700"
        >
          Contact
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
