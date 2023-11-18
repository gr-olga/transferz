import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/home/Home";
import Journeys from "./pages/journeys/Journeys";
import GraphiQL from "./pages/graphiql/GraphiQL";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "graphiql",
        element: <GraphiQL />,
      },
      {
        path: "journeys",
        element: <Journeys />,
      },
    ],
  },
]);
