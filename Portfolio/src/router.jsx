import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Landing from "./pages/landing/Landing";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Services from "./pages/services/Services";
import ErrorPage from "./pages/error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
