import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Breadcrumps() {
  const location = useLocation();

  let currentLink = "";
  const crumb = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +`/${crumb}`;

      return (
        <div key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  console.log(location);
  return <div>{crumb}</div>;
}
