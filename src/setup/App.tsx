import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "modules/homepage";
import { SecondPage } from "modules/second-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/second-page",
      element: <SecondPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
