import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Help/Faq";
import Contact, { contactAction } from "./pages/Help/Contact";
import NotFound from "./pages/NotFound";
import CareerError from "./pages/Career/CareerError";

// layout
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import CareerLayout from "./layout/CareerLayout";

// loaders
import CareerDetail, { careerDetailLoader } from "./pages/Career/CareerDetail";
import Career, { careerLoaders } from "./pages/Career/Career";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      {/* Career Pages */}
      <Route
        path="career"
        element={<CareerLayout />}
        errorElement={<CareerError />}
      >
        <Route index element={<Career />} loader={careerLoaders} />
        <Route
          path=":id"
          element={<CareerDetail />}
          loader={careerDetailLoader}
        />
      </Route>

      {/*404 page*/}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
