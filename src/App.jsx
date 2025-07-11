import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Process from "./pages/Process";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/work",
          element: <Work />,
        },
        {
          path: "/process",
          element: <Process />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/careers",
          element: <Careers />,
        },
        {
          path: "/contacts",
          element: <Contact />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

function App() {
  return <RouterProvider router={router}> </RouterProvider>;
}

export default App;
