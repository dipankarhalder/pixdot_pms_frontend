import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
