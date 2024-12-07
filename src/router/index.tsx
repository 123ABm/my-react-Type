import Login from "@/page/Login";
import Role from "@/page/Role";
import Go from "@/page/go";
import Play from "@/page/play";
import Souye from "@/page/souye";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/role",
    element: <Role />,
  },
  {
    path: "/play",
    element: <Play />,
  },
  {
    path: "/Souye",
    element: <Souye />,
  },
]);
export default router;
