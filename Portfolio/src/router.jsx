import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Landing from "./pages/landing/Landing";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Services from "./pages/services/Services";
import ErrorPage from "./pages/error/ErrorPage";
import PetitRenard from "./pages/projects/subpages/PetitRenard";
import AllProjects from "./pages/projects/subpages/AllProjects";
import SelfTaught from "./pages/projects/subpages/SelfTaught";
import WIP from "./pages/projects/subpages/WIP";
import Restauration from "./pages/projects/subpages/Restauration";
import Ambassador from "./pages/projects/subpages/Ambassador";
import MotionOcean from "./pages/projects/subpages/MotionOcean";
import TimelinePage from "./pages/timeline/TimelinePage";

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
            path: "/timeline",
            element: <TimelinePage />,
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
                path: "work-in-progress",
                element: <WIP />,
              },
              {
                path: "petit-renard",
                element: <PetitRenard />,
              },
              {
                path: "self-taught",
                element: <SelfTaught />,
              },
              {
                path: "restauration",
                element: <Restauration />,
              },
              {
                path: "ambassador",
                element: <Ambassador />,
              },
              {
                path: "motion-ocean",
                element: <MotionOcean />,
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
