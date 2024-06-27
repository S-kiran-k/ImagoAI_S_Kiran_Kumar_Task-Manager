import { createBrowserRouter } from "react-router-dom";
import Applayout from "../Applayout/Applayout";

const Approutes = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
 
    ],
  },
]);

export default Approutes;
