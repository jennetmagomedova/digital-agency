import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Services from "./pages/Services";
import Work from "./pages/Work";

const router = createBrowserRouter([
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router}> </RouterProvider>;
}

export default App;
