import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Landing from "./pages/landing/Landing";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Services from "./pages/services/Services";
import ErrorPage from "./pages/error/ErrorPage";
import PetitRenard from "./pages/projects/subpages/PetitRenard";
import AllProjects from "./pages/projects/subpages/AllProjects";

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
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
            children: [
              {
                index: 1,
                element: <AllProjects />,
              },
              {
                path: "petit-renard",
                element: <PetitRenard />,
              },
            ],
          },
          {
            path: "/services",
            element: <Services />,
          },
          {
            path: "*",
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);
