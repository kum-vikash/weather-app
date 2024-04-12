import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Section from "../components/Section/Section";
import Info from "../components/Main/Info";
import Forecast from "../components/Main/Forecast";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Section />,
      },
      {
        path: "/info",
        element: <Info />,
      },
    ],
  },
]);
