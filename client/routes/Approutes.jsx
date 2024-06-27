import { createBrowserRouter } from "react-router-dom";
import Applayout from "../Applayout/Applayout";
import TaskManager from "../src/components/TaskManager/TaskManager";
import TaskManagerAddItems from "../src/components/TaskManagerAddItems/TaskManagerAddItems";

const Approutes = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [

        {
            path:"/tolistitems",
            element:<TaskManager/>
        },{
          path:"/",
          element:<TaskManagerAddItems/>
        }
    ],
  },
]);

export default Approutes;
